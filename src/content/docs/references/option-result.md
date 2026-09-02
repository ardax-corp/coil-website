---
title: "`Option` and `Result`"
description: "Pre-registered enums with fixed tags, exported from the virtual prelude module (auto-imported into every file):"
---

# `Option` and `Result`

Pre-registered enums with fixed tags, exported from the virtual `prelude` module (auto-imported into every file):

| Enum | Variants | Tags | Canonical path |
|------|----------|------|----------------|
| `Option` | `None`, `Some(T)` | 0, 1 | `prelude::Option` |
| `Result` | `Ok(T)`, `Err(E)` | 0, 1 | `prelude::Result` |

Canonical constructors are **`Option::Some(…)`**, **`Option::None`**, **`Result::Ok(…)`**, and **`Result::Err(…)`** (`::`). Bare `Some` / `None` / `Ok` / `Err` is prelude sugar when that case name is unique in scope. A user `enum Status { Ok = 200, … }` next to prelude `Result` makes bare `Ok` `E0201` — write `Status::Ok` and `Result::Ok(x)`.

To redefine a prelude type name, first free the short binding (`use prelude::Option as PreludeOption;`) then declare your own.

Use constructors / `match` as usual, plus `raise`, `?`, `??`, and `?.` — see [Tutorial: Error handling](/docs/manual/tutorial/09-error-handling). A `match` catch-all is `default =>`; nested `_` in `Result::Err(_)` remains legal. See [Syntax — Patterns](/docs/references/syntax#patterns-match).

`match` **copies** the scrutinee. It does not move a local or a class field. Nested `match` on the same `Option` field is valid, and outer pattern bindings remain visible in the inner arm (an inner name shadows). See [Enums and Match](/docs/manual/tutorial/03-enums-and-match#match-does-not-consume-the-scrutinee).

Runtime layout is an implementation detail (pointer niche, two-slot call return, or boxed enum). User code always uses constructors and `match` / `?` — do not match on raw `0` vs pointer. See [Option / Result runtime ABI](/docs/references/types#option--result-runtime-abi).

---

## Related

- [Error handling tutorial](/docs/manual/tutorial/09-error-handling)
- [Types](/docs/references/types)
