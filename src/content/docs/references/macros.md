---
title: Macros
description: "Derives, attribute macros and function-style macros: ordinary coil that runs at compile time and returns code. Declaring them, using them, the macro module and quote."
---

# Macros

A macro is ordinary coil that runs **at compile time** and returns code. There are three kinds:

| Kind | Declared as | Used as | Its output |
|------|-------------|---------|------------|
| Derive | `derive Name(TypeDecl t) -> Code { … }` | `#[derive(Name)]` on a `class` / `enum` | added after the type |
| Attribute macro | `attr name(FnDecl f, …) -> Code { … }` or `attr name(TypeDecl t, …) -> Code { … }` | `#[name(…)]` on a function, method, `class` or `enum` | replaces the item |
| Function-style macro | `macro name(Expr a, …) -> Code { … }` | `name!(…)` in an expression, a statement or at the top level | replaces the call |

The compiler runs macros after parsing and before typechecking. It parses the returned code and typechecks it like hand-written code, so a type error in generated code is reported at the macro's use site.

The built-in derives (`Show`, `Eq`, `Ord`, `Hash`, `String`, `Default`, `Send`, `Sensitive`) are derive macros too; they need no `use`. See [Types](/docs/references/types).

## Providers and imports

Macros live in a **provider** module and are imported with `use`, like any item:

```coil
use my_macros::{FieldNames, add_after, check};
```

- A module cannot use its own macros: put them in a separate module.
- Derives and function-style macros have their own namespaces, so a trait and its derive can share a name (`Summary`).
- Importing the same macro name from two modules is an error.
- A macro's output may use its provider's own items and other macros without the using module importing them. Generated code names provider items by their module path, including a provider's trait in an `impl` head (`impl my_macros::Summary for Point`). Only macro output may write a qualified `impl` head: in hand-written source it is an error, and you write `use my_macros::{Summary};` and `impl Summary for Point` instead.

## Derives

```coil
// my_macros.hy
use macro::{TypeDecl, Code, lit};

/// `T::field_names()`; `#[names(rename = "…")]` on a field renames it.
derive FieldNames(TypeDecl t) -> Code attrs(names) {
    let names: Vec<Code> = Vec::new();
    for f in t.fields() {
        names.push(lit(f.attr_str("names", "rename", f.name.str())));
    }
    return quote items {
        impl ${t.name} {
            pub static fn field_names() -> Vec<string> {
                let out: Vec<string> = Vec::from([$(names),*]);
                return out;
            }
        }
    };
}
```

```coil
// main.hy
use my_macros::{FieldNames};

#[derive(FieldNames)]
class Config {
    #[names(rename = "server-port")]
    pub port: int,
    pub host: string,
}
// Config::field_names() == ["server-port", "host"]
```

- A derive takes exactly one `TypeDecl` and returns `Code`: the items to add after the type.
- `attrs(h, …)` lists the field / variant attributes the derive owns (`#[names(...)]` above). An attribute that no derive on the type owns is an error.
- A derive that writes `impl Show for T` (or `String`) replaces the compiler's default type-name `Show`.
- On a generic type, `t.self_type()` writes the type for signatures (`Box<T>`) and `t.impl_head("Show")` an instance head with every parameter bounded (`Box<T: Show>`), so `impl Show for ${t.impl_head("Show")}` applies to `Box<X>` whenever `X` is `Show`. The built-in derives work on generic types this way.

## Attribute macros

```coil
// my_macros.hy
use macro::{FnDecl, Code, ident, raw, lit_int};

/// Wrap a function so it returns `result + by`.
attr add_after(FnDecl f, int by) -> Code {
    let inner = ident(f.name.str() + "__inner");
    return quote items {
        ${raw(f.with_name(inner.str()))}
        fn ${raw(f.signature(f.name.str()))} {
            let r = ${inner}(${raw(f.arg_names())});
            return r + ${lit_int(by)};
        }
    };
}
```

```coil
// main.hy
use my_macros::{add_after};

#[add_after(by = 10)]
fn triple(int x) -> int {
    return x * 3;
}
// triple(2) == 16
```

- The first parameter is a `FnDecl` (functions and methods) or a `TypeDecl` (classes and enums). The output **replaces** the item. To keep it, emit it again: `f.source`, `t.source`, or `f.with_name(…)` under a new name.
- The other parameters bind the attribute's arguments, by name (`by = 10`) or in order (`#[add_after(10)]`). They are `string`, `int` or `bool`.
- Several attribute macros on one item apply outermost first. Only the first one runs, and it receives the item with the others still on it; they run on its output in the next round. A type's derives run after its attribute macros.

## Function-style macros

```coil
// my_macros.hy
use macro::{Expr, Code, lit, raw};

/// `square!(e)`: `e * e`, with `e` kept whole.
macro square(Expr e) -> Code {
    return quote expr { ${e} * ${e} };
}

/// `check!(cond)`: panics with the condition as written when it is false.
macro check(Expr cond) -> Code {
    return quote stmts {
        if !${cond} {
            panic "check failed: " + ${lit(cond.str())};
        }
    };
}

/// `sum!(a, b, …)`: the sum of every argument.
macro sum(Vec<Expr> xs) -> Code {
    if len(xs) == 0 {
        return raw("0");
    }
    let parts: Vec<Code> = Vec::new();
    for x in xs {
        parts.push(raw(x.src()));
    }
    return quote expr { $(parts)+* };
}

/// `counter!(Name)`: a class with a `bump` method.
macro counter(Expr name) -> Code {
    return quote items {
        class ${name} {
            pub n: int,
        }

        impl ${name} {
            pub fn bump() -> int {
                self.n += 1;
                return self.n;
            }
        }
    };
}
```

