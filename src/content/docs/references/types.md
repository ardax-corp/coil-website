---
title: Types reference
description: coil uses Hindley–Milner (Algorithm W) type inference with optional annotations. Types are checked once per program before codegen; the compiler caches (NodeId → Ty) for opcode…
---

# Types reference

coil uses **Hindley–Milner (Algorithm W)** type inference with optional annotations. Types are checked once per program before codegen; the compiler caches `(NodeId → Ty)` for opcode selection (e.g. `ADD` vs `ADDF`).

---

## Primitive types

| Name | `Ty` representation | Notes |
|------|---------------------|-------|
| `int` | `Ty::Con("int")` | 64-bit signed integer at runtime; `+ - * / % **` and unary `-` panic on overflow (and `/ %` on division by zero) in every build — see [Operators](/docs/references/operators#arithmetic) |
| `float` | `Ty::Con("float")` | IEEE double |
| `byte` | `Ty::Con("byte")` | Integer in `0..=255`; same immediate `Value` shape as `int`; `+ - * ** <<` and unary `-` wrap modulo 256 (warning `E0130`) — see [Operators](/docs/references/operators#arithmetic) |
| `string` | `Ty::Con("string")` | Heap-allocated UTF-8 string; `==` by content, `<` / `<=` / `>` / `>=` by UTF-8 bytes — see [Operators](/docs/references/operators#comparison) |
| `bool` | `Ty::Con("bool")` | `true` / `false` |
| `void` / `unit` | `Ty::Con("unit")` | Used for statements with no value; FFI `void` return |

Primitive names in annotations are matched **case-insensitively** (`Int` ≡ `int`). So a user `class` or `enum` cannot take a primitive name in any spelling: `class String`, `enum Bool` or `class INT` is `E0200` (`Cannot redeclare built-in type`).

Integer literals coerce to `byte` when the expected type is `byte` (returns, annotated `let`s, call args) or `Vec<byte>` / `[byte; N]` array elements, and the value is in `0..=255`. Under an expected `byte`, arithmetic of such literals (e.g. `return 1 + 1;` in a `-> byte` function) also types as `byte`. Unannotated `int` variables still do not coerce (`let x = 42; return x;` needs `let x: byte`).

**Single-byte string literals** also coerce to `byte` in those same expected-type positions (and in `b == "/"`-style comparisons): the literal’s UTF-8 encoding must be exactly one byte after escapes (`"/"`, `"\n"`, `"\""`). Multi-byte characters (e.g. `"é"`) and non-literal `string` values do not coerce to `byte`.

**String literals** also coerce to `Vec<byte>` / `[byte; N]` (UTF-8 bytes) under an expected byte-buffer type, via `"…" as Vec<byte>`, and as `Vec<byte>` call arguments (e.g. `write_all(stdout(), "hi")`). For `[byte; N]` the decoded length must be exactly `N`. An annotated `let b: Vec<byte> = "hi";` works too. Non-literal strings use `to_bytes(s)`, which returns `Vec<byte>` (`s as Vec<byte>` is a compile-time error, and `[byte]` does not exist). Fixed `[byte; N]` still needs a literal.

`byte` implements `Show`, `Eq` and the binary bitwise traits (`Shl`, `Shr`, `BitAnd`, `BitOr`, `BitXor`); it is not in `Num` / `Add`, `BitNot` or `Integral` yet.

The builtin error enums (`IoError`, `ThreadError`, `EnvError`, ffi `ErrorKind`) implement `Show`: `%v` prints the variant name (`NotFound`).

Strings support `+` / `+=` with other strings. `string::format(...)` returns `string` and validates literal format specifiers (`%i` accepts `byte`).

Opaque **`Stream`** (`Ty::Con("Stream")`) is the handle type for the virtual [`io`](/docs/references/io) module — not constructible in userland.

---

## Type constructors (`Ty::Con`)

Any identifier that is not a primitive becomes an opaque type constructor. User-defined **class** names register as `Ty::Con(name)` in the entry file and `Ty::Con("module::Name")` when declared in a named module, so `use lib::{Foo}` binds the class type (not a dummy var) and two packages can both export `class Client`.

Recursive enum references use isorecursive `Con(name)` inside variant payloads (not unfolded `Sum`), so recursive types like `Tree` are expressible without infinite-type errors during inference.

---

## Built-in `Option` and `Result`

The compiler pre-registers polymorphic sum types under the virtual `prelude` module (auto-imported). **Do not redeclare them** — a user `enum Option` / `enum Result` (or a `class` of either name, in any letter case such as `OPTION`) is a duplicate-enum error (`E0200`) in every module. A `use prelude::Option as …` rebind does not free the name. Pick a different name, such as `Maybe`.

The other built-in types — `Vec`, `Range`, `RangeInclusive`, `ArrayIter`, `Matrix`, `gc::Root` and `gc::Weak` — cannot be redeclared at all: a `class` or `enum` with one of those names, in any module, is `E0200` (`Cannot redeclare built-in type`). Pick a different name, such as `Bounds` for a user range.

The built-in error enums `IoError`, `ThreadError`, `EnvError` and `ErrorKind` are reserved the same way, in any module and whether or not you import them (`IoError`, `ThreadError` and `ErrorKind` in any letter case, such as `IOERROR`). The FFI `Error` is not reserved: a user `class Error` or `enum Error` is its own type.

A module that declares a type with a reserved name reports only that `E0200`: other uses of the name still mean the built-in, so the errors they would raise are left out until the type is renamed.

| Type | Variants (tag order) | Annotation |
|------|----------------------|------------|
| `Option` | `None` (0), `Some(T)` (1) | `Option` / `Option<T>` |
| `Result` | `Ok(T)` (0), `Err(E)` (1) | `Result` / `Result<T, E>` |

Payload types are inferred at use sites (`Option::Some(1)` → `Option` of `int`). Error-handling operators (`raise`, `?`, `??`, `?.`) are documented in [Operators](/docs/references/operators) and [Tutorial 09](/docs/manual/tutorial/09-error-handling).

**Result mode:** a function that uses `raise` or Result-`?` (or is annotated `-> Result<…>`) has return type `Result<T, E>`; success `return` values are implicitly wrapped as `Ok`. Explicit `return Result::Ok(v)` / `return Result::Err(e)` are also accepted. One `E` per function.

### Option / Result runtime ABI

User code always sees `Option<T>` / `Result<T, E>`. Codegen picks one of three representations; conversions happen at the boundary. **Decision:** keep this matrix — unifying would either box every ground `Option<string>` or invent a niche for `int` / nested / FFI payloads.

| Shape | Representation | When |
|-------|----------------|------|
| Ground `Option<T>` whose `T` is a non-null heap pointer (`string`, class, heap aggregate) | Pointer niche: `0` = `None`, payload pointer = `Some` | Locals and direct values at a known ground type |
| Statically known unary `Option` / `Result` **call return** | Two-slot `[payload, tag]` (`ReturnPair`) | Callee and caller both see a unary enum return; not a coroutine; not a pointer-niche `Option` |
| Everything else | Boxed heap enum | Generic / nested-nullable / stack-shaped / coroutine / FFI / `CallIndirect` / unknown host |

Cross a niche ↔ boxed boundary with `OptionNicheToHeap` / `HeapOptionToNiche`. `Vec::pop` / `Vec::remove` use allocation-free `HostInvokeNiche` when the item type is heap-only; other host results stay on `HostInvoke` and convert at the boundary.

Do not match on raw `0` vs pointer in user code — `match` / `?` / `??` are the API.

---

## Function types (`Ty::Fun`)

Curried internally: `int -> int -> int` means `(int, int) -> int`.

```coil
fn add(int a, int b) -> int { return a + b; }
// add : int -> int -> int
```

So a value of that type can be called with both arguments at once or one at
a time, whichever way it was written: `f(1, 2)` and `f(1)(2)` are the same
call on a two-parameter function and on one that takes `a` and returns a
function of `b`. Given fewer arguments than a function declares, a call is a
partial application; given more, it applies the declared ones and calls the
function they return with the rest. That holds for a named function too,
imported or generic (`use m::adder; adder(1, 2)`, `id(add, 1, 2)`), and for
a curried generic function held as a value (`let f = konst; f(1, 2)`, or
`konst` passed to an `int -> int -> int` parameter). Only a generic function
whose result is a type parameter, held as a value and given more arguments
than it declares (`let f = id; f(add, 1, 2)`), is refused with `E0127`: call
it by name instead.

Write a function type either way, in any type position: `int -> int -> int`
or `fn(int a, int b) -> int` (names optional: `fn(int, int) -> int`). A
function taking no arguments is `fn() -> int`, the same type as `unit -> int`. See
[Syntax — Type annotations](/docs/references/syntax#type-annotations).

---

## Sum types / enums (`Ty::Sum`)

Declared with `enum Name { variants }`:

```coil
enum Tree {
    Leaf,
    Node(int, Tree, Tree),
}
```

Internal shape (illustrative):

```
Ty::Sum {
    name: "Tree",
    variants: [
        ("Leaf", Unit),
        ("Node", Tuple([int, Con("Tree"), Con("Tree")])),
    ],
}
```

### Runtime representation

User code always sees constructors and `match`. **Payload** enums (unit, tuple, or record variants) are heap objects (`MakeEnum`). Codegen may skip that allocation only for a discarded constructor (`MakeEnum; POP`) or a unary variant immediately consumed by `Unpack` / `LoadField(0)`. Wider payloads, values that escape, and control-flow joins stay heap-backed — a DCE ceiling, not a second enum ABI. Named-local class unboxing is a different rule. Builtin `Option` / `Result` have their own niche / pair / boxed matrix ([Option / Result runtime ABI](#option--result-runtime-abi)).

**Scalar-backed** enums ([below](#scalar-backed-enums)) are not heap `MakeEnum` values. Each case is the backing word (`int`, `string`, `float`, or `bool`) while the static type stays the enum name.

### Generic enums (`Ty::App`)

User enums may take type parameters. Annotations and construct/match use the same `Ty::App` machinery as builtin `Option` / `Result`:

```coil
enum Box<T> {
    Empty,
    Full(T),
}

fn unwrap(Box<int> b) -> int {
    return match b {
        Box::Empty => 0,
        Box::Full(v) => v,
    };
}
```

`Box::Full(7)` has type `Box<int>`. Payload types are freshened per construct/match site from the enum's schema (type-param placeholders in the registry).

### Variant payload shapes (`EnumVariantPayloadTy`)

| Shape | Syntax example | Internal |
|-------|----------------|----------|
| Unit | `None` or `None()` | `Unit` |
| Tuple | `Some(int)` | `Tuple([int])` |
| Record | `Point { x: int, y: int }` | `Record([("x", int), ("y", int)])` |

Constructors in expressions and patterns use **`Enum::Variant`** (`::`). That is the form the parser and language tests accept (`Status::Ok`, `Option::Some(x)`, `Color::Red`). Dot field access (`expr.field`) is a different production; `Status.Ok` is not a constructor.

Bare `Some` / `None` / `Ok` / `Err` (and other case names) is prelude sugar only when a **single** in-scope enum owns that case. Two enums that share a case name make a bare use `E0201` (`Ambiguous constructor`) — write the qualified form (`Status::Ok` next to `Result::Ok(1)`).

### Scalar-backed enums

A scalar-backed enum maps each case to a literal of one primitive type. The value’s **type** is still the enum; the **runtime word** is the `=` literal.

```coil
#[repr(int)]
#[derive(Show, Eq, Ord, Hash)]
enum Status {
    Ok = 200,
    NotFound = 404,
}
```

`#[repr(int)]`, `#[repr(string)]`, `#[repr(float)]`, and `#[repr(bool)]` compose with `#[derive(...)]` on the same declaration. You may omit `#[repr(...)]` when every case has `= lit` and those literals share one simple type (inferred `int` / `float` / `string` / `bool`). Every scalar case needs an explicit `=`; there is no auto-increment. Mixing backings, mixing payload variants with `=` scalars, omitting `=`, or duplicating a backing value is `E0213` / `E0214`.

```coil
#[repr(string)]
enum Mode { Fast = "fast", Slow = "slow" }

#[repr(float)]
enum Ratio { Half = 0.5, Full = 1.0 }

#[repr(bool)]
enum Switch { Off = false, On = true }

let n: int = Status::Ok;          // 200
let mode: string = Mode::Fast;    // "fast"
```

| Rule | Behavior |
|------|----------|
| Type of `Status::Ok` | `Status` (nominal: params, locals, exhaustive `match`) |
| Runtime word | `200` (the `=` literal) |
| Expression coerce | Implicit to the backing wherever that primitive is expected: `let n: int = Status::Ok`, `Status::Ok + 1`, pass `Status` to an `int` parameter, `format("%i", s)` |
| Reverse coerce | None. Write `Status::Ok`, not `200 as Status`. Matching a raw `200` against a `Status` scrutinee is a type error |
| `.value` | Does not exist. Conversion is the implicit coerce above |
| `Show` | Prints the backing (`Status::Ok` shows as `200`, same as showing that `int`). Not the qualified name |
| `Eq` / `Hash` / `Ord` | A derived instance compares, hashes, and orders the backing word: `#[derive(Ord)]` follows the backing's order (an `int` / `float` numerically, a `string` by its UTF-8 bytes), not declaration order. `bool` has no order, so a `#[repr(bool)]` enum cannot derive `Ord`. Without a derive, a case still compares with a value of its backing type (`Status::Ok < 300`, `Mode::Fast < "g"`); two cases need `#[derive(Ord)]` for `<` |
| `Default` | First case, same as payload enums |
| `match` | Constructor cases (`Status::Ok`) plus a `default` catch-all. Payload enums stay the same |

Payload enums (`Color::Red`, `Option::Some(x)`) remain heap-backed. See `examples/scalar_enum.hy` and `tests/positive/scalar_enums.hy` in coil-lang.

### Constructor types (`Ty::Constructor`)

Applying a variant yields a constructor type carrying tag and arity. Unification
joins constructors with their parent sum (or applied `Ty::App` for polymorphic
enums). Distinct tags of the same enum also join at the owner, and binding a
type variable peels the refinement — so `min(Rank::Mid, Rank::Low)` and
`[Rank::Low, Rank::Mid]` type-check as the parent enum without annotations.

---

## Tuples (`Ty::Tuple`)

Heterogeneous fixed-length products:

```coil
let t = (1, "hi", true);   // (int, string, bool)
fn pair(int a, string b) -> (int, string) { return (a, b); }
```

Annotation: `(T1, T2, ...)`. Literal syntax requires a comma: `(1,)` is a 1-tuple; `(1)` is a parenthesized expression.

Tuples have structural `Show` support when every element is showable, `()` elements included: `%v`, `show(t)` / `t.show()` and a `T: Show` bound all accept a ground tuple (`show(((), 1))` is `"((), 1)"`), through a monomorphic clone or a shared generic body's dictionary. A tuple with an element of a bounded type parameter is showable too: inside `fn f<T: Show>(T x)`, `show((x, ()))`, `(x, 1).show()` and passing `(1, x)` on to another `Show` bound all work, each element shown through its own type's `Show` (the instance for tuples of that arity, with one `Show` dictionary per element). The printed form is `(a, b)` (and `(a,)` for a 1-tuple), the same text `%v` prints.

Ground tuples also have structural `Eq` and `Hash` instances when every element has one: `t.eq(u)` / `t.ne(u)` compare as `==` / `!=` do, and `t.hash()` combines the element hashes left to right as a derived `Hash` combines fields (a `()` element hashes as `0`). So a tuple meets a `T: Eq` or `T: Hash` bound and can key a `HashMap<(int, int), V>`.

A ground tuple whose elements are all `Ord` is `Ord` too, ordered lexicographically: `<`, `<=`, `>` and `>=` compare the first elements, and only when those are equal the next ones, each element in its own type's order (`(1, "b") < (2, "a")`, `(1, "a") < (1, "b")`, `(1,) < (2,)`, nested tuples included). So `collections::sort` sorts a `Vec<(int, string)>`, and a tuple meets a `T: Ord` bound. A `float` `NaN` element compares unequal to itself, so it decides `false` where it is reached. A tuple with an element that is not `Ord` (`bool`, a class without `#[derive(Ord)]`) does not order (`E0102`), nor yet does one with an element of a type parameter inside a generic body (`(x, 1) < (y, 2)` for `T: Ord`).

Homogeneous numeric tuples also support **element-wise arithmetic** (zip /
broadcast / unary `-`). See [Operators](/docs/references/operators).

---

## Arrays (`Ty::Array`) — `[T; N]` only

Homogeneous **fixed-length** arrays. Length `N` is part of the type and is
inferred from literals when possible; otherwise write it explicitly.
Annotation `[T]` (no length) is a type error (`E0119`) in every position (lets,
parameters, returns, casts) — use `[T; N]` or growable
[`Vec<T>`](/docs/references/arrays). An array literal builds a `Vec<T>` wherever
one is expected, so `fn sum(Vec<int> v)` takes `sum([1, 2, 3])`.

| Annotation | `ArrayLength` | Example |
|------------|---------------|---------|
| `[T; N]` | `Static(N)` | Literal `[1, 2, 3]` infers `[int; 3]` |
| `[T]` | — | **Rejected** (`E0119`) — use `[T; N]` or `Vec<T>` |

```coil
let xs = [1, 2, 3];           // [int; 3]
let zs: [int; 3] = [0, 0, 0];
fn sum([int; 3] arr) -> int { /* ... */ }
```

Locals of type `[T; N]` occupy **N consecutive frame slots** (stack). Escaping
into a single-value context (call, return, store into a heap object) boxes into
a non-growable heap array.

Empty `[]` needs an annotation: `Vec<T>` or `[T; 0]`. There is **no**
`arr[] =` append — use `Vec::push` (rejected append is `E0107`).

`value.len()` returns length as `int` for arrays, `Vec`, strings, tuples, and
records (structural); for other types it requires a `Length` instance
(`impl Length for T { fn len(T x) -> int { … } }`). Fixed-size cases fold at
compile time. Arrays, `Vec`s, tuples and records also meet a
`T: Length` bound, as strings do: `fn size<T: Length>(T x) -> int { return
x.len(); }` accepts `Vec::from([1, 2])`, `[1, 2]`, `(1, "a")` and `{ x: 1 }`,
its `len` reading the same structural length. So do ones built from a
generic function's own type parameters: `fn n<E>(Vec<E> v) -> int { return
size(v); }` and `size((a, b))` inside `fn f<A, B>(A a, B b)` compile, as
does any generic value a generic instance serves (`Box<E>` under
`impl Sz for Box<T>`).

Fixed arrays have structural `Show`, `Eq` and `Hash` instances when their
element type has one: `show([1, 2])` / `format("%v", [1, 2])` print
`[1, 2]`, `a.eq(b)` / `a.ne(b)` compare as `==` / `!=` do, and `a.hash()`
combines the element hashes as a derived `Hash` combines fields. They meet
`T: Show`, `T: Eq` and `T: Hash` bounds. An array of values with no `Show`
(functions, say) is still refused by `%v` (`E0300`).

### `Vec<T>` — growable vectors

```coil
let v: Vec<int> = Vec::new();
v.push(1);
v.push(2);
```

Statics: `Vec::new`, `Vec::with_capacity`, `Vec::from`. Methods: `push`, `pop`,
`insert`, `remove`, `clear`, `reserve`, `capacity`, `len`, plus `v[i]` /
`v[i] = x`. Rest parameters `T... xs` pack into `Vec<T>`. IO buffers use
`Vec<byte>`. Full table: [Arrays and Vec](/docs/references/arrays).

### Indexing

| Target | Compile-time index | Runtime index |
|--------|-------------------|---------------|
| Fixed array `[T; N]` | OOB literal → diagnostic | Allowed (no static check); OOB load or store **panics** (`index out of bounds`) |
| `Vec<T>` | N/A | Allowed (no OOB diagnostic); OOB load or store **panics** |
| Tuple | OOB literal → diagnostic | — |
| Non-aggregate | Error | — |

Proven counted-loop `Index` / `StoreIndex` rewrite to unchecked opcodes ([#192](https://github.com/ardax-corp/coil-lang/pull/192)). Dynamic indices stay checked and **panic** on OOB (archive major 4). Prefer `i < a.len()` in loops (`LEQ`/`GEQ` are not proofs). Details: [Arrays and Vec](/docs/references/arrays#out-of-range-index).

---

## Records (`Ty::Record`)

Anonymous structurally typed records:

```coil
let d = { x: 1, y: 2 };   // { x: int, y: int }
let n = d.x;              // field access
```

- Two record literals with the same field names and compatible field types unify structurally.
- A record is a heap object with one slot per field, like a class instance: its slots are the fields sorted by name, so `{ y: 9, x: 8 }` and `{ x: 8, y: 9 }` have the same layout. Field reads and writes are slot loads and stores (`LoadField` / `SetField`), not keyed lookups. Records are shared by reference: `let b = a; b.x = 5;` changes `a.x` too.
- `r.len()` is the number of fields, a compile-time constant.
- `==` / `!=` compare records field by field, as tuples compare element-wise: `{ a: 1, s: "x" } == { s: "x", a: 1 }` holds, and so do records nested in each other or inside arrays, tuples, `Option`s and enums. A `float` field compares by IEEE 754. Records have no `Eq` or `Hash` instance yet, so a `T: Eq` bound (and a `HashMap` key) does not accept one.
- A record is not iterable: its fields are a fixed set of names, so `for x in r` is an error (`E0119`). For keys you add, remove or iterate, use `collections::map::HashMap` from the stdlib.
- Duplicate field names in one literal → parse error (`E0208`); typecheck repeats the check if parse is bypassed.
- Anonymous records have structural `Show` support when every field is showable: `%v`, `show(r)` / `r.show()` and a `T: Show` bound all accept a ground record, through a monomorphic clone or a shared generic body's dictionary. Fields print in canonical name order as `{ a: 1, b: 2 }`, the same text `%v` prints.

Structural `Show` covers tuples, fixed arrays, anonymous records, `Option` and `Result` automatically. Non-generic
enums and classes receive a **default** `Show` that returns the type name
as a string (same display as `typeof self` for non-generic types)
(the type's fully-qualified name). Prefer `#[derive(Show)]` for structural field
formatting (see [Trait derive](#trait-derive)), or write an explicit `impl Show for T`.

---

## `typeof`

`typeof expr` is a compile-time query: it typechecks `expr`, formats the ground
type as a fully-qualified name, and lowers to an ordinary string constant. The
operand is **not** evaluated at runtime.

```coil
typeof 42                 // "int"
typeof (1, 2)             // "(int, int)"
typeof Option::Some(1)    // "prelude::Option<int>"
```

Open / unsolved types (free type variables, `never`, bare `Option::None`
without an annotation) are a compile error. Nominal types include their defining
module when non-empty (`prelude::Option<int>`, `math::Point`); entry-file types
stay bare (`Point`).

---

## Static slots

Module-level and class-level singletons share one global slot table for the process.

```coil
static let hits = 0;
const PRIMES = [2, 3, 5, 7];   // not a compile-time value: set once at startup

class Counter {
    static count: int = 0,
    value: int,
}

impl Counter {
    static fn fresh() -> Counter {
        Counter::count = Counter::count + 1;
        return new Counter(0);
    }
}
```

| Form | Access | Mutation |
|------|--------|----------|
| `static let x = …` | bare `x` in defining module | Reassignable |
| `const X = …` (does not fold) | bare `X` | Immutable after init |
| `Class::field` | `Counter::count` | Reassignable, like `static let` |
| `static fn` | `Class::method()` | No `self`; not callable on instances |

Initializers run once in the program prologue (declaration order). Other modules import statics via `use` like ordinary items.

A thread started with `thread::spawn` has its own heap, and starts with a copy of every static as it was when the thread was spawned, so a `const` reads the same value there. Its writes to a `static let` or class `static` field stay in that thread: the spawner and other threads do not see them. A static holding a value that cannot be sent to a thread (a stream, say) reads as unset there.

A module-level `const` whose value is known at compile time (`const LIMIT = 10;`) is inlined where it is read and takes no slot. Any other `const` (an array, a call, another module's value) is a static slot set once at startup; reassigning it is `E0107`. `static const` is the old spelling of such a `const`: it still compiles, with an `E0129` warning, and `coil fmt` rewrites it to `const`.

A `const` set to a `readonly` array literal is a lookup table: no code can change an element, so a read at a constant index (`T[2]`, `T.len()`) folds to the value, also from another module, and a read with a variable index is one element load. A function-local `const t = readonly [...]` of literals is built the first time it runs and reused after that; since array `==` is structural, sharing that one copy is not observable.

Class `static` fields require an initializer. `static` and `const` field modifiers are mutually exclusive on class fields.

---

## Readonly types

`readonly` seals a value against mutation through this reference. The seal is **deep**: whatever you read through a readonly value (a field, an element, a loop variable, a matched payload) is readonly too. Methods are no exception: a method that mutates `self` cannot be called on a readonly value (see [Methods and calls](#methods-and-calls-on-readonly-values)).

`readonly T` is a type, written anywhere a type is written. `readonly e` views any expression read-only:

```coil
let xs = readonly [1, 2, 3];
let p = readonly new Point(1, new Inner(2));
let q = readonly r;                        // any expression

fn total(readonly Point p) -> int { … }    // parameter: the body only reads `p`
fn origin() -> readonly Point { … }        // return: callers cannot mutate it
let v: readonly Point = p;                 // typed `let`
class Holder { pub p: readonly Point, }    // field: `h.p.x = 1` is an error even for a mutable `h`
let ps: Vec<readonly Point> = [];          // a mutable Vec of read-only elements
fn sum(readonly Vec<Point> ps) -> int { … }
let a: readonly Area = p;                  // a read-only trait object
let f: readonly Point -> int = total;      // `(readonly Point) -> int`
```

`readonly` qualifies one type atom, so `readonly Point -> int` is `(readonly Point) -> int`; write `readonly (A -> B)` to qualify a function type (which has no mutable interior, so it is just `A -> B`). Types with no mutable interior are unchanged: `readonly int` is `int`, `readonly string` is `string`. A tuple is readonly element-wise: `readonly (Point, int)` is `(readonly Point, int)`, and so are an enum's type arguments: `readonly Option<Point>` is `Option<readonly Point>`, so `match` and `if let` bind readonly payloads.

| Operation on a `readonly T` value | |
|-----------|-------------------|
| Read fields / index / iterate / match | Allowed; the result is readonly |
| `p.x = …` / `xs[i] = …` | Error |
| `p.inner.n = …`, `xs[0].n = …`, `for x in xs { x.n = …; }` | Error |
| `let i = p.inner; i.n = …;` | Error: `i` is readonly |
| `p.get()`, where `get` only reads `self` | Allowed |
| `p.bump()`, where `bump` mutates `self` (directly or through what it calls) | Error |
| `let i = p.get_inner(); i.n = …;` | Error: what a method returns through `p` is readonly |
| Rebind variable | Allowed (`let a = readonly [1]; a = readonly [2];`) |

A plain value converts to a readonly type: `total(p)` accepts both a `Point` and a `readonly Point`. A readonly value converts to a readonly type only, never back. Each of these is an error (E0107), because the new name could mutate the value:

```coil
fn poke(Point p) { p.x = 99; }
poke(p);                 // a plain `Point` parameter
let q: Point = p;        // a typed `let`
let a: Area = p;         // a plain trait object
new Holder(p);           // a plain `Point` field
holder.p = p;            // assignment to a plain `Point` place
fn mk() -> Point { return readonly new Point(1, new Inner(2)); }   // a plain return type
let o: Option<Point> = Option::Some(p);   // a plain enum payload
let v: Vec<Point> = [p];                  // a plain element type
```

Generic parameters keep the qualifier, so `id(p)` with `fn id<T>(T v) -> T` returns a readonly value, and `[p]` is a `Vec<readonly Point>`. Joining a plain and a readonly value gives a readonly one, whichever comes first: `[new Point(0), p]` has readonly elements, and so does a `match` with one arm that gives `p`.

Generic arguments of a mutable container are **invariant**:

| From | To | OK? | Why |
|------|----|-----|-----|
| `Vec<Point>` | `readonly Vec<Point>` | yes | top-level conversion |
| `Vec<Point>` | `Vec<readonly Point>` | no (E0107) | the new name could `push` a readonly `Point` that the old name then mutates |
| `Vec<readonly Point>` | `Vec<Point>` | no (E0107) | drops `readonly` |
| `readonly Vec<Point>` | `readonly Vec<readonly Point>` | yes | the same type |

A function that only reads a Vec should take `readonly Vec<Point>`: it accepts both kinds. `push`, `pop`, `insert`, `remove`, `clear` and `reserve` through a `readonly Vec<T>` are errors.

### Methods and calls on readonly values

The compiler infers, for every function and method, which parameters it mutates (`self` counts as one), the same way it infers `uses {mutate}`. A call that passes a readonly value where the callee mutates it is an error (E0107) that names the write:

```coil
class Counter {
    pub n: int,
}

impl Counter {
    pub fn get() -> int { return self.n; }
    pub fn bump() { self.n = self.n + 1; }
    pub fn twice() { self.bump(); self.bump(); }
}

let c = readonly new Counter(0);
c.get();     // fine: `get` only reads `self`
c.twice();   // E0107: it mutates `self` (calls `Counter::bump`, which writes field `n`)
```

A mutation counts when it goes through anything reached from the parameter: a field or element read from it, a loop or pattern variable, what a getter returns, a lambda that captures it, or another function that mutates it. Writing `readonly` on a parameter is an optional promise, checked against the body. Stdlib methods follow the same rule: `map.get(k, d)` works on a `readonly HashMap`, while `map.insert(k, v)` does not. What a method returns when called on a readonly value is readonly too, since it may be `self` or something reached from it: `p.get_inner()` is a `readonly Inner`, `r.get()` on a `readonly Ref<Point>` is a `readonly Point` (so `Ref` is no way around the seal), and so is `m.get(k, d)` on a `readonly HashMap<string, Point>`. This holds for a method that returns a new object too; to get a mutable result, call the method through a name that is not readonly, or declare the method in a trait with `readonly A self`, whose result keeps its type because no impl can return `self` as mutable. An operator on a class is a call of its trait impl: `ro + x` is fine when the class's `impl Add` only reads its operands, and an error when it mutates one.

A trait method has no body to look at when it is called through a trait object or a generic bound, so the trait declares it: `fn area(readonly A self) -> int;`. Only methods declared that way can be called through a `readonly Area` or on a readonly `T: Area`, and every impl must keep the promise: an impl whose body mutates `self` is an error. A trait method without the declaration is treated as mutating its parameters. On a value of a concrete class the impl's body is known, so it decides instead, and `p.area()` and `Area::area(p)` are checked alike.

```coil
trait Area<A> {
    fn area(readonly A self) -> int;
    fn grow(A self);
}

let a: readonly Area = readonly new Sq(2);
a.area();    // fine
a.grow();    // E0107: `grow` may mutate `self`
```

A function value of type `(Point) -> R` cannot be passed where `(readonly Point) -> R` is expected, since it could mutate what it is given. A readonly argument to a foreign function must be declared `readonly` in the `extern` block, or `ConstBytes` (`const uint8_t *`) in a `declare` signature.

`readonly` costs nothing at runtime: a program compiles to the same bytecode with or without it.

Type pretty-print: `readonly T`.

### Readonly classes

`readonly class` declares a class whose instances never change after `new`. It is a value, not an object you share and update:

```coil
readonly class Point {
    pub x: float,
    pub y: float,
}

impl Point {
    pub fn moved(float dx) -> Point {
        return new Point(self.x + dx, self.y);   // a new instance
    }
}
```

| | Rule |
|---|---|
| Field writes | `p.x = …`, `p.x += …`, `self.x = …` in a method: all `E0107` |
| What fields hold | read-only through the instance: a `Vec` field cannot `push`, a class field's own fields cannot be written |
| `readonly Point` | the same type as `Point`, so `fn f(Point p)` accepts every instance |
| `==` / `!=` | structural over the fields, as if it derived `Eq` |
| `hash` | structural, as if it derived `Hash`, when every field type hashes as written (primitives, tuples, type parameters, this module's hashing types). With a `Vec`, array, map or another module's type in a field, write `impl Hash` yourself |
| `fn drop()` | not allowed (`E0126`): instances have no identity to finalise |
| `gc::weak(p)` | not allowed (`E0119`): a weak handle would observe the instance's identity and when it is collected. This holds through generics too: a call that sets a type parameter to a readonly class is refused when the generic function, method or trait instance (or one it passes the parameter on to) calls `weak()` on a value of that parameter |

A written `#[derive(Eq)]` / `impl Eq` (or `Hash`) takes the place of the implied one. Generic readonly classes work the same way: in `readonly class Pair<A, B>`, `pair.a` is read-only even when `A` is a mutable class.

A `readonly class` costs nothing at runtime either: it compiles to the same bytecode as a plain class with `#[derive(Eq, Hash)]`.

---

Inherent `fn drop()` on a class is a GC-time finalizer (`unit` return, implicit `self` by value). See [`gc`](/docs/references/gc). Named locals are always heap-allocated (`InitTyped`); only a consumed `new Class(args).field` may skip the box, and never when the class has `fn drop()`.

## Class `const` fields

```coil
class Point {
    const x: int,
    const y: int,
}
```

Const fields may be set only in `new` (constructor). Any later `p.x = …` or `self.x = …` is a type error. A `const` field locks that **slot** for every reference, the way a `const` local locks a name; `readonly` locks the **value** seen through one reference, and a [`readonly class`](#readonly-classes) locks every field of every instance.

`const` bindings, local or module-level, are shallow: the compiler warns (`E0119`) when the initializer type is heap-mutable (`Vec<T>`, class instances, records, fixed `[T; N]` arrays) because interior mutation through fields or indexed writes still succeeds. A fixed array warns whatever its element type: `const a = [1, 2, 3];` warns, since `a[0] = 9;` still writes the element. Write `const a = readonly [1, 2, 3];` for an array that is frozen and does not warn. Opaque handles (`Stream`, `Thread`, `Sender`, `Receiver`, `Mutex`, `RwLock`) never warn, and a `gc::Root<T>` / `Weak<T>` warns as its target `T` does.

---

## Type aliases (`type Name = T;`)

Substituted at typecheck time; zero runtime cost. Parametric aliases expand when applied:

```coil
type UserId = int;
type IntPair = (int, int);
type Pair<T> = (T, T);

fn id(UserId x) -> UserId { return x; }

fn main() {
    let p: Pair<int> = (3, 4); // same as `(int, int)`
}
```

| Property | Behavior |
|----------|----------|
| Scope | Lexical: program, function, and block scopes |
| Shadowing | Inner scopes may shadow outer aliases |
| Duplicate names | Duplicate alias in the same scope is a diagnostic |
| RHS | Any `type_annotation` form |
| Type parameters | `type Pair<T> = (T, T);` — `Pair<int>` expands to `(int, int)` |

---

## Type annotation syntax (all contexts)

| Context | Example |
|---------|---------|
| Function parameter | `fn f(int x, [string; 4] rows) -> bool` |
| Return type | `-> (int, int)` |
| `let` binding | `let x: int = 1;` |
| Enum variant payload | `Some(int)`, `Node { left: Tree, right: Tree }` |
| Type alias RHS | `type A = [int; 4];` / `type Buf = Vec<byte>;` |
| Class field | `name: string` |

Forms:

```
IDENT                         // int, MyEnum, Foo, Vec
IDENT '<' type (',' type)* '>' // Vec<T>, Option<T>, …
'[' type ';' INT ']'          // [T; N] — length required
'(' type (',' type)+ ')'      // tuples — at least two components in type position
```

Bare `[T]` (no `; N`) is rejected at typecheck (`E0119`).
---

## Inference highlights

| Feature | Behavior |
|---------|----------|
| Let-polymorphism | `let`-bound names generalize free type variables at binding site |
| Function recursion | Monomorphic recursion — `fn` body sees monomorphic self type |
| `match` exhaustiveness | Checked post-inference; missing variants → diagnostic unless a `default` arm is present. Whole-arm `_` is not a catch-all (`E0216`) |
| Format strings | `string::format("%i", x)` validates specifier vs argument type |
| `impl` methods | `self` is implicit first parameter of owner class type |
| API style | Prefer inherent/`impl` methods over free functions for type-tied ops (`m.insert` not `insert(m)`); virtual-module host primitives (`io::read`) stay free fns |

---

## Unification rules (summary)

Unification is structural (Robinson) with an occurs check.

| Left | Right | Result |
|------|-------|--------|
| Same `Ty::Var` | | Success |
| Same `Ty::Con` name | | Success |
| `Ty::Con(n)` | `Ty::Sum { name: n, .. }` | Isorecursive expand-and-unify |
| `Ty::Fun` | `Ty::Fun` | Unify args, then returns |
| `Ty::Tuple` | `Ty::Tuple` | Same length; unify each element |
| `Ty::Array` | `Ty::Array` | Unify elements; lengths compatible if either is `Dynamic` or both `Static` with same N |
| `Ty::Record` | `Ty::Record` | Same fields (sorted by name); unify each field type |
| `Ty::Sum` | `Ty::Sum` | Same enum name; same variant names, shapes, arities; unify payload types |
| `Ty::Constructor` | `Ty::Sum` / other constructor | Owner must unify; distinct tags of the same enum join at the parent (refinements peel when binding a `Ty::Var`) |
| `Ty::Var` | anything | Bind variable (if occurs check passes) |
| Otherwise | | `Type mismatch` error |

### Length compatibility (arrays)

```
Dynamic  ~  Static(N)   ✓
Dynamic  ~  Dynamic     ✓
Static(N) ~ Static(M)    ✓ (element types must unify; N and M need not match for unification of annotation vs literal in all cases — mismatched static lengths error when both static)
```

---

## Coroutine types (`coroutine<Y, S>`)

`gen fn` bodies return a handle typed as `coroutine<Y, S>`:

| Parameter | Meaning |
|-----------|---------|
| `Y` | Type **yielded out** on each `yield expr` |
| `S` | Type **sent in** on `resume h with v` and received by `let x = yield e` |

When no binding-yield or send sites exist, `S` defaults to `unit` and diagnostics print `coroutine<Y>`.

```coil
gen fn counter() -> coroutine<int> {
    yield 0;
    yield 1;
}

gen fn ping() -> coroutine<string, string> {
    let msg = yield "ready";
    yield msg;
}
```

Resume expression type: if `h : coroutine<Y, S>`, then `resume h` has type `Y`, and `resume h with v` requires `v : S`.

`resume` has a single static result type (`Y`) covering BOTH the value
yielded by each `yield expr;` AND the value produced when the body
completes (`return expr;`, or falling off the end). A `return expr;`
inside a `gen fn` therefore unifies `expr`'s type against the SAME
`Y` as every `yield` in that body — not `unit` — so the returned value
is not discarded:

```coil
gen fn counter() {
    yield 1;
    yield 2;
    return 42; // completion value, type unifies with the `yield`s above
}

fn main() {
    let h = counter();
    resume h; // 1
    resume h; // 2
    resume h; // 42 (the `return` value)
    resume h; // panics: resumed after completion (see below)
}
```

Resuming an already-`Done` coroutine panics with `resumed after
completion`. Check [`done(h)`](/docs/references/done) first when a loop may
outrun the body.

---

## Generics and traits

Generic functions use an optional type-parameter list and trait bounds on parameters:

```coil
use io::{stdout, write_all};
use string::{format, to_bytes};
fn add<T: Num>(T a, T b) -> T { return a + b; }

fn main() {
    write_all(stdout(), to_bytes(format("%i", add(3, 4))));   // int
    write_all(stdout(), to_bytes(format("%f", add(1.5, 2.5)))); // float
}
```

Multi-parameter traits use a trailing `where` clause:

```coil
trait Convert<A, B> { fn cast(A x) -> B; }
impl Convert<int> for int { fn cast(int x) -> int { return x; } }
fn apply_cast<A, B>(A x) -> B where Convert<A, B> { return cast(x); }
```

`where` is for multi-parameter traits only. A single-parameter bound goes on
the parameter it bounds: `fn f<T: Num>` for a function's own parameter, and a
separate bounded impl block for methods that need a bound on an impl's
parameter:

```coil
class Cell<T> { pub v: T, }
impl Cell<T> { pub fn get() -> T { return self.v; } }
impl Cell<T: Num> { pub fn doubled() -> T { return self.v + self.v; } }
```

A unary `where Num<T>` is an error whose fix-it names the matching form.

### Kinds

Kinds classify type-level parameters:

| Kind | Meaning | Example |
|------|---------|---------|
| `*` | A proper value type | `T: *` |
| `* -> *` | Unary type constructor | `F: * -> *` |
| `* -> * -> *` | Binary type constructor | `F: * -> * -> *` |
| `(* -> *) -> *` | Higher-order type constructor | `F: (* -> *) -> *` |
| `Constraint` | A fully applied trait predicate | internal result kind |
| `* -> Constraint` | Unary constraint constructor | `c: * -> Constraint` |

Constraint-kind parameters let a generic abstract over the class predicate
itself:

```coil
fn choose<c: * -> Constraint, T: c>(T a, T b) -> int {
    if lt_val(a, b) { return 0; } // selects c = Ordered
    if eq_val(a, b) { return 42; } // Equal method via Ordered superclass
    return 1;
}
```

The function body still uses concrete dictionaries. Method use pins the abstract
constraint parameter to a concrete class such as `Show` or `Ordered`; the stored
function scheme then carries that concrete constraint, and call sites pass the
ordinary instance dictionary. If no method/operator/`%v` use selects a concrete
class, `T: c` is rejected as an unsatisfied abstract constraint.

### Syntax

| Form | Meaning |
|------|---------|
| `fn id<T>(T x) -> T` | Unconstrained type parameter `T` |
| `fn add<T: Num>(T a, T b) -> T` | `T` must satisfy the `Num` bound |
| `fn both<T: Num + Eq>(T x) -> T` | Multiple bounds (`+`) |
| `fn f<A, B>(A x) -> B where Convert<A, B>` | Multi-param `where` constraint |
| `fn print_any(Show x)` | Bare unary trait name as an existential value type |
| `trait Container<F: * -> *>` | Unary type-constructor parameter |
| `trait Bifunctor<F: * -> * -> *>` | Binary type-constructor parameter |
| `trait Higher<F: (* -> *) -> *>` | Higher-order constructor parameter |
| `fn f<F: * -> * -> *, Bifunctor, A, B>(F<A, B> x)` | Explicit kind plus a class bound on one parameter |
| `fn f<c: * -> Constraint, T: c>(T x)` | Constraint-kind parameter and abstract bound |

### Type parameters are rigid

Inside its own body, a type parameter stands for any type the caller picks.
The checker never solves it to something narrower, so each of these is error
`E0119` (``Type parameter `T` is used as …``), reported at the function:

- Using it as a concrete type: `idx < xs[0]` with `idx: int` and `xs: Vec<T>`.
- Using it as a different type parameter: `fn g<T, U>(T a, U b) -> T { return b; }`.
  This covers a method's own parameter against its `impl`'s or trait's
  parameter too.

The same parameter on both sides is fine, and so is calling another generic
function: its parameters are fresh at each call, so `second(a, b)` inside
`fn swap<T, U>(T a, U b)` picks `U` for that call alone.

### Call-site dispatch

One calling convention, two ways to name the callee. **`CALL`** packs arity and a static bytecode offset. **`CallIndirect`** pops the target from the stack (`CodePtr`, dictionary `Index`, or a `PolyFn` local). Dictionaries are the ABI for open bounds; they are not a second dispatch model.

| Situation | Bytecode |
|-----------|----------|
| Direct call to a function or instance method with a known entry | `CALL` |
| Ground trait method / UFCS (`x.m()` / `m(x)`) with a resolved instance | `CALL` to that instance method (`Show`, `Length`, `Hash`, user traits, inherent methods). Primitive `Num`/`Eq`/`Ord` operators further lower to opcodes (`ADD`, `EQ`, …); structural `.len()` may become `ArrayLen`. |
| Ground call to a generic whose bounds are only `Num`/`Add`/…/`Ord`/`Lt`/…/`Eq` | **Monomorphize** into a specialized clone (unboxed `ADD`, etc.). No dictionary at the call site. |
| Same, with named args and/or rest packs (`T...`) | Same monomorphization — args are reordered/packed to match formals before keying |
| Open type params inside a generic body (any bound) | Dictionary passing — `CALL` the shared generic body with trailing dict tuples; method slots use `Index` + `CallIndirect` |
| Existential (`Show x`) | Unpack the dict from the value; `CallIndirect` |
| Escaped generic fn value (`let f = id;`) | `MakePolyFn` / `MakePolyFnCapture` + `CallIndirect` |

**Decision:** dictionaries are for generic bodies, not for ground user traits. Ground Show/Length/Hash/user-trait methods with a static entry emit `CALL`. Operators on ground numeric/eq/ord types still lower to opcodes. Caps, escaped `PolyFn`, and nested open bounds still use dictionaries.

### Dictionary passing

Constrained calls that are not monomorphized append one dictionary per trait constraint after the value arguments. Each dictionary is a `MakeTuple` of method code offsets in declaration order. The callee reserves trailing locals `__dict0`, `__dict1`, …, loads the matching method slot with `Index`, and invokes it with `CallIndirect`. A generic calling another generic with the same open bound forwards its existing dictionary. Builtin classes use compiler-generated primitive method thunks through this same ABI; ground monomorphization remains an optimization.

**Flattened superclass layout.** When a unary class declares a param bound
(`trait Ordered<T: Equal>`), those bounds are stored as *superclasses*.
The runtime dictionary for the subclass is flattened: subclass methods first,
then each superclass’s methods in declaration order (transitively). An
`impl Ordered for int` therefore requires an existing `Equal<int>` instance — its
methods fill the trailing dict slots.

```coil
trait Describable<T> { fn describe_val(T x) -> int; }
impl Describable for int { fn describe_val(int x) -> int { return x + 1; } }
fn show<T: Describable>(T x) -> int { return x.describe_val(); }
// show(42) → CALL arity = 2 (value + Describable dict)
```

### Bare-class existential types

A unary trait name in a value type position denotes an existential value:

```coil
use io::{stdout, write_all};
use string::{format, to_bytes};
fn print_any(Show x) {
    write_all(stdout(), to_bytes(format("%s", show(x))));
}

fn main() {
    print_any(42); // packs the int value with the Show<int> dictionary
}
```

This applies in function parameters, `let` annotations, return annotations,
class fields, and `Vec` element types: `Show x`, `let x: Show = 42;`, `-> Show`,
`class Tagged { pub what: Show }`, and `Vec<Show>`. A value packs wherever one of
these types asks for it (`new Tagged(new Pt(1))`, `xs.push(3)`), and each field
or element keeps its own instance.

`T: Show` is still universal: one function body works for every caller-chosen
`T` that satisfies the bound. A bare `Show` value is existential: the concrete
type is hidden after the pack site, and calls such as `show(x)` dispatch through
the dictionary stored with the value.

Rules:

- Only unary traits whose parameter has kind `Type` may be used this way.
  Multi-parameter classes such as `Convert<A, B>` are rejected as bare value
  types.
- If a concrete type constructor and a trait have the same name, the type
  constructor wins.
- Packing a concrete value requires exactly one matching instance; otherwise
  the call site reports `No instance for Class<T>`.
- Runtime representation reuses existing tuple bytecode: `(boxed_value,
  dictionary_tuple)`. No separate opcode is needed.

Bound methods support three equivalent forms:

```coil
x.describe_val();          // method sugar
describe_val(x);           // bare / UFCS form
Describe::describe_val(x); // trait-qualified form
```

Default methods occupy normal dictionary slots. Every implementation method
receives the active dictionary as a hidden trailing argument, so a default can
call a sibling method. An omitted default slot points at the class default body.

### Builtin traits

The compiler pre-registers these traits and instances for `int`, `float`, and (where applicable) `string` / `bool` / `unit`:

| Trait | Purpose | Operators / methods |
|-------|---------|---------------------|
| `Add` | Addition | `+` → `add` |
| `Sub` | Subtraction | `-` → `sub` |
| `Mul` | Multiplication | `*` → `mul` |
| `Div` | Division | `/` → `div` |
| `Neg` | Negation | unary `-` → `neg` (`int` / `float`) |
| `Rem` | Remainder | `%` → `rem` (`int` / `float`) |
| `Pow` | Exponentiation | `**` → `pow` (`int` / `float`) |
| `Num` | Convenience bundle | Supertrait of `Add` + `Sub` + `Mul` + `Div` + `Neg` + `Rem` + `Pow` (no own methods) |
| `Shl` | Shift left | `<<` → `shl(T, int) -> T` (`int` / `byte`; the count is an `int`) |
| `Shr` | Shift right | `>>` → `shr(T, int) -> T` (`int` / `byte`; the count is an `int`) |
| `BitAnd` | Bitwise AND | `&` → `bitand` (`int` / `byte`) |
| `BitOr` | Bitwise OR | `\|` → `bitor` (`int` / `byte`) |
| `BitXor` | Bitwise XOR | `^` → `bitxor` (`int` / `byte`) |
| `BitNot` | Bitwise NOT | unary `~` → `bitnot` (`int`) |
| `Integral` | Convenience bundle | Supertrait of `Num` + `Shl` + `Shr` + `BitAnd` + `BitOr` + `BitXor` + `BitNot` (`int`; `float` is `Num` but not `Integral`) |
| `Lt` | Less-than | `<` → `lt` |
| `Le` | Less-or-equal | `<=` → `le` |
| `Gt` | Greater-than | `>` → `gt` |
| `Ge` | Greater-or-equal | `>=` → `ge` |
| `Ord` | Convenience bundle | Supertrait of `Lt` + `Le` + `Gt` + `Ge` (no own methods) |
| `Eq` | Equality | `==`, `!=` (`unit` too: `()` equals `()`, also under a `T: Eq` bound); structural for ground tuples and fixed arrays of `Eq` elements |
| `Hash` | Hashing | `hash(T) -> int`; structural for ground tuples and fixed arrays of `Hash` elements (combined as a derived `Hash` combines fields) |
| `Show` | Display | `show(T) -> string`; used by format `%v`; structural for tuples (bounded type-parameter elements included), fixed arrays, anonymous records, `Option` and `Result` |
| `Length` | Size query | `fn len(T) -> int`; called as `x.len()` on custom types (arrays/`Vec`/tuples/records/strings are structural and meet a `T: Length` bound) |
| `Into` | Conversion | `into(Self) -> T` via `impl Into<T> for Self` (no builtin instances) |

`Into` is multi-parameter: `impl Into<T> for S` stores instance args
`[S, T]`. Prefer method form with an expected type —
`let y: T = x.into();` — so the target pins constraint discharge. Open
`where Into<A, B>` helpers also work. See `examples/into.hy`.

On open/generic operands, operators require the matching op trait (or the
`Num` / `Integral` / `Ord` convenience supertrait). A hand-written
`impl Num for X` needs every superclass instance, `Rem` and `Pow` included. Concrete `int`/`float` arithmetic and
comparisons still use hardwired opcodes. String concatenation
(`string + string`) is a separate path and is **not** covered by `Num`/`Add`.

### Trait derive

`enum` and `class` declarations may include `#[derive(...)]`
attributes that synthesize structural instances of builtin traits:

```coil
#[derive(Show, Eq)]
enum Point {
    Origin,
    Point { x: int, y: int },
}

#[derive(Show, Eq)]
class Cell {
    value: int,
}
```

| Trait | Synthesized methods | Strategy |
|-------|---------------------|----------|
| `Show` | `show` | Payload enum: `match` + `format` / string lits (qualified case names). Scalar enum: the backing word (`Status::Ok` shows as `200`). Class: field walk via `.field` |
| `Eq` | `eq`, `ne` | Payload: tag + payload `==`. Scalar: backing-word `==`. `ne` is `!(a == b)` |
| `Ord` | `lt`, `le`, `gt`, `ge` | Payload: lexicographic on declaration order. Scalar: order of the backing word (a `#[repr(string)]` enum orders by declaration, not by its strings) |
| `Default` | `static fn default` | Class: each field takes its type's default (`0`, `0.0`, `false`, `""`, otherwise `Ty::default()`); enum: first variant with defaulted payloads. Call it as `Ty::default()` |
| `Hash` | `hash` | Payload: tag + recursive `field.hash()`. Scalar: hash of the backing word |
| `Send` | _(marker)_ | Empty instance (thread spawn still uses structural sendability) |
| `Sensitive` | _(marker)_ | Empty instance (redaction hooks deferred) |

**Default display (no derive):** every non-generic `enum` / `class` that lacks
`#[derive(Show)]` and has no explicit `impl Show` gets a
compiler-generated instance whose body returns the type name string. Explicit
`impl` and structural `#[derive(Show)]` take precedence (overlap with a manual
`impl` is still an error if both exist).

Rules:

- Placement: immediately before the `enum` / `class` keyword (after any `///` doc comment).
- Built-in derives: `Show`, `Eq`, `Ord`, `Default`, `Hash`, `Send`, `Sensitive`. Unknown / arithmetic traits (`Num`, …) error; user derives come from `derive` macros ([Macros](/docs/references/macros)).
- Generic types derive bounded instances: `#[derive(Show, Eq)] class Box<T>`
  expands to `impl Show for Box<T: Show>` and `impl Eq for Box<T: Eq>`, so the
  instance applies to `Box<X>` whenever `X` has the trait. `Ord` bounds by
  `Ord + Eq`, `Default` by `Default` (the primitives have
  built-in `Default` instances, so `let b: Box<int> = Box::default();` works).
  Generic types get no type-name `Show` default.
- Combining `#[derive(Show)]` with a hand-written `impl Show for T` hits the usual overlap diagnostic.
- Empty `#[derive()]` with no traits is a parse error.
- `Show` is the one display trait. The former `String` trait (`to_string`, a
  copy of `Show`) is gone: `#[derive(String)]` and `impl String for T` are
  `E0119`, and a `.to_string()` with no method of that name is `E0101` /
  `E0104`; each points at `Show` / `show()`. Call `x.show()` or
  `format("%v", x)` instead. A class's own `fn to_string()` method is
  unaffected.

See `examples/derive_show_eq.hy`, `examples/derive_hash.hy`, and `examples/typeof_len.hy`.

### User-defined traits (sketch)

Declare a trait and provide instances for concrete types. Prefer the
`impl Trait for Type` is the only typeclass instance form. Inherent `impl Foo<T>` still takes type parameters on the type. For multi-parameter traits, `impl Trait<A, B> for T` prepends `T` as the first type argument (Self slot), so it provides the constraint `Trait<T, A, B>`. `impl Trait<Type> { … }` is an error that suggests `impl Trait for Type`.

```coil
trait Measurable<T> {
    fn size(T x) -> int;
}

impl Measurable for int {
    fn size(int x) -> int { return x; }
}
```

Instance methods compile to ordinary functions with mangled names
(`Class__Type__method`). Generic call sites discharge the bound at
typecheck time and pass the matching dictionary at runtime (above).

### Trait-qualified calls

`Trait::method(args)` resolves exactly like the bare call `method(args)`, but
only that trait's method is a candidate. Use it when two traits, or a trait
and a free function, share a method name:

```coil
trait Area<T> { fn size(T s) -> int; }
trait Volume<T> { fn size(T s) -> int; }

class Sq { pub w: int, }
impl Area for Sq { pub fn size(Sq s) -> int { return s.w * s.w; } }
impl Volume for Sq { pub fn size(Sq s) -> int { return s.w * s.w * s.w; } }

fn both<T: Area + Volume>(T x) -> int {
    return Area::size(x) * 1000 + Volume::size(x); // bare size(x) is ambiguous here
}

let s = new Sq(3);
let a = Area::size(s);   // 9
let v = Volume::size(s); // 27
```

- It works under a bound (dictionary dispatch), at a concrete type, in a
  trait's default body, and on a trait-object value.
- Receiverless methods take their instance from the expected type, as the bare
  form does: `let z: Sq = Zero::zero();`, `let p: Point = FromVal::from_val(v);`.
- A trait from another module is named as you import it (`use shapes::Area;`
  then `Area::size(x)`), or with its module path (`shapes::Area::size(x)`).
- `Type::assoc_fn`, `Enum::Variant` and `T::method` keep their meaning: the
  owner is read as a trait only when it names no type.
- It compiles to the same call as the bare form, so it has no runtime cost.
- Errors: an unknown owner is `E0202`, and a method the trait does not declare
  is `E0101`. No matching instance, or several with nothing to choose between
  them, is `E0119`. A type parameter without the trait's bound is also `E0119`.

### Static trait methods

A trait method with no `Self`-typed parameter is declared `static fn`, the
same spelling as an inherent static. Its `Self` type usually appears only in
the return type (a constructor, a decoder, `Default::default`). It is called
on its owner, never on a value:

```coil
class Val { pub i: int, }
class Point { pub x: int, }

trait FromVal<T> {
    static fn from_val(Val v) -> T {}
}

impl FromVal for Point {
    pub static fn from_val(Val v) -> Point { return new Point(v.i); }
}

impl FromVal for int {
    pub static fn from_val(Val v) -> int { return v.i * 2; }
}

fn decode<T: FromVal>(Val v) -> T {
    return T::from_val(v);
}

let p = Point::from_val(new Val(4));     // concrete owner: class, enum or primitive
let n: int = decode(new Val(4));         // T chosen by the annotation
```

- The owner is a concrete type with an instance (`Point::from_val`,
  `int::from_val`, `Dir::from_val`) or a type parameter in scope whose bound
  declares the method (`T::from_val`).
- A type parameter that appears only in a call's result is chosen by the
  expected type: `let x: T = f()`, `return f()`, `f()?` in a `Result` fn, or
  an argument whose parameter type is known. With no expectation and more
  than one instance the call is ambiguous; annotate the binding.
- Static-ness must match the declaration: a `static fn` in the trait is
  implemented as `pub static fn`, and an instance method cannot be called as
  `Owner::m(..)`.
- A default body may call sibling statics bare (`from_val(v)`), since the
  trait's own bound is active there. Outside a trait body, name the trait
  instead: `FromVal::from_val(v)` (see trait-qualified calls above).
- `#[derive(Default)]` generates `static fn default()`, so `Config::default()`
  and `T::default()` under `T: Default` work like any other static.

See `examples/static_trait_method.hy`.
### Instances for generic types

A trait can be implemented for a generic class or enum. The head's bare
uppercase letters are the instance's type parameters, the same rule inherent
`impl Cell<T>` uses, and the instance applies to every instantiation:

```coil
class Box<T> {
    pub item: T,
}

impl Describe for Box<T> {
    pub fn describe(Box<T> b) -> string { return "Box"; }
}

new Box(3).describe();          // Describe<Box<int>>
new Box("x").describe();        // Describe<Box<string>>
```

`Box<int>` / `Box<Point>` in a head stay concrete instances, and a generic
instance overlaps with them (an error), as two concrete instances would.

The head's parameters can carry bounds, written inline as for inherent
`impl Store<T: Eq>`. The bounds are the instance's *context*: the instance
applies to `Box<X>` only when `X` has the bounded trait, and inside its
methods the parameter's trait methods resolve through the bound:

```coil
impl Describe for Box<T: Describe> {
    pub fn describe(Box<T> b) -> string {
        return "Box(" + b.item.describe() + ")";
    }
}

new Box(new Box(3)).describe();     // Describe<Box<Box<int>>> ← Describe<Box<int>> ← Describe<int>

fn wrap<T: Describe>(T x) -> string {
    return new Box(x).describe();   // context Describe<T> from wrap's bound
}
```

- A use whose context has no instance is a compile error that names both:
  ``No instance for `Describe<Point>` (needed by `Describe<Box<Point>>`)``.
  In a generic function, the type parameter needs the bound.
- Recursive instances (`impl Describe for Tree<T: Describe>` calling
  `describe` on a subtree) and multi-parameter heads
  (`Pair<A: Describe, B: Describe>`) work the same way.
- `#[derive]` on a generic type produces exactly this bounded form (see
  Trait derive above).

### Instance coherence

Typeclass instances follow module-path ownership rules so dictionary
resolution stays deterministic across projects:

- `impl Class<T…>` is allowed when the current module defines `Class`.
- Otherwise, every non-variable instance argument must have a nominal
  head (enum, class, or type alias) defined in the current module.
- Builtin types (`int`, `float`, `string`, tuples, arrays, and records)
  are not local nominal heads. For example, a module that did not define
  `Show` cannot add `impl Show<(int, int)>`, and `impl Into<Wrapper> for int`
  is rejected unless `Into` itself is defined in the current module.
- Exact duplicates and instances whose heads unify with an existing
  instance are rejected.
- If constraint discharge ever sees two matching instances, it reports
  an ambiguous-instance error rather than selecting the first one.

### Associated types and GATs

A trait may declare associated types; each impl must define them. Associated
types may be nullary (`type Elem;`) or generic (`type Ref<T>;`, also called a
generic associated type / GAT):

```coil
trait Collect<C> {
    type Elem;
    fn head(C xs) -> Elem;
}

impl Collect<Option<int>> {
    type Elem = int;
    fn head(Option<int> xs) -> int {
        return match xs {
            Option::Some(v) => v,
            Option::None => 0,
        };
    }
}
```

- **In method signatures** inside the class, bare `Elem` (and `Collect::Elem` /
  `C::Elem`) resolve to the associated type. Method schemes quantify class
  parameters first, then any associated-type projection variables.
- **Impls** must define every associated type (`type Elem = …;`) and may not
  introduce unknown ones. Missing or extra assoc types are type errors. A GAT
  definition repeats its own binders, for example `type Ref<T> = T;`.
- **Projections** `Owner::Assoc` and applied GAT projections
  `Owner::Assoc<T, U>` are allowed in type annotations. When the
  owner is a type parameter with an active class bound that declares the
  assoc type (`fn take_head<C: Collect>(C xs) -> C::Elem`), the projection
  is pinned when a ground instance is discharged at the call site
  (`take_head(Option::Some(42))` → `int`), separately for each owner.
- **Projections are rigid in a generic body.** Like a type parameter,
  `C::Elem` there stands for whatever type the instance picks, so it equals
  only itself: a trait call on a `C` (`head(xs)`) returns `C::Elem`, and
  using it as `string`, as another type parameter, or as `D::Elem` is an
  error.

```coil
fn take_head<C: Collect>(C xs) -> C::Elem {
    return head(xs);       // ok: `head` on a `C` returns `C::Elem`
}

fn bad<C: Collect>(C xs) -> C::Elem {
    return "s";            // error: `C::Elem` is used as `string`
}
```
- **GAT arguments are kind-checked.** `type Ref<F: * -> *>;` requires applied
  projections such as `P::Ref<Option>` to pass a constructor-kinded argument,
  while `P::Ref<int>` is rejected.

```coil
trait Pointer<P: * -> *> {
    type Ref<T>;
    fn deref<T>(P<T> ptr) -> Ref<T>;
}

impl Pointer for Option {
    type Ref<T> = T;
    fn deref<T>(Option<T> ptr) -> T { /* ... */ }
}

fn get<P: * -> *, Pointer, A>(P<A> ptr) -> P::Ref<A> {
    return deref(ptr);
}
```

Associated types are erased at runtime (no dictionary slot); they exist only
in the typechecker. See `examples/assoc_type.hy` and
`examples/gat_pointer.hy`.

### Superclasses and implied bounds

Unary trait parameter bounds declare superclasses:

```coil
trait Equal<T> { fn eq_val(T a, T b) -> bool; }
trait Ordered<T: Equal> { fn lt_val(T a, T b) -> bool; }

impl Equal for int { fn eq_val(int a, int b) -> bool { return a == b; } }
impl Ordered for int { fn lt_val(int a, int b) -> bool { return a < b; } }

// Implied Equal: no need to write `T: Ordered + Equal`
fn cmp_eq<T: Ordered>(T a, T b) -> bool {
    return eq_val(a, b);
}
```

- **Impl check:** `impl Ordered<int>` errors unless `Equal<int>` already exists.
- **Implied bounds:** an active constraint `Ordered<T>` covers `Equal<T>` for
  discharge and method resolution, so superclass methods are available under
  the subclass bound alone.
- **Dict slots:** `Ordered` dict = `[lt_val, eq_val]` (subclass then superclass).

Builtin `Ord` / `Eq` are independent (no superclass link) so existing builtin
dict layouts stay unchanged. Prefer a custom `Ordered` / `Equal` pair when you
need superclass semantics. See `examples/superclass_ord.hy`.

### First-class generic functions

A generic function can escape into a local `PolyFn` value and be instantiated
more than once:

```coil
fn id<T>(T x) -> T { return x; }
let f = id;
let n = f(42);
let x = f(4.0);
```

Unconstrained escapes use `MakePolyFn`. Constrained generics always escape via
`MakePolyFnCapture`: each constraint slot is filled from an in-scope `__dictN`
or a concrete instance dictionary when the type arguments are ground; only
truly unavailable evidence (for example top-level `let f = show;`) leaves a
null slot for application-time synthesis. Applications use `CallIndirect`,
which merges captured evidence with any dictionaries synthesized at the call
site (preferring captures for already-filled slots). A generic identifier
passed to a compatible `forall T. T -> T` parameter uses the same path.

### Higher-rank `forall`

Type annotations may use prenex / higher-rank quantification:

```coil
fn app(forall T. T -> T f, int x) -> int {
    return f(x);
}
```

`forall T: Num. …` carries constraints on the binder. When checking an
argument against a `forall` expectation, the checker skolemizes the
binder (rigid variables) and rejects escaping skolems. A polymorphic
generic function identifier (e.g. `id`) is compatible with a matching
`forall` parameter type.

See `examples/generics.hy`, `examples/typeclass_dict.hy`,
`examples/existential_show.hy`, `examples/hkt_container.hy`,
`examples/hkt_bifunctor.hy`, `examples/multiparam.hy`,
`examples/constraint_kind.hy`, `examples/superclass_ord.hy`,
`examples/assoc_type.hy`, `examples/gat_pointer.hy`, and
`examples/polyfn.hy` for runnable demos.

### Boxing and unboxing at generic boundaries

When a concrete value crosses into a generic function body, the compiler wraps it in a heap-allocated `ObjBoxed` cell (`BoxValue`). When the generic call returns a value whose type is concrete at the call site, the compiler immediately unpacks it back to a raw value (`UnboxValue`).

This means **most generic calls to primitive-returning functions are transparent** — the caller receives a plain `int`, `float`, `bool`, or `string`, not a boxed wrapper:

```coil
use io::{stdout, write_all};
use string::{format, to_bytes};
fn id<T>(T x) -> T { return x; }

fn main() {
    let n = id(42);   // n is a raw int — unboxed automatically
    write_all(stdout(), to_bytes(format("%i", n)));    // prints: 42
}
```

**Displaying open / generic values — use `%v`:**

Concrete format specifiers (`%i`, `%f`, `%s`, `%z`, …) require a resolved concrete type. An open type parameter is a type error; use `%v`, which requires `T: Show` and lowers through the `show` method to a string before formatting:

```coil
use io::{stdout, write_all};
use string::{format, to_bytes};
fn show_it<T: Show>(T x) {
    write_all(stdout(), to_bytes(format("%v", x)));   // ok — dictionary Show
}

fn main() {
    show_it(42);
    show_it("hi");
    let s = format("%v", 99);  // same lowering; leaves a string
    write_all(stdout(), to_bytes(format("%s", s)));
}
```

Builtin `Show` instances cover `int`, `float`, `string`, `bool`, and `unit`, plus the structural ones: tuples, fixed arrays and anonymous records of shown types, and `Option` / `Result` over shown types (`Some(1)`, `None`, `Ok(2)`, `Err(bad)`, the payload as `%v` shows it). `show(x)`, `x.show()` and `format("%v", x)` agree for all of them. User types can `impl Show for MyType`. See `examples/generic_print.hy`.

---

## Known limitations

| Area | Limitation |
|------|------------|
| Type aliases | Lexically scoped (stack of frames); duplicate names in the same frame are rejected; inner scopes may shadow outer; parametric aliases (`type Pair<T> = …`) expand on application |
| Classes | Nominal `Ty::Con`; ctor args / fields / methods supported — no inheritance or virtual dispatch |
| FFI | Broad scalar/Ptr/struct/callback tags via `ffi::types` / `extern struct` — see [FFI tutorial](/docs/manual/tutorial/07-ffi) |
| Generics | Generic functions/enums/aliases/classes, `T: Class` bounds, multi-param `where` constraints, `forall` annotations, user `trait`/`impl`, superclasses, orphan/coherence checks, associated types, and GATs are supported |
| Trait runtime | **Decided:** ground instance methods use `CALL`; dictionaries stay in generic bodies. Only ground `Num`/`Ord`/`Eq` (and operator supertraits) monomorphize to opcodes. See [Call-site dispatch](#call-site-dispatch). |
| Option / Result ABI | **Decided:** pointer niche, two-slot call return, or boxed enum — see [Option / Result runtime ABI](#option--result-runtime-abi). |
| Enum runtime | **Decided:** heap objects; DCE may skip discarded or unary-unpack constructors only — see [Runtime representation](#runtime-representation). |
| Existentials | Bare class names are existential value types only for unary `* -> Constraint` classes; multi-param bare existentials and constructor-kinded bare existentials are rejected |
| Higher-kinded types | Constructor kinds such as `F: * -> *`, `F: * -> * -> *`, and `F: (* -> *) -> *` are supported; kind variables / kind polymorphism are not supported |
| Associated types | Nullary associated types and generic associated type projections are supported; associated-type equality constraints in `where` clauses are not syntax |
| Typeclass deriving | `#[derive(Show, Eq, Ord, Hash)]` on payload or scalar `enum` / `class`, generic ones included (see [Trait derive](#trait-derive)); user traits need an explicit `impl` or a user `derive` macro |
| Effect system | No linear/ownership types |
| Callback returns | Opaque `Ptr` address; re-invoke requires host/`declare` of the pointed-to symbol (no automatic trampoline) |
| Inner match patterns | Same outer tag with different inner tags — supported (Phase 18A); complex nested cases may still need careful arm ordering |
| `gen fn` `-> T` annotation | When present, `T` is unified with the coroutine yield/return type `Y` (same slot as `yield` / `return` / `resume`). A mismatch is a type error. |

---

## Pretty-printed forms

Diagnostic messages render types roughly as:

| Internal | Display |
|----------|---------|
| `int` | `` `int` `` |
| `(int, string)` | `` `(int, string)` `` |
| `[int; 5]` | `` `[int; 5]` `` |
| `{ x: int, y: int }` | `` `{ x: int, y: int } `` |
| `Option` sum | `` `Option` `` with variant detail in specialized errors |

---

## Related documents

| Document | Contents |
|----------|----------|
| [Syntax](/docs/references/syntax) | Where annotations appear in grammar |
| [Operators](/docs/references/operators) | Arithmetic and comparison typing |
| [Built-ins](/docs/references) | FFI type tags |
| [Tutorial: Types](/docs/manual/tutorial/02-types-and-variables) | Guided introduction |
