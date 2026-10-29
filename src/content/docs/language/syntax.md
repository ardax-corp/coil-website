---
title: Syntax reference
description: Complete grammar overview for coil source (.hy). This document describes what the parser accepts today; see Types, Operators, and Keywords for semantics.
---

# Syntax reference

Complete grammar overview for coil source (`.hy`). This document describes what the parser accepts today; see [Types](/docs/language/types), [Operators](/docs/language/operators), and [Keywords](/docs/reference/keywords) for semantics.

---

## File formats

| Extension | Role |
|-----------|------|
| `.hy` | Source text parsed by `parser::Pratt` |
| `.hyc` | Compiled bytecode archive (rkyv-serialized `ArchivedProgram`) |

Programs are sequences of **declarations** and **statements**. Most top-level items are declarations; statements appear inside function bodies and blocks.

---

## Attributes

Rust-style attributes attach metadata to top-level `fn`, `enum`, and `class` declarations (and to methods inside `impl` blocks):

```
attr_list   ::= ('#[' attribute ']')*
attribute   ::= ident
              | ident '(' ident (',' ident)* ')'
              | ident '(' kv (',' kv)* ')'
              | ident '(' literal (',' (literal | kv))* ')'
              | ident '(' string ')'
kv          ::= ident '=' (string | int | float | 'true' | 'false')
literal     ::= string | int | float | 'true' | 'false'
```

Examples:

```coil
use my_macros::{add_after};

#[derive(Show, Eq, Ord)]
enum Color { Red, Blue }

#[max_depth(64)]
fn walk(int n) -> int {
    if n == 0 { return 0; }
    return walk(n - 1);
}

// An attribute macro from `my_macros`: its output replaces the function.
#[add_after(by = 10)]
fn triple(int x) -> int { return x * 3; }
```