```coil
// main.hy
use my_macros::{square, check, sum, counter};

counter!(Clicks);                // top level: the output is declarations

fn main() {
    let x = square!(1 + 2);      // expression: (1 + 2) * (1 + 2)
    check!(x == 9);              // statement: the output is statements
    let total = sum!(1, 2, x);   // 12
    let c = new Clicks(0);
    c.bump();
}
```

Where the call is decides what the output must be:

| Call | Output parses as | Replaces |
|------|------------------|----------|
| `name!(…);` at the top level | declarations | the statement |
| `name!(…);` in a block | statements | the statement |
| anywhere else | one expression | the call |

- Every parameter is an `Expr`, except that a last `Vec<Expr>` takes the remaining arguments (possibly none). The number of arguments is checked at the call.
- Each argument must parse as an ordinary expression. Named arguments (`e: 1`) and `...` spreads are not macro arguments.
- `!` must come directly before `(`. `a != b` and `!x` are unaffected.
- A macro call in another macro's arguments is part of that argument's text. It expands in the output, as does any macro call the output contains (`square!(square!(3))` is 81).
- The name is always bare (`square!`). Import the macro with `use`; `m::square!(…)` does not parse.

## `quote`

`quote items|expr|stmts|type { template }` is an expression of type `Code`. The template is coil source with holes:

| Hole | Splices |
|------|---------|
| `${e}` | `e.src()`: an `Ident`, `TypeRef`, `Expr` or `Code` |
| `$(xs) sep *` | a `Vec<Code>` with `sep` between elements; `sep` is up to two characters with no spaces (`$(xs),*`, `$(xs)+*`, `$(xs)*`) |

- To splice a string, wrap it: `lit(s)` makes a string literal, `raw(s)` splices it as source.
- Holes inside string literals are plain text, and braces in the template must balance.
- The template is only parsed when the output is. A mistake shows up as "produced code that does not parse", with the generated code attached.
- **Hygiene:** a name bound with `let` or `for` inside a quote is renamed (`tmp` becomes `tmp__m`), so it cannot capture or shadow the caller's names. The provider's own items are written with their module path, so the output does not depend on the using module's imports.

## The `macro` module

`use macro::{…}` imports the model macros work with. It describes declarations **as written**: types are not resolved.

| Type | Members |
|------|---------|
| `TypeDecl` | `name: Ident`, `kind` (`"class"` / `"enum"`), `generics`, `fields()`, `variants()`, `attrs`, `repr` (scalar backing or `""`), `module`, `docs`, `source`, `is_class()`, `is_enum()`, `self_type()` (`Name` / `Name<T, …>`), `impl_head(bound)` (`Name` / `Name<T: bound, …>`), `has_attr(name)`, `attr_str(attr, key, fallback)` |
| `Field` | `name: Ident`, `ty: TypeRef`, `is_pub`, `attrs`, `docs`, `has_attr`, `attr_str` |
| `Variant` | `name`, `shape` (`"unit"` / `"tuple"` / `"record"`), `tuple: Vec<TypeRef>`, `fields: Vec<Field>`, `value` (discriminant as written), `attrs`, `docs`, `arity()`, `is_unit()`, `is_tuple()`, `is_record()`, `has_attr`, `attr_str` |
| `FnDecl` | `name`, `params: Vec<Param>`, `ret`, `type_params`, `attrs`, `owner` (class of an `impl` method), `is_pub`, `is_static`, `is_coro`, `declares_effects`, `is_pure` (`pure fn`), `effects` (the `uses {…}` names), `uses_clause()`, `source`, `body_source()`, `signature(name)`, `with_name(name)` (keeps `pure` and `uses {…}`), `call(name)`, `arg_names()` |
| `Expr` | a `name!(…)` argument: `str()` (source text as written), `src()` (the text, parenthesized unless it is a single term), `kind()` (`"literal"`, `"ident"`, `"path"`, `"call"` or `"other"`), `is_literal()`, `is_ident()` |
| `TypeRef` | `str()`, `head()`, `args()` |
| `Attr` / `AttrArg` | `name`, `args`, `has(key)`, `arg(key, fallback)` |
| `Ident` | `str()`, `src()` |
| `Code` | generated source: `text`, `src()` |
| helpers | `lit(string)`, `lit_int(int)`, `raw(text)`, `ident(name)`, `join(Vec<Code>, sep)`, `concat(Vec<Code>)` |

Because types are as written, a derive cannot ask whether a field's type implements a trait. It emits the call (`self.x.show()`), and the typechecker reports a missing instance at the `#[derive]`.

## At compile time

- A macro runs in the VM with **no host access**: IO, files, network, environment, clocks, threads and processes are unavailable. Pure computation (strings, math, `Vec`) works.
- It has a step budget; a runaway macro fails with "step budget exhausted".
- `panic "…"` fails the macro with that message, which is the way to see what a macro received.
- Module statics of the provider are not initialized while macros run.
- A provider is compiled once per `coil` process, and its outputs are reused.

## Seeing the expansion

- `coil dissect --expand FILE` prints the file after every macro expanded.
- The language server offers **Expand macros in this file** on attribute lines and `name!(…)` lines.
- A diagnostic in generated code points at the macro's use site. Its help shows the generated line: `in code generated by macro square!: …`.
