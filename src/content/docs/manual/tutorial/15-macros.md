---
title: Chapter 15 — Macros
description: "Code that writes code: function-style macros name!(…), attribute macros #[name(…)] and derives #[derive(Name)], how to see what they generate, and which kind to use."
---

# Chapter 15 — Macros

A macro is ordinary Coil that runs while your program compiles and returns
code. The compiler pastes that code into your program and checks it like
code you wrote by hand. There are three kinds:

| Kind | You write | It can |
|------|-----------|--------|
| Function-style macro | `name!(…)` | expand into an expression, statements or declarations |
| Attribute macro | `#[name(…)]` above a function, method, class or enum | replace or wrap that item |
| Derive | `#[derive(Name)]` above a class or enum | add code generated from its fields or cases |

The built-in `#[derive(Show, Eq, …)]` from chapter 4 are derives. This
chapter writes one macro of each kind, then shows how to look at what they
generate. Reach for a macro only when a function cannot do the job; the
last section helps decide.

## A provider module

Macros live in a module of their own, here `src/my_macros.coil`, and other
modules import them with `use` like any other item. (A module cannot use
the macros it declares.) The provider imports the `macro` module, which
describes the code a macro receives (`Expr`, `FnDecl`, `TypeDecl`) and
returns (`Code`):

```coil file=src/my_macros.coil
use macro::{Expr, FnDecl, TypeDecl, Code, lit, raw};
use io::sync::{println};
```

## Function-style macros

A function-style macro is declared with `macro`. Each parameter receives one
argument of the call as code (`Expr`), and the macro returns `Code`:

```coil file=src/my_macros.coil
/// `square!(e)`: `e * e`.
macro square(Expr e) -> Code {
    return quote expr { ${e} * ${e} };
}
```

`quote expr { … }` is a **template**: Coil source with holes, and `${e}`
pastes the argument in. Arguments stay whole, so `square!(1 + 2)` becomes
`(1 + 2) * (1 + 2)`, which is 9 and not 5. The word after `quote` says what
the template holds: `expr` (one expression), `stmts` (statements) or
`items` (declarations).

A macro called as a statement expands to statements. This one does
something no function can: it puts the condition's source text in its
error message. `cond.str()` is that text, and `lit(…)` turns a string into a
string literal:

```coil file=src/my_macros.coil
/// `check!(cond)`: panics with the condition as written when it is false.
macro check(Expr cond) -> Code {
    return quote stmts {
        if !${cond} {
            panic "check failed: " + ${lit(cond.str())};
        }
    };
}

/// `swap!(a, b)`: exchanges two variables.
macro swap(Expr a, Expr b) -> Code {
    return quote stmts {
        let tmp = ${a};
        ${a} = ${b};
        ${b} = tmp;
    };
}
```

`swap!` declares a `tmp` of its own. Variables a template declares are
renamed behind the scenes (to `tmp__m`), so they never clash with the
caller's variables, even one called `tmp`.

A last parameter of type `Vec<Expr>` takes any number of arguments, and
`$(parts)&&*` pastes a list with `&&` between the elements. The macro body
is ordinary Coil, with loops, conditions and strings:

```coil file=src/my_macros.coil
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

Called at the top level of a file, a macro produces declarations:

```coil file=src/my_macros.coil
/// `id_type!(Name)`: a class wrapping one `int`, with `==` and `show`.
macro id_type(Expr name) -> Code {
    return quote items {
        #[derive(Eq, Show)]
        class ${name} {
            pub value: int,
        }
    };
}
```

## Attribute macros

An attribute macro is declared with `attr`. Its first parameter is the item
it sits on: a `FnDecl` for a function, a `TypeDecl` for a class or enum.
Further parameters are the attribute's arguments (`string`, `int` or
`bool`). The output **replaces** the item, so to keep the original, emit it
again.

`#[trace(label = "…")]` prints a line before and after the function runs.
It renames the original function and generates a wrapper with the original
name:

```coil file=src/my_macros.coil
/// Prints a line; generated code calls it as `my_macros::say`.
fn say(string text) {
    let _ = println(text);
}

/// Prints a line before the function runs and after it returns.
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

`f.with_name(inner)` is the whole function under a new name,
`f.signature(name)` its parameters and return type, and `f.call(inner)` a
call passing the same arguments. The wrapper calls `say`, which the code
using `#[trace]` never imports: generated code may use its provider's own
items.

On a class, `t.source` is the declaration as written. Emitting it keeps the
class, and the rest of the output adds to it:

