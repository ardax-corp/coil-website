---
title: Chapter 9 — Modules and packages
description: "Splitting a program across files, importing with use, how a use path finds its file, and adding other people's packages with spool."
---

# Chapter 9 — Modules and packages

So far every program has been one file. This chapter splits a program into
modules, explains how `use` finds them, and adds a package someone else
wrote.

## Every file is a module

A module is just a `.hy` file. Its name comes from its path below the
project's `src/` directory: `src/geometry.hy` is the module `geometry`, and
`src/geometry/shapes.hy` is `geometry::shapes`. There is nothing to declare.

Here is a small project:

```text
inventory/
├── coil.toml
└── src/
    ├── main.hy
    ├── money.hy
    └── store/
        └── item.hy
```

`src/money.hy` holds a function and a constant:

```coil file=src/money.hy
const CURRENCY = "EUR";

fn format_cents(int cents) -> string {
    return show(cents / 100) + "." + show(cents % 100 / 10) + show(cents % 10) + " " + CURRENCY;
}
```

`src/store/item.hy` holds a class:

```coil file=src/store/item.hy
class Item {
    pub name: string,
    pub price_cents: int,
    pub quantity: int,
}

impl Item {
    pub fn total_cents() -> int {
        return self.price_cents * self.quantity;
    }
}
```

`src/main.hy` imports what it needs from both:

```coil file=src/main.hy
use io::sync::{println};
use money::{format_cents};
use store::item::{Item};

fn main() {
    let lamp = new Item("lamp", 1999, 3);
    println(lamp.name + ": " + format_cents(lamp.total_cents()))?;
}
```

Output:

```text
lamp: 59.97 EUR
```

Run it with `spool run` from the project root, or with
`coil --root ~/.coil/stdlib/src src/main.hy`. The compiler looks for
modules in `src/` under the directory you run it from, plus every `--root`.

## use

`use` brings names from another module into this file. The path names the
module, and the braces list what to import:

```coil ignore
use money::{format_cents, CURRENCY};
use store::item::{Item};
use conv::{parse_int as to_int}; // `as` renames on import
```

Anything declared at the top level of a module can be imported: functions,
classes, enums, traits, constants and type aliases. There is no `use x::*`;
listing the names keeps every file's dependencies visible at its top.

The same rule covers the stdlib and the compiler's built-in modules. `io`,
`string`, `env` and `thread` are built into the compiler, and `text`,
`collections` and `conv` are stdlib source files, but you import from both
the same way. Only the [prelude](/docs/reference/prelude) is available
without a `use`.

## How a path finds its file

For `use store::item::{Item}`, the compiler tries, in each root:

1. `store/item.hy`, a file for the module `store::item`;
2. then `store.hy`, in case `item` is something declared inside the module
   `store`.

The first file that exists wins. Roots are searched in order: `src/`
first, then each `--root` you pass. spool passes the stdlib and each
dependency as roots for you.

If nothing matches, the error names the import:

```text
Error: [E0900] Module not found: `use store::itme::Item`
```

The [modules reference](/docs/language/modules) has the complete rules.

## Organising a project

A few conventions keep projects easy to navigate:

- Group related code by topic (`store/item.hy`, `store/cart.hy`) rather
  than by kind (`classes.hy`, `helpers.hy`).
- Keep `main.hy` small: parse arguments, call into modules, report errors.
- Put tests for `src/store/cart.hy` in `tests/store/cart.hy`. Test files
  import the code they test with `use`, like any other module.
- Name helpers that other modules should not rely on with a leading `__`.
  They can still be imported, but they are left out of generated
  documentation.

## Using a package

A package is a git repository with Coil modules in its `src/`. Add one with
`spool add`:

```bash
spool add json --git https://github.com/ardax-corp/coil-json.git
```

spool records the dependency in `coil.toml` (the newest release tag, or the
latest commit when the package has no releases yet), pins the exact commit
in `coil.lock` and downloads it. The package's modules are then importable
like your own:

```coil ignore
use json::{Json, JsonValue};
```

`spool update` moves dependencies to the newest versions `coil.toml`
allows, and `spool tree` shows what depends on what. The
[packages page](/packages) lists the libraries maintained alongside Coil,
each with its own documentation.

## Writing a library

`spool new mylib --lib` creates a library. Its main module is
`src/mylib.hy`, so users write `use mylib::{…}`. Further modules go in
`src/mylib/` and are imported as `use mylib::parser::{…}`.

Write a `///` comment on everything others will use. The examples in those
comments run as tests (chapter 11), so they double as checked
documentation.

## Henry's challenges

> [!henry]
> My shell is a row of chambers, each sealed off from the next, and a
> project is a row of modules. Work in the `inventory` project from this
> chapter.

