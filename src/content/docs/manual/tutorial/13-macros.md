---
title: 13 — Macros
description: "Write code that writes code: function-style macros (name!(…)), attribute macros (#[name(…)]) and derives (#[derive(Name)]), built step by step in one provider module, plus how to debug them and which kind to pick."
---

# 13 — Macros

A macro is ordinary coil that runs **at compile time** and returns code. The
compiler pastes that code into your program and typechecks it like code you
wrote by hand. Coil has three kinds of macro:

| Kind | You write | Use it to |
|------|-----------|-----------|
| [Function-style macro](#function-style-macros) | `name!(…)` | expand a call into an expression, statements or declarations |
| [Attribute macro](#attribute-macros) | `#[name(…)]` above a function, method, `class` or `enum` | rewrite that item |
| [Derive](#derives) | `#[derive(Name)]` above a `class` or `enum` | add code after the type, generated from its fields or variants |

The built-in `#[derive(Show, Eq, …)]` you met in
[chapter 2](/docs/manual/tutorial/02-types-and-variables) are derives of the
third kind. This chapter writes one macro of each kind, then shows how to see
and debug what they produce. Every option is listed in the
[Macros reference](/docs/references/macros).

---

## Setting up a provider

Macros live in a **provider** module, and other modules import them with
`use`, like any item. A module cannot use the macros it declares, so the
macros go in their own file:

```
macros-demo/
├── main.hy              # uses the macros
└── src/
    └── my_macros.hy     # declares them
```

The provider starts by importing the `macro` module, which describes the code
a macro receives (`Expr`, `FnDecl`, `TypeDecl`) and the code it returns
(`Code`), plus a few helpers:

```coil
// src/my_macros.hy
use macro::{Expr, FnDecl, TypeDecl, Code, lit, raw};
use io::stdout;
use io::sync::write_all;
use string::to_bytes;
```

The examples write to stdout through the userland standard library, so run
them with both roots:

```bash
coil main.hy --root src --root path/to/coil-stdlib/src
```

---

## Function-style macros

A function-style macro is declared with `macro`. Its parameters are the
arguments of the call, each as an `Expr` (the argument's source text), and it
returns `Code`:

```coil
/// `square!(e)`: `e * e`.
macro square(Expr e) -> Code {
    return quote expr { ${e} * ${e} };
}
```

`quote expr { … }` is a **template**: coil source with holes. `${e}` splices
the argument in. `quote` checks nothing when the macro runs; the compiler
parses the result where the call was. The word after `quote` says what the
template is: `expr` (one expression), `stmts` (statements), `items`
(declarations) or `type`.

Arguments stay whole. `${e}` splices `e.src()`, which wraps the argument in
parentheses unless it is a single term, so `square!(1 + 2)` becomes
`(1 + 2) * (1 + 2)`, which is 9 and not 5.

### Statements: `check!` and `swap!`

A call written as a statement (`name!(…);` inside a block) expands to
statements, so its macro returns `quote stmts`:

```coil
/// `check!(cond)`: panic with the condition as written when it is false.
macro check(Expr cond) -> Code {
    return quote stmts {
        if !${cond} {
            panic "check failed: " + ${lit(cond.str())};
        }
    };
}

/// `swap!(a, b)`: exchange two variables.
macro swap(Expr a, Expr b) -> Code {
    return quote stmts {
        let tmp = ${a};
        ${a} = ${b};
        ${b} = tmp;
    };
}
```

`check!` is something a function cannot do: `cond.str()` is the condition's
source text, and `lit(…)` turns a string into a string literal, so the panic
message quotes the code that failed.

`swap!` declares its own `tmp`. Names bound with `let` or `for` inside a quote
are **hygienic**: the compiler renames them (`tmp` becomes `tmp__m`), so they
cannot clash with the caller's variables, even one called `tmp`.

### Any number of arguments: `all!`

A last parameter of type `Vec<Expr>` takes the remaining arguments, possibly
none. `$(parts)&&*` splices a `Vec<Code>` with `&&` between the elements:

```coil
/// `all!(a, b, …)`: true when every argument is (`true` for none).
macro all(Vec<Expr> conds) -> Code {
    if conds.len() == 0 {
        return raw("true");
    }
    let parts: Vec<Code> = Vec::new();
    for c in conds {
        parts.push(raw(c.src()));
    }
    return quote expr { $(parts)&&* };
}
```

`raw(text)` makes `Code` from source text. The body is ordinary coil: loops,
`if`, `Vec` and strings all work at compile time.

### Declarations: `id_type!`

A call at the top level of a file expands to declarations, so its macro
returns `quote items`. The output may itself use derives and other macros:

```coil
/// `id_type!(Name)`: a class wrapping one `int`, with `==`.
macro id_type(Expr name) -> Code {
    return quote items {
        #[derive(Eq, Show)]
        class ${name} {
            pub value: int,
        }
    };
}
```

### Using the function-style macros

```coil
// main.hy
use io::stdout;
use io::sync::write_all;
use string::{format, to_bytes};
use my_macros::{square, check, swap, all, id_type};

id_type!(UserId);

fn main() {
    let x = square!(1 + 2); // (1 + 2) * (1 + 2)
    check!(x == 9);

    let a = 1;
    let tmp = 2;
    swap!(a, tmp); // the macro's own `tmp` does not clash with this one

    let ok = all!(x > 0, a == 2, tmp == 1);
    let same = new UserId(7) == new UserId(7);
    write_all(stdout(), to_bytes(format("%i %i %i %z %z", x, a, tmp, ok, same)));
}
```

Output: `9 2 1 true true`. Change the check to `check!(x < 5)` and the
program stops with `panic: check failed: x < 5`.

Where the call is decides what its macro must return:

| Call | Output parses as |
|------|------------------|
| `name!(…);` at the top level | declarations (`quote items`) |
| `name!(…);` in a block | statements (`quote stmts`) |
| anywhere else | one expression (`quote expr`) |

### Arguments are code, not values

A macro receives its arguments as source and can paste them more than once.
That evaluates them more than once:

```coil
fn noisy(int n) -> int {
    write_all(stdout(), to_bytes("called "));
    return n;
}

let y = square!(noisy(4)); // prints "called called ", y is 16
```

When an argument may have side effects or be expensive, bind it once in the
output (`quote stmts { let v = ${e}; … }`) or write a function instead. Use a
macro when you need what a function cannot do: the argument's text, new
variables or declarations, or code shaped by how many arguments there are.

---

## Attribute macros

An attribute macro is declared with `attr`. Its first parameter is the item
the attribute sits on: a `FnDecl` for a function or method, a `TypeDecl` for a
`class` or `enum`. The other parameters are the attribute's arguments, of type
`string`, `int` or `bool`.

The output **replaces** the item. To keep the original, emit it again.

### Wrapping a function: `#[trace]`

`#[trace(label = "…")]` prints a line before and after the function runs:

```coil
/// Write a line to stdout; generated code calls it as `my_macros::say`.
fn say(string text) {
    write_all(stdout(), to_bytes(text + "\n"));
}

/// Print a line before the function runs and after it returns.
attr trace(FnDecl f, string label) -> Code {
    let inner = f.name.str() + "__traced";
    return quote items {
        ${raw(f.with_name(inner))}
        fn ${raw(f.signature(f.name.str()))} {
            say(${lit("[" + label + "] enter " + f.name.str())});
            let r = ${raw(f.call(inner))};
            say(${lit("[" + label + "] leave " + f.name.str())});
            return r;
        }
    };
}
```

The `FnDecl` helpers do the bookkeeping:

- `f.with_name(inner)` is the whole original function renamed to `add__traced`.
- `f.signature(name)` is its parameter list and return type under `name`:
  `add(int a, int b) -> int`.
- `f.call(inner)` calls `inner` with the same arguments: `add__traced(a, b)`.

The output calls `say`, which `main.hy` never imports. Generated code may use
its provider's own items; the compiler writes them with their module path
(`my_macros::say`), so the output works whatever the using module imports.

### Adding to a type: `#[table]`

On a type, the macro receives a `TypeDecl`. `t.source` is the declaration as
written; emitting it keeps the type, and the rest of the output adds to it:

```coil
/// Keep the class and add `T::table()`.
attr table(TypeDecl t, string name) -> Code {
    return quote items {
        ${raw(t.source)}
        impl ${t.name} {
            pub static fn table() -> string {
                return ${lit(name)};
            }
        }
    };
}
```

### Using the attribute macros

```coil
// main.hy
use io::stdout;
use io::sync::write_all;
use string::{format, to_bytes};
use my_macros::{trace, table};

#[trace(label = "math")]
fn add(int a, int b) -> int {
    return a + b;
}

#[table(name = "users")]
class User {
    pub id: int,
    pub name: string,
}

fn main() {
    let n = add(2, 3);
    let u = new User(1, "ada");
    write_all(stdout(), to_bytes(format("%i %s %s\n", n, User::table(), u.name)));
}
```

Output:

```
[math] enter add
[math] leave add
5 users ada
```

Arguments are passed by name (`label = "math"`) or in order
(`#[trace("math")]`). Several attribute macros on one item apply outermost
first, and each one wraps what the next produced; see
[the reference](/docs/references/macros#attribute-macros) for the exact order.

---

## Derives

A derive is declared with `derive`. It takes exactly one `TypeDecl` and
returns the items to add **after** the type, which stays as written. Derives
are how you generate code from a type's shape: one line per field, one match
arm per variant.

### From fields: `Columns`

`t.fields()` lists a class's fields. A derive can also own **field
attributes**: `attrs(column)` lets the user write `#[column(…)]` on a field,
and `f.attr_str("column", "name", fallback)` reads it:

```coil
/// `T::columns()`: the field names; `#[column(name = "…")]` renames one.
derive Columns(TypeDecl t) -> Code attrs(column) {
    let names: Vec<Code> = Vec::new();
    for f in t.fields() {
        names.push(lit(f.attr_str("column", "name", f.name.str())));
    }
    return quote items {
        impl ${t.name} {
            pub static fn columns() -> Vec<string> {
                let out: Vec<string> = Vec::from([$(names),*]);
                return out;
            }
        }
    };
}
```

### Implementing a trait: `Describe`

A derive usually implements a trait. The trait can live in the provider next
to its derive and share its name, because derives have their own namespace:

```coil
/// Implemented by `#[derive(Describe)]`.
trait Describe<T> {
    fn describe(T self) -> string {}
}

/// `impl Describe for T`: `Name(field=value, …)`.
derive Describe(TypeDecl t) -> Code {
    let parts: Vec<Code> = Vec::new();
    let sep = "";
    for f in t.fields() {
        parts.push(quote expr { ${lit(sep + f.name.str() + "=")} + self.${f.name}.show() });
        sep = ", ";
    }
    return quote items {
        impl Describe for ${t.name} {
            pub fn describe(${t.name} self) -> string {
                return ${lit(t.name.str() + "(")} + $(parts)+* + ")";
            }
        }
    };
}
```

The macro sees types **as written**, not resolved, so it cannot ask whether a
field's type is `Show`. It emits `self.x.show()` anyway; if a field's type
has no `Show`, the typechecker reports it at the `#[derive]`.

```coil
// main.hy
use io::stdout;
use io::sync::write_all;
use string::{format, to_bytes};
use my_macros::{Columns, Describe};

#[derive(Columns, Describe)]
class User {
    pub id: int,
    #[column(name = "user_name")]
    pub name: string,
    pub active: bool,
}

fn main() {
    let u = new User(1, "ada", true);
    let cols = User::columns();
    write_all(stdout(), to_bytes(format("%s %s %i\n", u.describe(), cols[1], cols.len())));
}
```

Output: `User(id=1, name=ada, active=true) user_name 3`.

A field attribute that no derive on the type owns is an error, so typos are
caught: `#[colum(name = "user_name")]` reports ``Unknown attribute `colum` ``
with the help ``no derive on this type declares `attrs(colum)` ``.

### From variants: `VariantName`

On an enum, `t.variants()` lists the cases. Each `Variant` has a `name` and a
shape: `is_unit()`, `is_tuple()` (with `arity()` payload values) or
`is_record()` (with `fields`). This derive builds one match arm per variant:

```coil
/// `e.name()`: the variant's name as written.
derive VariantName(TypeDecl t) -> Code {
    if !t.is_enum() {
        panic "VariantName needs an enum, and " + t.name.str() + " is a class";
    }
    let arms: Vec<Code> = Vec::new();
    for v in t.variants() {
        let pat = t.name.str() + "::" + v.name.str();
        // Ignore any payload: `(_, _)` or `{ w: _, h: _ }`.
        if v.is_tuple() {
            let holes = "_";
            let i = 1;
            while i < v.arity() {
                holes += ", _";
                i += 1;
            }
            pat += "(" + holes + ")";
        } else if v.is_record() {
            let holes = "";
            for f in v.fields {
                if holes != "" {
                    holes += ", ";
                }
                holes += f.name.str() + ": _";
            }
            pat += " { " + holes + " }";
        }
        arms.push(quote stmts { ${raw(pat)} => ${lit(v.name.str())}, });
    }
    return quote items {
        impl ${t.name} {
            pub fn name() -> string {
                return match self {
                    $(arms)*
                };
            }
        }
    };
}
```

```coil
// main.hy
use io::stdout;
use io::sync::write_all;
use string::{format, to_bytes};
use my_macros::VariantName;

#[derive(VariantName)]
enum Shape {
    Dot,
    Circle(float),
    Rect { w: float, h: float },
}

fn main() {
    let shapes = [Shape::Dot, Shape::Circle(1.0), Shape::Rect { w: 2.0, h: 3.0 }];
    for s in shapes {
        write_all(stdout(), to_bytes(format("%s ", s.name())));
    }
}
```

Output: `Dot Circle Rect `.

The `panic` at the top is how a macro rejects input it cannot handle. On a
class, the compiler reports ``derive `VariantName` failed: panic: VariantName
needs an enum, and Point is a class`` at the `#[derive]` line.

For generic types, use `t.self_type()` (`Box<T>`) and `t.impl_head("Show")`
(`Box<T: Show>`) instead of `t.name`; see
[the reference](/docs/references/macros#derives).

---

## Seeing and debugging the output

**Expand a file.** `coil dissect --expand FILE` prints the file with every
macro expanded. For the attribute example above:

```bash
coil dissect --expand main.hy --root src --root path/to/coil-stdlib/src
```

```coil
fn add__traced(int a, int b) -> int {
    return a + b;
}

fn add(int a, int b) -> int {
    my_macros::say("[math] enter add");
    let r__m = add__traced(a, b);
    my_macros::say("[math] leave add");
    return r__m;
}
```

You can see the renamed original, the wrapper, the provider's `say` written
with its module path, and the hygienic `r__m`. In an editor, the language
server offers **Expand macros in this file** on attribute and `name!(…)`
lines.

**Errors point at the use site.** Generated code is typechecked like your
own, and a mistake in it is reported where the macro was used, with the
generated line attached:

```
Error: [E0102] cannot apply `*` to operands of type `string`
 9 │     let s = square!("a");
   │ Help: in code generated by macro `square!`: `"a" * "a"`
```

**Output that does not parse** is reported as `produced code that does not
parse`, with the whole generated code in the help, because the template is
only parsed once the macro has run.

**Print from a macro** with `panic`: a macro has no stdout, so
`panic "got: " + e.str();` is the way to see what it received.

A macro runs with **no host access** (no files, network, clock, environment,
threads or processes) unless the build grants it with a `--comptime-*` flag,
and within a step budget, so a runaway loop fails with an error instead of
hanging the build. See [Compile-time code](/docs/references/comptime) for the
grants, the limits and `comptime` blocks, which generate code without
declaring a macro.

---

## Which one to use

| You want to | Use |
|-------------|-----|
| Generate code from a type's fields or variants (trait impls, field lists, serializers) | a **derive** |
| Let users tune that per field or variant (`#[column(name = …)]`) | a derive with `attrs(…)` |
| Change or wrap an existing function, method or type (logging, timing, retries, registration) | an **attribute macro** |
| Configure the item with arguments (`#[table(name = "users")]`) | an attribute macro (a derive takes no arguments) |
| Capture an expression's source text, declare variables at the call site, or take any number of arguments | a **function-style macro** |
| Stamp out declarations from a name (`id_type!(UserId)`) | a function-style macro at the top level |
| Compute a value from values | a plain function: it evaluates each argument once and is easier to read |

Some rules of thumb:

- A derive only **adds** code and leaves the type as written. Reach for an
  attribute macro only when you need to replace or wrap the item, or pass it
  arguments.
- An attribute macro that only adds should emit `t.source` / `f.source`
  first; forgetting it deletes the item.
- A function-style macro's arguments are code. Paste each one once, or bind
  it to a `let` in the output.

---

## Exercises

1. Write `check_eq!(a, b)` that evaluates each side once and panics with
   both sides as written and their values:
   `check failed: x + 1 == 3 (2 vs 3)`. (`string::format` with `%v` formats
   any value.)
2. Add an `int times` argument to `#[trace]` and repeat the call that many
   times, returning the last result.
3. Write `#[derive(FieldCount)]` that adds `static fn field_count() -> int`.
   `t.fields().len()` counts the fields and `lit_int` turns an `int` into
   code.
4. Extend `Columns` to leave out fields marked `#[column(skip = true)]`.
   `f.attr_str("column", "skip", "false")` reads the flag as text.

## Next

- [Macros reference](/docs/references/macros): every declaration form,
  `quote` hole, and `macro` module member.
- `examples/macro_fn.hy`, `examples/attr_decorator.hy` and
  `examples/attr_class.hy` in the coil-lang repository, with their providers
  in `examples/src/`.