```coil file=src/my_macros.coil
/// Keeps the class and adds `T::table()`.
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

## Derives

A derive is declared with `derive`. It takes one `TypeDecl` and returns code
to add after the type, which stays as written. Derives generate code from a
type's shape: `t.fields()` lists a class's fields, and `t.variants()` an
enum's cases.

A derive can also own **field attributes**. `attrs(column)` lets users write
`#[column(…)]` on a field, and `f.attr_str(…)` reads it:

```coil file=src/my_macros.coil
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

Most derives implement a trait. The trait can live next to its derive under
the same name:

```coil file=src/my_macros.coil
/// Implemented by `#[derive(Describe)]`.
trait Describe<T> {
    fn describe(T value) -> string {}
}

/// `impl Describe for T`: `Name(field=value, …)`.
derive Describe(TypeDecl t) -> Code {
    let parts: Vec<Code> = Vec::new();
    let sep = "";
    for f in t.fields() {
        parts.push(quote expr { ${lit(sep + f.name.str() + "=")} + show(value.${f.name}) });
        sep = ", ";
    }
    return quote items {
        impl Describe for ${t.name} {
            pub fn describe(${t.name} value) -> string {
                return ${lit(t.name.str() + "(")} + $(parts)+* + ")";
            }
        }
    };
}
```

A macro sees types as written, not their meaning, so `Describe` cannot ask
whether a field is printable. It emits `show(…)` anyway; a field without
`Show` is reported at the `#[derive]` line.

## Using them

```coil file=src/main.coil
use io::sync::{println};
use string::{format};
use my_macros::{square, check, swap, all, id_type, trace, table, Columns, Describe};

id_type!(UserId);

#[trace(label = "math")]
fn add(int a, int b) -> int {
    return a + b;
}

#[table(name = "accounts")]
class Account {
    pub id: int,
}

#[derive(Columns, Describe)]
class User {
    pub id: int,
    #[column(name = "user_name")]
    pub name: string,
    pub active: bool,
}

fn main() {
    let x = square!(1 + 2);
    check!(x == 9);

    let a = 1;
    let tmp = 2;
    swap!(a, tmp);                    // the macro's own `tmp` does not clash

    let ok = all!(x > 0, a == 2, tmp == 1);
    let same = new UserId(7) == new UserId(7);
    println(format("%i %i %i %z %z", x, a, tmp, ok, same))?;

    let n = add(2, 3);
    let cols = User::columns();
    println(format("%i %s %s", n, Account::table(), cols[1]))?;
    println(new User(1, "ada", true).describe())?;
}
```

Output:

```text
9 2 1 true true
[math] enter add
[math] leave add
5 accounts user_name
User(id=1, name=ada, active=true)
```

Changing the check to `check!(x < 5)` stops the program with
`panic: check failed: x < 5`. A field attribute that no derive on the type
owns is an error, so a typo such as `#[colum(…)]` is caught.

## Seeing the generated code

`coil dissect --expand FILE` prints a file with every macro expanded:

```bash
coil dissect --expand --root ~/coil-stdlib/src src/main.coil
```

```coil ignore
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

In an editor, the language server offers *Expand macros in this file* on
attribute and `name!(…)` lines.

Generated code is checked like your own, and errors in it point at the
place the macro was used:

```text
Error: [E0102] cannot apply `*` to operands of type `string`
 3 │     let s = square!("a");
```

A macro has no standard output; to see what it received, `panic` with it:
`panic "got: " + e.str();`. Macros run with no access to files, network or
environment unless the build grants it, and with a step budget, so a
runaway loop fails the build instead of hanging it. See
[compile-time code](/docs/language/comptime) for those grants and for
`comptime` blocks, which run code at compile time without a macro.

## Which one to use

| You want to | Use |
|-------------|-----|
| Generate code from a type's fields or cases (trait implementations, serializers) | a derive |
| Let users tune that per field (`#[column(name = …)]`) | a derive with `attrs(…)` |
| Wrap or change a function or type (logging, timing, registration) | an attribute macro |
| Use an expression's source text, declare variables at the call site, or take any number of arguments | a function-style macro |
| Compute a value from values | a plain function |

Two cautions. A macro's arguments are code, so `square!(next_id())` calls
`next_id` twice; bind an argument with `let` in the output if it may have
side effects. And an attribute macro that forgets to emit `t.source` or the
renamed function deletes the item it was meant to decorate.

## Henry's challenges

> [!henry]
> My shell builds itself from a pattern, chamber after chamber. Macros are
> patterns that build code. Add these to `src/my_macros.coil` and use them
> from `src/main.coil`.