1. Move `fizzbuzz` from chapter 1 into `src/fizz.hy` and call it from
   `src/main.hy`.

   ```coil challenge=c09-1 file=src/main.hy
   use io::sync::{println};
   use fizz::{fizzbuzz};

   fn main() {
       for n in 1..=15 {
           println(fizzbuzz(n))?;
       }
   }
   ```

   ```coil challenge=c09-1 file=src/fizz.hy
   // fizzbuzz from chapter 1 goes here.
   ```

   ```text expect=c09-1
   1
   2
   Fizz
   4
   Buzz
   Fizz
   7
   8
   Fizz
   Buzz
   11
   Fizz
   13
   14
   FizzBuzz
   ```

2. Add a `store/cart.hy` module with a `Cart` class that holds a
   `Vec<Item>` and has `add(Item item)` and `total_cents()` methods. Print
   the total of a cart with three lamps and four bulbs through
   `format_cents`.

   > [!hint]
   > `cart.hy` uses `Item`, so it needs its own
   > `use store::item::{Item};`. Imports are per file; the one in
   > `main.hy` does not reach it.

   ```coil challenge=c09-2 file=src/main.hy
   use io::sync::{println};
   use money::{format_cents};
   use store::item::{Item};
   use store::cart::{Cart};

   fn main() {
       let cart = Cart::new();
       cart.add(new Item("lamp", 1999, 3));
       cart.add(new Item("bulb", 250, 4));
       println(format_cents(cart.total_cents()))?;
   }
   ```

   ```coil challenge=c09-2 file=src/store/cart.hy
   // The Cart class goes here.
   ```

   ```coil challenge=c09-2 file=src/money.hy
   const CURRENCY = "EUR";

   fn format_cents(int cents) -> string {
       return show(cents / 100) + "." + show(cents % 100 / 10) + show(cents % 10) + " " + CURRENCY;
   }
   ```

   ```coil challenge=c09-2 file=src/store/item.hy
   class Item {
       pub name: string,
       pub price_cents: int,
       pub quantity: int,
   }

   impl Item {
       pub fn total_cents() -> int {
           return self.price_cents * self.quantity;
       }
   }
   ```

   ```text expect=c09-2
   69.97 EUR
   ```

3. Make two modules that both declare `fn parse(string s) -> int`, import
   both into `main.hy`, and rename them on import with `as` so they do not
   clash.

   ```coil challenge=c09-3 file=src/main.hy
   use io::sync::{println};
   use csvish::{parse};
   use kv::{parse};

   fn main() {
       println(show(parse("a,b,c")))?;
       println(show(parse("a=1")))?;
   }
   ```

   ```coil challenge=c09-3 file=src/csvish.hy
   // How many comma-separated fields.
   fn parse(string s) -> int {
       return s.split(",").len();
   }
   ```

   ```coil challenge=c09-3 file=src/kv.hy
   // The value of a "key=number" pair.
   use conv::{parse_int};

   fn parse(string s) -> int {
       let parts = s.split("=");
       return parse_int(parts[1]).unwrap_or(0);
   }
   ```

4. Check something: what does `format_cents(-150)` print? Fix it so that a
   negative amount comes out as `-1.50 EUR`.

   > [!hint]
   > Division rounds toward zero and the remainder keeps the sign
   > (chapter 2), so `-150 % 100` is `-50` and each digit comes out
   > negative. Handle the sign first, then format the positive amount.

   ```coil challenge=c09-4 file=src/main.hy
   use io::sync::{println};
   use money::{format_cents};

   fn main() {
       println(format_cents(-150))?;
       println(format_cents(150))?;
       println(format_cents(-5))?;
   }
   ```

   ```coil challenge=c09-4 file=src/money.hy
   const CURRENCY = "EUR";

   fn format_cents(int cents) -> string {
       return show(cents / 100) + "." + show(cents % 100 / 10) + show(cents % 10) + " " + CURRENCY;
   }
   ```

   ```text expect=c09-4
   -1.50 EUR
   1.50 EUR
   -0.05 EUR
   ```

5. Check something: misspell a module in a `use` line and read the error.
   Then put `use store::item::{Itme};` with the item name misspelled
   instead. Does the compiler tell the two mistakes apart?

   ```coil challenge=c09-5 file=src/main.hy
   use io::sync::{println};
   use money::{format_cents};
   use store::item::{Itme};

   fn main() {
       println(format_cents(1999))?;
   }
   ```

   ```coil challenge=c09-5 file=src/money.hy
   const CURRENCY = "EUR";

   fn format_cents(int cents) -> string {
       return show(cents / 100) + "." + show(cents % 100 / 10) + show(cents % 10) + " " + CURRENCY;
   }
   ```

   ```coil challenge=c09-5 file=src/store/item.hy
   class Item {
       pub name: string,
       pub price_cents: int,
       pub quantity: int,
   }

   impl Item {
       pub fn total_cents() -> int {
           return self.price_cents * self.quantity;
       }
   }
   ```

Next: [Chapter 10 — Files and input/output](/docs/manual/tutorial/10-files-and-io).