| Attribute | Target | Semantics |
|-----------|--------|-----------|
| `#[derive(Trait, …)]` | `enum` / `class` | Runs each derive (built-in `Show`, `Eq`, `Ord`, `Hash`, `Default`, `Send`, `Sensitive`, or a user `derive` imported with `use`) and adds its output after the type. Without derive, non-generic **payload** types still get a default `Show`: a class returns its type name string, an enum its qualified variant name (`E::V`, payload elided). Scalar-backed enums with `#[derive(Show)]` print the backing word instead. |
| `#[repr(int)]` / `#[repr(string)]` / `#[repr(float)]` / `#[repr(bool)]` | `enum` | Scalar-backed enum: each case is `Name = lit` of that primitive. May be omitted when every case has `=` and the literals share one type. See [Types — Scalar-backed enums](/docs/language/types#scalar-backed-enums). |
| `#[max_depth(N)]` | recursive `fn` | Optional hint: presizes the VM stack for `N` simultaneous frames when the compiler cannot prove a depth (dynamic args, mutual recursion). The stack grows at run time either way, so a wrong `N` only costs a regrow. `N` must be a positive integer. |
| Attribute macro `#[name(…)]` | `fn`, methods, `class`, `enum` | Runs the `attr name(…)` macro imported with `use`; its output replaces the item. See [Macros](/docs/language/macros#attribute-macros). |

Several attribute macros on one item apply outermost first. Unknown attribute names are rejected at compile time.

### Macro declarations and calls

```
derive_decl   ::= 'derive' IDENT arg_list '->' type ('attrs' '(' IDENT (',' IDENT)* ')')? block
attr_decl     ::= 'attr' IDENT arg_list '->' type block
macro_decl    ::= 'macro' IDENT arg_list '->' type block
macro_call    ::= IDENT '!(' (expr (',' expr)*)? ')'      // no space between `!` and `(`
quote_expr    ::= 'quote' ('items' | 'expr' | 'stmts' | 'type') '{' template '}'
```

`pure` (directly before `fn`) and `uses` (after a function's signature) are contextual too; see [Effects](/docs/language/effects). `derive`, `attrs`, `macro` and `quote` are contextual: they are ordinary identifiers elsewhere (`use macro::{…}` names the model module). A `macro_call` is an expression; written as a statement (`name!(…);`) its output is statements, or declarations at the top level. See [Macros](/docs/language/macros).

`#[test]` and `#[ffi]` are rejected with an error. Write test cases as top-level [`test("desc") { … }`](/docs/language/test-harness) blocks, and compile-time C bindings as `extern "lib" { fn …; }` blocks ([FFI](/docs/reference/ffi)).

---

## Lexical structure

| Element | Rules |
|---------|-------|
| Identifiers | ASCII letters, digits, underscore; should not be a [keyword](/docs/reference/keywords) (the parser does not reject most of them yet) |
| Integers | Decimal (`42`, `-1`) |
| Floats | Decimal with fraction (`1.0`, `3.14`) — parsed before postfix `.field` |
| Strings | `"..."` — escapes: `\\` `\"` `\n` `\r` `\t` `\0` `\e` `\xHH` `\u{HEX}` |
| Comments | `//` to end of line (not `///`), or `/* … */` (may span lines and nest). Comments may appear between any two tokens: inside class / enum bodies, lists, records, call arguments, match arms, or after code on the same line |
| Doc comments | `///` lines immediately before a declaration or function parameter (attached as docs) |
| Whitespace | Insignificant except as token separator |

---

## Program

```
program ::= declaration*
```

Every runnable program needs `fn main() { ... }`, which takes no parameters (read arguments with `env::args()`) (spool can take the entry file from `[entry]` in `coil.toml`).

---

## Declarations

Top-level forms (order in parser `choice`):

```
declaration ::= class_decl
              | impl_decl
              | function_decl
              | attr_decl
              | type_alias
              | use_stmt
              | mod_stmt
              | enum_decl
              | defer_stmt          // also a statement inside function bodies
              | extern_block
              | statement
```

### Functions

```
function_decl ::= attr_list? 'gen'? 'static'? 'pure'? 'fn' IDENT type_param_list? arg_list
                  ('->' type_annotation)? where_clause? uses_clause? contract_clause* (block | ';')
type_param_list ::= '<' type_param (',' type_param)* '>'
type_param      ::= IDENT (':' (kind | class_bound ('+' class_bound)*))?
kind            ::= '*' | 'Constraint' | kind '->' kind | '(' kind ')'
class_bound     ::= IDENT
where_clause    ::= 'where' where_constraint (',' where_constraint)*
where_constraint ::= IDENT '<' type_annotation (',' type_annotation)* '>'
uses_clause     ::= 'uses' '{' (effect (',' effect)*)? '}'   // not with 'pure'
effect          ::= 'read' | 'write' | 'net' | 'env' | 'exec' | 'ffi' | 'thread' | 'suspend' | 'mutate'
contract_clause ::= ('requires' | 'ensures') expr (',' STRING)?   // see Contracts
arg_list      ::= '(' (arg (',' arg)*)? ')'
arg           ::= type_annotation '...'? IDENT   // `T... name` → `Vec<T>`; bare `... name` → tuple pack
```

### Attribute declarations

```
attr_decl   ::= 'attr' IDENT type_param_list? '(' attr_param (',' attr_param)* ')'
                ('->' type_annotation)? where_clause? block
attr_param  ::= type_fn_sig IDENT          // first param: `fn(...args) -> T target`
              | type_annotation IDENT      // middle extras: `string message`, …
              | '...' IDENT                // trailing tuple-rest: forwarded call args
type_fn_sig ::= 'fn' '(' '...' IDENT ')' '->' type_annotation
```

Arity overloads (same name, different arities / rest ranges), **type overloads** (same arity, distinct parameter types — e.g. `show(int)` / `show(float)`), first-class monomorphic functions (`let f = add`), positional and named partial application, and explicit-capture lambdas (`fn (T x) use (y) => …`) are supported. See `examples/overload.hy`, `examples/type_overload.hy`, `fn_value.hy`, and `lambda.hy`.

A lambda may sit inside a generic function: it is compiled at each instantiation's types, so it can capture values of a type parameter, take or return `T` (or a tuple, `Option` or `Result` of it), call other generic functions, nest inside another lambda, use the function's own trait bounds (`%v` through `T: Show`, `<` through `T: Ord`, `+` through `T: Num`, or a call to another bounded function), and be returned to the caller. A returned lambda can be passed on to a function-typed parameter, bound and called (`fn maker<T>(T x) -> (unit -> T) { return fn () use (x) => x; }`, then `let g = maker(3); g()`), or called in place (`maker(3)()`, as `adder(3)(4)` for any function returning a lambda). Once a generic function has more instantiations than it is compiled for separately (warning E0804), its shared body's lambda is wrapped so it is called at the caller's types like any other (boxing its `T` arguments and unboxing a `T` result). Past that cap a call is not compiled yet (E0801) when the lambda's own types hold a type parameter inside another type (`unit -> Option<T>`, `int -> (T, int)`, unless it stands for a function type), take or return a `T` that is `()` or a scalar-backed enum, or have several parameters, or when the function is a method.


Call sites may use named arguments (`name: expr`) after any positional
prefix. Arguments are evaluated in the order they are written, whatever
the parameter order: `f(b: g(), a: h())` runs `g` before `h`. The same holds
for named constructor arguments (`new P(y: …, x: …)`). Rest parameters are positional-only and pack trailing values
into one vector (`T... xs` → `Vec<T>`) or tuple (`... xs` → `(T1, …, Tn)`).

A bare `... xs` takes the shape of each call: `count(1, 2)`, `count(1, "a")`
and `count()` pack `(int, int)`, `(int, string)` and `()`. The function is
checked and compiled once per distinct pack, like a template, so its body
uses `xs` as that tuple: `xs.len()` is the pack's length, `xs[0]` has the
first argument's type, and a runtime `xs[i]` needs all elements to share a
type. An error in the body is reported for the pack that causes it, and a
body that is never called is never checked. A function whose calls keep
growing the pack (`fn grow(... xs) { grow(1, ...xs); }`) stops with an
error. Another module can import and call it too: each argument list it
uses gets a copy made in the declaring module, and copies are shared
between importers.

A method's rest parameter packs its trailing arguments the same way, after
any named fixed arguments: `h.label(head: "n", 1, 2)`, `h.pair(1, "a")`.
An inherent method's bare `... xs` (instance or `static fn`, on a generic
class too) is a template the same way: `h.count(1, "a")` and `h.count()`
each get their own copy. Only the method's own module can call it; a call
from another module is an error (give the rest parameter a type, `T... xs`,
or call it through a function of that module).

```coil
fn first(... xs) { return xs[0]; }
first(7, "x");        // 7
first("y", 2);        // "y"
```

Call-site spread forwards packed values as separate arguments:

```
call        ::= callee '(' (call_arg (',' call_arg)*)? ')'
call_arg    ::= expr | '...' expr
```

| Spread operand type | Semantics |
|---------------------|-----------|
| Tuple `(T1, …, Tn)` | Each element becomes one argument |
| Fixed array `[T; N]` | Each element becomes one argument |
| `Vec<T>` | Only as the last argument to a `T... xs` rest parameter: the `Vec` itself is the rest pack. Into fixed parameters it is error E0119 |
| Other | Compile error |

Examples:

```coil
fn triple(int a, int b, int c) -> int { return a + b + c; }
triple(...(1, 2, 3));          // tuple spread
triple(...[10, 20, 30]);       // array spread

fn total(int... xs) -> int { /* ... */ }
fn forward(int... xs) -> int { return total(...xs); } // Vec spread into a rest
```

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn add(int a, int b) -> int { return a + b; }
fn add<T: Num>(T a, T b) -> T { return a + b; }
fn apply_cast<A, B>(A x) -> B where Convert<A, B> { return cast(x); }
fn greet() { write_all(stdout(), to_bytes("hi")); }
fn sum(int... xs) -> int { return xs.len(); }
sum(1, 2, 3);   // xs == [1, 2, 3]
sum();          // xs == []

// Compile-time FFI is `extern "lib" { fn …; }` only (not a signature-only `fn`).
extern "c" {
    fn strlen(string s) -> int;
}
```

### Traits and impl

```
trait_decl ::= 'trait' IDENT type_param_list '{' trait_item* '}'
trait_item ::= assoc_type_decl | method_sig
assoc_type_decl ::= 'type' IDENT type_param_list? ';'
method_sig     ::= 'fn' IDENT arg_list ('->' type_annotation)? (';' | block)
impl_decl      ::= 'impl' IDENT type_arg_list? 'for' type '{' impl_item* '}'
                 | 'impl' IDENT type_arg_list '{' impl_item* '}'   // inherent methods on a type
impl_item      ::= assoc_type_def | method_decl
assoc_type_def ::= 'type' IDENT type_param_list? '=' type ';'
type_arg_list  ::= '<' type (',' type)* '>'
type_projection ::= IDENT '::' IDENT type_arg_list?
                 // e.g. Collect::Elem, C::Elem, Pointer::Ref<int>, P::Ref<A>
```

The type after `for` is prepended as the first type argument (Self slot):
`impl Show for Foo` ≡ `impl Show<Foo>`, and
`impl Thing<A, B> for Foo` ≡ `impl Thing<Foo, A, B>`.

Example:

```coil
// Builtin arithmetic: Add / Sub / Mul / Div / Neg / Rem / Pow (Num implies all seven).
// Builtin ordering: Lt / Le / Gt / Ge (Ord implies all four, and Eq).

trait Collect<C> {
    type Elem;
    fn head(C xs) -> Elem;
}

impl Collect for Option<int> {
    type Elem = int;
    fn head(Option<int> xs) -> int { /* … */ }
}

trait Pointer<P: * -> *> {
    type Ref<T>;
    fn deref<T>(P<T> ptr) -> Ref<T>;
}

impl Pointer for Option {
    type Ref<T> = T;
    fn deref<T>(Option<T> ptr) -> T { /* … */ }
}

impl Measurable for int {
    fn size(int x) -> int { return x; }
}
```

Generic functions use `type_param_list` on `fn` (see above). Bounds use `+`
between trait names (`T: Num + Eq` or `T: Add`). Multi-parameter traits use a trailing
`where Trait<T1, T2>` clause; a unary `where Num<T>` is an error. A
single-parameter bound is written on the parameter: `fn f<T: Num>`, or, for
methods that need a bound on an impl's parameter, a separate bounded impl
block `impl Cell<T: Num> { … }` next to the unbounded `impl Cell<T>`.
Higher-kinded parameters use explicit kind annotations (`F: * -> *`,
`F: * -> * -> *`, or `F: (* -> *) -> *`); a bound whose trait parameter is
constructor-kinded (for example `F: Container`) also implies that kind. A
parameter can carry both an explicit kind and a bound:
`F: * -> * -> *, Bifunctor`.

Constraint-kind parameters use `Constraint` as the result kind:
`fn apply_c<c: * -> Constraint, T: c>(T x) -> string { return show(x); }`.
The abstract `T: c` bound must be resolved by method/operator/`%v` use in the
function body so codegen can pass a concrete dictionary at call sites.

### Enums

```
enum_decl   ::= attr_list? 'enum' IDENT type_param_list? '{' enum_variant (',' enum_variant)* ','? '}'
enum_variant ::= IDENT variant_payload? ('=' scalar_lit)?
variant_payload ::= unit | tuple_payload | record_payload
unit            ::= /* nothing, or empty () */
tuple_payload   ::= '(' type (',' type)* ')'
record_payload  ::= '{' field_decl (',' field_decl)* '}'
field_decl      ::= IDENT ':' type
scalar_lit      ::= int | float | string | 'true' | 'false' | '-' int
```

`=` on a variant is a scalar discriminant. It cannot mix with a tuple or record payload. See [Types — Scalar-backed enums](/docs/language/types#scalar-backed-enums).

Grammar (with optional attributes):

```
enum_decl ::= attr_list? 'enum' IDENT type_param_list? '{' variant (',' variant)* ','? '}'
```

Example:

```coil
enum Tree { Leaf, Node(int, Tree, Tree) }
enum Point { Origin, Point { x: int, y: int } }
#[derive(Show, Eq, Ord)]
enum Color { Red, Blue }
#[repr(int)]
enum Status { Ok = 200, NotFound = 404 }
```

### Type aliases

```
type_alias ::= 'type' IDENT type_param_list? '=' type_annotation ';'
```

Examples: `type PointPair = (int, int);`, `type Pair<T> = (T, T);`

### Modules

```
use_stmt ::= 'use' use_path ';'
use_path ::= IDENT ('::' IDENT)* '::' '{' use_item (',' use_item)* ','? '}'
           | IDENT ('::' IDENT)* ('as' IDENT)?
use_item ::= IDENT ('as' IDENT)?
mod_stmt ::= 'mod' IDENT ';'
```

(`use path::*` is still parsed but always rejected at typecheck with `E0124`;
prelude is auto-injected — no source `use prelude::*` needed.)

Brace groups (`use math::{add, mul};`) desugar to multiple single-item `use`s.
See [Modules reference](/docs/language/modules).

### Extern (FFI)

```
extern_block    ::= 'extern' STRING '{' extern_fn* '}'
extern_fn       ::= 'fn' IDENT extern_arg_list ('->' type)? ';'
extern_arg_list ::= '(' (T name (',' T name)* (',' '...')? | '...')? ')'
```

Fixed parameters use `T name` (same as ordinary FFI args). A trailing bare
`...` marks C-style varargs (`printf`-style). Language rest `T... name` is
rejected inside `extern` — use bare `...` instead.

Example:

```coil
extern "c" {
    fn strlen(string s) -> int;
    fn printf(string fmt, ...) -> int;
}
```

`extern "c"` is a libc alias and is **denied** by the `dload` gate. See [FFI tutorial](/docs/manual/tutorial/16-ffi) and [Project config — `[ffi]`](/docs/language/project-config#ffi).

Signature-only `fn foo() -> T;` outside `extern` is a parse error. Runtime loading stays `use ffi::{dload, declare, invoke}`.

### Classes and impl

```
class_decl ::= attr_list? 'readonly'? 'class' IDENT type_param_list? '{' field_decl (',' field_decl)* ','? '}'
field_decl ::= 'pub'? IDENT ':' type

impl_decl  ::= 'impl' IDENT type_param_list? '{' method_decl* '}'
method_decl ::= 'pub'? function_decl
```

`type_param_list` is the same form as on functions (`<T>`, `<T: Num>`, …).
An inherent `impl Cell<T>` shares those parameters with the class so methods
can mention `T` and type `self` as `Cell<T>`.
See [Trait derive](/docs/language/types#trait-derive) for `#[derive(...)]`.

Example:

```coil
class Foo { pub name: string, count: int, }
impl Foo {
    pub fn bump() -> int { return 1; }
    fn name_len() -> int { return 0; }
}

#[derive(Show, Eq)]
class Cell { value: int }

class Cell<T> { value: T }
impl Cell<T> {
    fn get() -> T { return self.value; }
}
```

Classes support positional constructor args (field order), field read/write, and method calls with implicit `self`. See `examples/classes.hy` and `examples/generic_class.hy`.

An inherent `fn drop()` is a GC-time finalizer (not RAII). The receiver is implicit `self` by value (same as other instance methods); it must return `unit` and appear at most once per class. Explicit `obj.drop()` is allowed and counts toward the once-limit. Storing `self` from `drop` can keep the object alive after the sweep; drop still runs at most once. See [`gc`](/docs/reference/gc).

Inherent method names are **not** bound as bare identifiers inside the method body (so `use thread::{send, recv};` keeps `send` / `recv` visible even if you write `fn send(...)`). Call the method as `self.send(...)` (or `Class::method(...)` for `static fn`). Bare `send(...)` resolves to the imported function.

Note: trait `impl` (`impl Collect<Option<int>> { … }`) uses a different
parse path — see [Traits and impl](#traits-and-impl) above.

### Defer

```
defer_stmt ::= 'defer' ['use' '(' ident (',' ident)* ','? ')'] block
```

Runs when the enclosing function exits via `return` or fall-through (LIFO
order for multiple defers). A `panic` or a task cancel also runs the defers of
every function it leaves (those whose `defer` statement was reached).
Functions that contain a `defer` are not eligible for self tail-call
optimization (cleanup must run before leaving the frame). Outer locals must
be listed in the optional `use (…)` capture list (same explicit-capture rule
as lambdas); bare `defer { … }` cannot close over enclosing locals.

---

## Statements

Inside `{ ... }` blocks:

```
statement ::= while_stmt
            | while_let_stmt
            | for_stmt
            | break_stmt
            | continue_stmt
            | if_stmt
            | if_let_stmt
            | block
            | let_stmt
            | const_stmt
            | defer_stmt
            | expr_stmt
            | return_stmt
```

| Statement | Syntax |
|-----------|--------|
| `let` | `let IDENT (':' type_annotation)? ('=' expr)? ';'` |
| `const` | `const IDENT (':' type_annotation)? '=' expr ';'` |
| `static` | `static let IDENT …` (top-level only; `static const` is deprecated, write `const`) |
| `defer` | `defer [use (ident,*)] { statement* }` (runs on enclosing function exit, LIFO; outer locals require `use`) |
| Expression | `expr ';'` |
| `return` | `return [expr] ';'` (`return;` returns unit) |
| `yield` | `yield expr ';'` or `yield from expr ';'` |
| `while` | `while expr loop_clause* block` — `loop_clause` is `invariant expr` or `decreases expr` ([Contracts](/docs/language/contracts)); a `for` takes `invariant` the same way |
| `for` | `for IDENT in expr block` — via prelude `IntoIterator` / `Iterator` (arrays, homogeneous tuples, ranges, coroutines, or user `impl`s — not records; see [Built-ins](/docs/reference/prelude/Iterator)). C-style `for (init; cond; step)` is a parse error. |
| `break` | `break ';'` (innermost loop) |
| `continue` | `continue ';'` (jumps to the `while` condition / next for-in iteration) |
| `if` | `if expr block ('else' (block \| if_stmt \| if_let_stmt))?` |
| `if let` | `if let pattern '=' expr block ('else' (block \| if_stmt \| if_let_stmt))?` — runs the block when the value matches the pattern, with its bindings in scope; the same patterns as a `match` arm |
| `while let` | `while let pattern '=' expr block` — repeats while the value matches the pattern; stops at the first value that does not |
| Block | `'{' statement* '}'` |

### `let` desugaring

`let x: int = 5;` produces a variable declaration fragment followed by initializer expression. Type-only `let x: int;` is allowed. A scalar (`int`, `float`, `bool`, `byte`) starts at zero. Any other type (`string`, a class, `Vec<T>`, a tuple) must be assigned on every path before it is read, or compilation fails with `E0132`; an assignment inside a loop body does not count after the loop, and a closure capturing the local reads it when the closure is made.

`static let` is a top-level declaration only; its initializer runs in the program prologue before `main`, as does that of a top-level `const` whose value does not fold at compile time.

A parameter, `let`, pattern or loop binding, or `use` capture with the same name as a static shadows it within its scope: reads and writes there go to the local, and the static is unchanged.

### Empty index (`arr[]`) — removed

`arr[] = value` (append assignment) is **no longer supported** (`E0107`).
Use `vec.push(value)` on a `Vec<T>`. See [Arrays and Vec](/docs/language/arrays).

### `readonly` expressions

Prefix `readonly` on any expression views its value read-only. It binds like unary `-`, so `readonly p.inner` is `readonly (p.inner)`:

```coil
let xs = readonly [1, 2, 3];
let p = readonly new Point(1, 2);
let i = readonly q.inner;
```

In a type, `readonly T` is written anywhere a type is: `fn f(readonly Point p) -> readonly Vec<int>`, `let v: Vec<readonly Point> = …;`. See [Types — Readonly](/docs/language/types#readonly-types).

---

## Expressions

Expression grammar uses a **Pratt parser** with atoms and operator precedence (see [Operators](/docs/language/operators)).

### Atoms (primary forms)

```
atom ::= match_expr
       | resume_expr | yield_expr
       | tuple_lit | array_lit | dict_lit
       | construct | call | instantiate
       | float | int | string
       | 'true' | 'false'
       | 'new' IDENT ('(' args? ')')?
       | IDENT
       | group
```

`dload` / `declare` / `invoke` are ordinary `IDENT` calls after `use ffi::{dload, declare, invoke};` (not keyword atoms).

Primitive casts use postfix `expr as T` (`int` / `float` / `byte` / `bool`). `float as int` truncates toward zero (not `round`/`floor`); see [Built-ins](/docs/language/casts).

| Form | Syntax | Notes |
|------|--------|-------|
| Group | `(expr)` | Single expr — **not** a 1-tuple |
| Tuple | `(e1, e2)` or `(e,)` | Comma required for tuple |
| Array | `[e1, e2, ...]` or `[]` | Homogeneous; literal → `[T; N]`; empty `[]` needs `Vec<T>` / `[T; 0]` |
| Record | `{ name: expr, ... }` | Anonymous record; field names must be unique (`E0208`) |
| Construct | `Enum::Variant(...)` | Qualified constructor (`::` only; not `Enum.Variant`) |
| Call | `f(args)` | Args are positional `expr` and/or named `name: expr` (positional prefix, then named; no positional after named). Includes user functions and FFI-wrapped extern fns |
| Instantiate | `new Class(args)` | Class construction |
| Match | `match expr '{' arm (',' arm)* '}'` | See patterns below |
| Index | `expr '[' expr ']'` | Postfix |
| Access | `expr '.' IDENT` | Postfix field access |
| Resume | `resume expr ('with' expr)?` | Continue coroutine; optional send value |
| Yield | `yield expr` | Suspend with yielded value |
| Yield from | `yield from expr` | Delegate to sub-coroutine handle |

### Coroutines

```
gen_fn       ::= 'gen' function_decl
resume_expr  ::= 'resume' expr ('with' expr)?
yield_expr   ::= 'yield' ('from' expr | expr)
binding_yield ::= 'let' IDENT '=' yield_expr
```

Examples:

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
gen fn ping() {
    let msg = yield "ready";
    write_all(stdout(), to_bytes(format("%s", msg)));
}

fn main() {
    let h = ping();
    resume h;
    resume h with "hello";
}
```

See [Tutorial: Coroutines](/docs/manual/tutorial/12-generators).

### Assignment

Assignment is an expression (lowest precedence):

```
assignment ::= lvalue assign_op expr
assign_op    ::= '=' | '+=' | '-=' | '*=' | '/=' | '%=' | '**=' | '<<=' | '>>=' | '&=' | '|=' | '^='
lvalue       ::= IDENT | access | index
adjust       ::= ('++' | '--') lvalue | lvalue ('++' | '--')
```

Compound assignment is right-associative. Prefix/postfix `++`/`--` bind at unary and primary precedence respectively.

---

## Patterns (`match`)

```
pattern ::= '_' | 'default'
          | IDENT
          | INTEGER
          | IDENT '::' IDENT pattern_payload?
          | IDENT (tuple_pattern | record_pattern)   /* bare case: Some(v) */
pattern_payload ::= unit | tuple_pattern | record_pattern
tuple_pattern   ::= '(' pattern (',' pattern)* ')'
record_pattern  ::= '{' field_pattern (',' field_pattern)* '}'
field_pattern   ::= IDENT (':' pattern)?   /* shorthand: x => x: x */
```

Field names in a record literal, constructor, pattern, or enum variant field list must be unique (`E0208`).

`default` is the **only** match catch-all. It must appear as a whole arm (`default => …`). A whole-arm `_ =>` is illegal (`E0216`). Nested `_` stays legal inside constructor, tuple, and record patterns (`Result::Err(_)`, `Option::Some(_)`) and in `let` destructuring. Two `default` arms in one `match` is `E0215`. Combining `default` with a whole-arm `_` is also illegal (the `_` is still `E0216`).

Constructor patterns use `Enum::Variant`, same as expressions. A bare case name works too (`Some(v)`, `Ok(n)`, `Rect { w, h }`, `None`): it names the scrutinee's enum when that enum declares the case, otherwise the one enum in scope that declares it. A name two enums declare, with a scrutinee that picks neither, is ambiguous (`E0201`); a bare `Name(..)` that no enum declares is `E0211`. A bare name with no payload is a unit case only when it starts with an uppercase letter and an enum declares it; any other name (`x`, `other`, a record field shorthand) is a binding.

Integer literal patterns match an `int` scrutinee by value. Literal arms can
never cover every `int`, so the match needs a `default` or binding arm
(`E0209` otherwise):

```coil
let kind = match status {
    200 => "ok",
    404 => "missing",
    default => "other",
};
```

Literals and constructors nested in a payload are tested as well:
`Option::Some(200)` matches only `Some(200)`, and a value it does not match
tries the next arm. Exhaustiveness and reachability look at payloads too: an
arm that earlier arms already cover is `E0210`, and a match whose arms leave
some payload uncovered (`Option::Some(200)` and `Option::None` alone) is
`E0209`:

```coil
let text = match reply {
    Option::Some(200) => "ok",
    Option::Some(404) => "missing",
    Option::Some(_) => "other",
    Option::None => "no reply",
};
```

```coil
match x {
    Option::None => 0,
    Option::Some(v) => v,
    default => -1,
}

match p {
    Point::Point { x, y } => x + y,
}

match s {
    Status::Ok => "ok",
    default => "other",
}

match r {
    Result::Err(_) => -1,
    Result::Ok(v) => v,
}
```

`match` copies the scrutinee (fields included). Nested `match` on the same value is allowed; outer pattern bindings stay in scope unless an inner pattern shadows them. See [Enums and Match](/docs/manual/tutorial/05-enums-and-match#match). Pattern matching is spelled `match` only; `case` is not an alias ([limitations.md](https://github.com/ardax-corp/coil-lang/blob/main/docs/internals/limitations.md)).

---

## Type annotations

Used in function parameters and returns, class fields, `let`, generic
arguments, enum payloads, and type aliases. Every position takes the same
grammar, function types included:

```
type_annotation ::= (fn_type | type_atom) ('->' type_annotation)?   // `->` is right-associative
fn_type         ::= 'fn' '(' (fn_type_param (',' fn_type_param)*)? ')' '->' type_annotation
fn_type_param   ::= arg | type_annotation   // names optional: `fn(int x) -> int` or `fn(int) -> int`
type_atom       ::= array_type | tuple_type | '(' type_annotation ')' | type_projection | type_app | IDENT
array_type      ::= '[' type ';' INT ']'
tuple_type      ::= '(' type (',' type)+ ')'
type_app        ::= IDENT '<' type (',' type)* '>'
type_projection ::= IDENT '::' IDENT type_arg_list?
```

| Form | Meaning |
|------|---------|
| `int` | Primitive or type constructor name |
| `[int; 5]` | Fixed-length array (length 5); `N` inferred from literals when possible |
| `Vec<int>` | Growable heap vector |
| `(int, string)` | Tuple type (comma required) |
| `int -> int` | Function type (arrow spelling); `int -> int -> int` takes two `int`s |
| `fn(int x) -> int` / `fn(int) -> int` | The same function type, signature spelling; parameter names are optional and only document |
| `fn() -> int` | A function taking no arguments; the same type as `unit -> int` |
| `(int -> int) -> int` | Parentheses group a type: a function taking a function |
| `C::Elem` | Associated type projection |
| `P::Ref<A>` | Generic associated type projection with type arguments |

Both function spellings mean the same type and work anywhere a type is written:

```coil
type IntFn = fn(int x) -> int;

class Handler {
    pub op: fn(int) -> int,
}

fn apply(fn(int) -> int f, int v) -> int { return f(v); }
fn apply2(int -> int f, int v) -> int { return f(v); }

fn main() {
    let g: IntFn = fn (int x) => x + 1;
    let fs: Vec<fn(int) -> int> = [g];
}
```

Bare `[int]` (no `; N`) is a type error (`E0119`) — use `[int; N]` or `Vec<int>`.
Primitive names are case-insensitive in the typechecker (`String` ≡ `string`).

---

## `match` arms

```
arm ::= pattern '=>' (block_expr | expr)
block_expr ::= '{' (expr ';'?)* '}'
```

Arms are comma-separated inside `match { ... }` (a trailing comma after the last arm is allowed; `coil fmt` always writes one). A `match` needs at least one arm. Close exhaustiveness with `default =>`, not a whole-arm `_`. Nested `_` is a payload wildcard only.

A `match` at the start of a statement ends at its closing `}`, like `if`, so it
needs no `;` (one is still accepted, and `coil fmt` removes it). A `.` or `?`
right after the `}` continues an expression instead
(`match x { … }.show();`).

```coil
match dir {
    Dir::Left => {
        turn(-1);
    },
    Dir::Right => {
        turn(1);
    },
}
```

Brace bodies (`{ … }`) are **expression blocks**, not record literals — so
`self.method()` and other non-`name: value` forms work inside them.
A record arm still works when the body is a real record literal (`{ x: 1 }`).

---

## Entry point and compilation

| Rule | Detail |
|------|--------|
| Entry function | `fn main()` required for standalone programs |
| Prologue | Compiler emits `CALL`, `JMP`, `HALT`; patches jump to `main` |
| Extern setup | `extern` blocks may emit setup before `main` |
| Archive | Output wrapped in `ArchivedProgram { version, bytecode, ... }` |

---

## Multi-file projects

The pipeline discovers dependencies via `use` / `mod` under the `--root` search roots (spool passes `coil.toml` `[module].roots`) and compiles each file with a namespace prefix. The **entry file** uses the empty namespace. See [Modules reference](/docs/language/modules).

---

## Ranges (lazy)

Half-open `start..end` and closed `start..=end` produce
**`Range<T: Ord>`** / **`RangeInclusive<T: Ord>`** (both bounds unify).
A range is a **lazy** iterable: `for x in 0..n` pulls one value at a
time and does **not** allocate an array of length `n`. Decreasing
ranges (`10..0`) are empty (Rust-like). First-class values work
(`let r = 0..n; for x in r`).

Construction needs only `Ord`. **`for` iteration** and **`.to_vec()`** step with
`+1` / `+1.0` for `int`, `byte`, and `float`. Other `Ord` types may form a
range value but `for` and `.to_vec()` are type errors (no successor protocol).
Decreasing ranges collect as an empty `Vec`, matching `for`.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
for x in 0..5 { write_all(stdout(), to_bytes(format("%i", x))); }   // 01234
let r = 0..=3;
for x in r { write_all(stdout(), to_bytes(format("%i", x))); }      // 0123
for x in 1.0..4.0 { write_all(stdout(), to_bytes(format("%f", x))); } // 1.02.03.0
let xs: Vec<int> = (0..5).to_vec();   // [0, 1, 2, 3, 4]
let ys = r.to_vec();                  // Vec<int> [0, 1, 2, 3]
```

See `examples/range.hy` and `tests/positive/range_to_vec.hy`.

**Deferred:** step syntax (`0..10 step 2`). Non-numeric `Ord` iteration is
intentionally unsupported.

See [README](/docs) language-at-a-glance table for the live feature matrix.

---

## Related documents

| Document | Contents |
|----------|----------|
| [Types](/docs/language/types) | Type forms and inference |
| [Operators](/docs/language/operators) | Precedence and semantics |
| [Keywords](/docs/reference/keywords) | Reserved words |
| [Built-ins](/docs/reference) | virtual modules and FFI builtins |
| [Modules](/docs/language/modules) | `use` / `mod` resolution |
