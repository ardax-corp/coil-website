---
title: Modules
description: "How Coil maps files to modules, the use and mod syntax, how an import path is resolved against the search roots, the prelude, and the related errors."
---

# Modules

A module is a `.hy` file. Its path below a search root is its name, and
`use` imports names from it. There are no module declarations, no export
lists and no wildcard imports. For a gentler introduction, see
[chapter 9 of the tutorial](/docs/manual/tutorial/09-modules).

## Module names

The name of a module is its file path relative to the search root it was
found in, without `.hy`, with `/` replaced by `::`:

| File (root `src/`) | Module |
|--------------------|--------|
| `src/money.hy` | `money` |
| `src/store/item.hy` | `store::item` |
| `src/store/item/price.hy` | `store::item::price` |

`store/` and `store.hy` can both exist: `store.hy` is the module `store`,
and the directory holds its submodules.

The entry file, the one passed to `coil` or named in `[entry]` of
`coil.toml`, is the root of the program; it is not imported by other
modules.

## Search roots

Paths are resolved against an ordered list of roots:

1. `src/` under the current working directory, always first;
2. each `--root DIR`, in the order given.

[spool](/packages/spool) passes `--root` for the project's `[module] roots`,
the stdlib, and each dependency's `src/`. When running `coil` yourself, pass
the stdlib with `--root ~/coil-stdlib/src` (or wherever it is checked out).

The compiler's built-in modules (`io`, `string`, `env`, `thread`, `gc`,
`clock`, `ffi`, `macro`, `task`, …) do not live on disk and need no root.
Each is listed in the [reference](/docs/reference#ref-builtin).

## use

```text
use_stmt  ::= 'use' path '::' '{' item (',' item)* ','? '}' ';'
            | 'use' path ('as' IDENT)? ';'
path      ::= IDENT ('::' IDENT)*
item      ::= IDENT ('as' IDENT)?
```

| Form | Imports |
|------|---------|
| `use money::{format_cents};` | `format_cents` from module `money` |
| `use money::{format_cents, CURRENCY};` | several names |
| `use conv::{parse_int as to_int};` | `parse_int`, bound locally as `to_int` |
| `use store::item::Item;` | one name, without braces |
| `use tests::assert;` | a macro (called as `assert!(…)`) |

Any top-level item can be imported: functions, classes, enums, traits,
type aliases, constants, statics and macros. Imports are local to the file;
importing a name in one module does not make it visible in another.

`use path::*;` is always an error (`E0124`). List the names.

### Name conflicts

A local name can be bound by one import only. Importing two different items
under the same name is an error, whether in one `use` or two; rename one
with `as`:

```coil ignore
use json::{parse};
use toml::{parse};              // error E0133: `parse` is imported twice
use toml::{parse as parse_toml}; // fine
```

Importing the same item twice under the same name is allowed.

## How a path is resolved

For `use a::b::{c}`, each root is tried in order, and within a root:

1. `a/b/c.hy`: a module named `a::b::c`, from which `c` is imported;
2. `a/b.hy`: the module `a::b`, which declares `c`.

The first file found wins, and a later root is only consulted when an
earlier one has neither file. Because `src/` comes first, a project module
shadows a stdlib or dependency module of the same name.

| `use` | Files tried (root `src/`) |
|-------|---------------------------|
| `use money::{format_cents}` | `src/money/format_cents.hy`, `src/money.hy` |
| `use store::item::{Item}` | `src/store/item/Item.hy`, `src/store/item.hy` |
| `use io::{open}` | none: `io` is built in |

Avoid keeping an item both in its own file (`a/b/c.hy`) and inside the
module file (`a/b.hy`): the separate file wins.

## mod

`mod name;` loads a module without importing any names from it. Its
functions can then be called with their qualified name:

```coil ignore
mod money;

fn main() {
    let text = money::format_cents(250);
}
```

Prefer `use`, which says exactly which names a file depends on.

## The prelude

Every file starts with the [prelude](/docs/reference/prelude) in scope:
`Option`, `Result`, `Vec`, `Range`, iterators, the operator traits from
[`prelude::ops`](/docs/reference/prelude/ops), and the math functions from
[`prelude::math`](/docs/reference/prelude/math). Nothing else is implicit.

A name you declare or import takes precedence over a prelude function of
the same name; to keep both, import the prelude one under another name
(`use prelude::math::sin as psin;`). To declare your own trait or enum with
a prelude name such as `Eq` or `Option`, first rebind the prelude one:

```coil ignore
use prelude::ops::Eq as PreludeEq;

trait Eq<T> {
    fn same(T a, T b) -> bool;
}
```

`==` keeps using the prelude `Eq`.

## Packages

A package is a directory with modules in `src/`. spool fetches packages
listed in `coil.toml`, links them under `.spool/deps`, and passes each one's
`src/` as a root, so `use json::{Json}` resolves inside the `json` package
exactly as a project module would. The compiler itself never reads
`coil.toml` or `coil.lock`; see [coil.toml](/docs/language/project-config).

## Errors

| Code | When |
|------|------|
| `E0900` | No root has a file for the path: ``Module not found: `use a::b::c` `` |
| `E0100`, `E0101` | The module was found but does not declare the name; reported where the name is used |
| `E0124` | `use path::*` |
| `E0133` | Two imports bind the same local name |

See [error codes](/docs/language/error-codes) for the full list.