1. Write `check_eq!(a, b)` that evaluates each side once and panics with
   both sides as written and their values, such as
   `check failed: x + 1 == 3 (2 vs 3)`.

   > [!hint]
   > Pasting `${a}` twice evaluates it twice. Bind each side with `let`
   > inside a `quote stmts { … }`; the template's own variables are renamed,
   > so they cannot clash with the caller's. `a.str()` is the source text
   > and `show(left)` the value.

   ```coil challenge=c15-1 file=src/my_macros.coil
   use macro::{Expr, Code, lit, raw};

   /// `check!(cond)`: panics with the condition as written when it is false.
   macro check(Expr cond) -> Code {
       return quote stmts {
           if !${cond} {
               panic "check failed: " + ${lit(cond.str())};
           }
       };
   }

   // check_eq!(a, b) goes here.
   ```

   ```coil challenge=c15-1 file=src/main.coil
   use io::sync::{println};
   use my_macros::{check, check_eq};

   fn main() {
       let x = 1;
       check_eq!(x + 2, 3);
       println("first check passed")?;
       check_eq!(x + 1, 3);
   }
   ```

   ```text expect=c15-1 stream=stderr match=contains
   check failed: x + 1 == 3 (2 vs 3)
   ```

2. Write `#[derive(FieldCount)]` adding `static fn field_count() -> int`.

   > [!hint]
   > `t.fields().len()` is an `int` while the macro runs, and the generated
   > code needs it as a literal. `lit_int` turns an `int` into code, the
   > way `lit` does for strings; add it to the provider's `use macro::{…}`
   > line.

   ```coil challenge=c15-2 file=src/my_macros.coil
   use macro::{TypeDecl, Code, lit, raw};

   // derive FieldCount goes here.
   ```

   ```coil challenge=c15-2 file=src/main.coil
   use io::sync::{println};
   use string::{format};
   use my_macros::{FieldCount};

   #[derive(FieldCount)]
   class User {
       pub id: int,
       pub name: string,
       pub active: bool,
   }

   #[derive(FieldCount)]
   class Point {
       pub x: int,
       pub y: int,
   }

   fn main() {
       println(format("User %i, Point %i", User::field_count(), Point::field_count()))?;
   }
   ```

   ```text expect=c15-2
   User 3, Point 2
   ```

3. Make `Columns` leave out fields marked `#[column(skip = true)]`.

   > [!hint]
   > `attr_str` reads any key as text, with a fallback when it is missing:
   > `f.attr_str("column", "skip", "false") == "true"`.

   ```coil challenge=c15-3 file=src/my_macros.coil
   use macro::{TypeDecl, Code, lit, raw};

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

   ```coil challenge=c15-3 file=src/main.coil
   use io::sync::{println};
   use string::{format};
   use my_macros::{Columns};

   #[derive(Columns)]
   class User {
       pub id: int,
       #[column(name = "user_name")]
       pub name: string,
       #[column(skip = true)]
       pub password: string,
       pub active: bool,
   }

   fn main() {
       println(format("%v", User::columns()))?;
   }
   ```

   ```text expect=c15-3
   [id, user_name, active]
   ```

4. Check something: give your program a `static let calls = 0;` and a
   `next_id()` function that adds one to it and returns it. What do
   `square!(next_id())` and `calls` come out as? Would a plain function do
   better here?

   ```coil challenge=c15-4 file=src/main.coil
   use io::sync::{println};
   use string::{format};
   use my_macros::{square};

   static let calls = 0;

   fn next_id() -> int {
       calls += 1;
       return calls;
   }

   fn main() {
       let s = square!(next_id());
       println(format("square %i, calls %i", s, calls))?;
   }
   ```

   ```coil challenge=c15-4 file=src/my_macros.coil
   use macro::{Expr, Code};

   /// `square!(e)`: `e * e`.
   macro square(Expr e) -> Code {
       return quote expr { ${e} * ${e} };
   }
   ```

5. Check something: remove `${raw(t.source)}` from the `table` attribute
   macro and build `main.coil` again. What does the compiler report, and why
   does that error point at the `Account` class?

   ```coil challenge=c15-5 file=src/main.coil
   use io::sync::{println};
   use my_macros::{table};

   #[table(name = "accounts")]
   class Account {
       pub id: int,
   }

   fn main() {
       println(Account::table())?;
   }
   ```

   ```coil challenge=c15-5 file=src/my_macros.coil
   use macro::{TypeDecl, Code, lit, raw};

   /// Keeps the class and adds `T::table()`.
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

6. Run `coil dissect --expand` on `main.coil` and find the variable that
   `swap!` declared. What was it renamed to?

The [macros reference](/docs/language/macros) lists every declaration form,
template hole and `macro` module function.

Next: [Chapter 16 — Calling C](/docs/manual/tutorial/16-ffi).
