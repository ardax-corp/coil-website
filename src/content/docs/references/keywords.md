---
title: Keywords reference
description: All reserved words in the coil parser. Keywords cannot be used as identifiers.
---

# Keywords reference

All reserved words in the coil parser. Keywords cannot be used as identifiers.

---

## Keyword index

| Keyword | Category | Brief description | More info |
|---------|----------|-------------------|-----------|
| `fn` | Declaration | Function definition | [Syntax — Functions](/docs/references/syntax#functions) |
| `let` | Statement | Mutable local binding | [Syntax — Statements](/docs/references/syntax#statements) |
| `const` | Statement | Immutable local binding (shallow: heap interiors may still mutate) | [Syntax — Statements](/docs/references/syntax#statements) |
| `static` | Declaration | Module or class singleton slot | [Types — Statics](/docs/references/types#static-slots) |
| `readonly` | Expression | Seal value against external mutation | [Types — Readonly](/docs/references/types#readonly-types) |
| `if` | Statement | Conditional | [Syntax — Statements](/docs/references/syntax#statements) |
| `else` | Statement | Alternative branch | [Syntax — Statements](/docs/references/syntax#statements) |
| `while` | Statement | Loop while condition true | [Syntax — Statements](/docs/references/syntax#statements) |
| `for` | Statement | C-style `for (…)` or iterator `for x in expr` | [Syntax — Statements](/docs/references/syntax#statements) |
| `in` | Statement | For-in separator (`for x in expr` via `IntoIterator`) | [Built-ins — Iterator](/docs/references/iterator) |
| `break` | Statement | Exit innermost loop | [Syntax — Statements](/docs/references/syntax#statements) |
| `continue` | Statement | Next iteration of innermost loop | [Syntax — Statements](/docs/references/syntax#statements) |
| `return` | Statement | Exit function with value | [Syntax — Statements](/docs/references/syntax#statements) |
| `raise` | Expression / stmt | Early-return `Err(e)` (result mode) | [Tutorial: Error handling](/docs/manual/tutorial/09-error-handling) |
| `panic` | Expression / stmt | Abort with a string message | [Built-ins](/docs/references/panic) |
| `typeof` | Expression | Compile-time fully-qualified type name as `string` | [Types — typeof](/docs/references/types#typeof) |
| `enum` | Declaration | Sum type definition | [Types — Sum types](/docs/references/types#sum-types--enums-tysum) |
| `match` | Expression | Pattern match | [Syntax — Patterns](/docs/references/syntax#patterns-match) |
| `default` | Pattern | Match catch-all arm (`default => …` only; not interchangeable with whole-arm `_`) | [Syntax — Patterns](/docs/references/syntax#patterns-match) |
| `type` | Declaration | Type alias | [Types — Aliases](/docs/references/types#type-aliases-type-name--t) |
| `use` | Declaration | Import module item | [Modules](/docs/references/modules) |
| `as` | Import | Rename imported item | [Modules](/docs/references/modules#aliasing-rules) |
| `mod` | Declaration | Forward-declare / load module | [Modules](/docs/references/modules) |
| `extern` | Declaration | FFI library block | [FFI tutorial](/docs/manual/tutorial/07-ffi) |
| `class` | Declaration | Class with fields | [Syntax — Classes](/docs/references/syntax#classes-and-impl) |
| `impl` | Declaration | Class methods or trait instances (`impl Trait for T`) | [Syntax — Classes](/docs/references/syntax#classes-and-impl) / [Types — Traits](/docs/references/types#generics-and-traits) |
| `pub` | Modifier | Public field or method | [Syntax — Classes](/docs/references/syntax#classes-and-impl) |
| `new` | Expression | Construct class instance | [Syntax — Expressions](/docs/references/syntax#atoms-primary-forms) |
| `defer` | Declaration | Run block on function exit (`defer use (x) { … }` captures outer locals) | [Syntax — Defer](/docs/references/syntax#defer) |
| `true` | Literal | Boolean true | [Types — Primitives](/docs/references/types#primitive-types) |
| `false` | Literal | Boolean false | [Types — Primitives](/docs/references/types#primitive-types) |
| `dload` / `declare` / `invoke` | Ordinary names | FFI callables from virtual `ffi` (not keywords) | [Built-ins — FFI](/docs/references/ffi) |
| `async` | Declaration | Coroutine function (`coroutine<Y>` / `coroutine<Y, S>`) | [Tutorial: Coroutines](/docs/manual/tutorial/08-coroutines) |
| `yield` | Expression / stmt | Suspend coroutine; optional receive binding | [Tutorial: Coroutines](/docs/manual/tutorial/08-coroutines) |
| `yield from` | Expression / stmt | Delegate to sub-coroutine | [Tutorial: Coroutines](/docs/manual/tutorial/08-coroutines) |
| `resume` | Expression | Continue coroutine handle | [Tutorial: Coroutines](/docs/manual/tutorial/08-coroutines) |
| `with` | Resume modifier | Send value on resume (`resume h with v`) | [Tutorial: Coroutines](/docs/manual/tutorial/08-coroutines) |
| `where` | Declaration | Constraint clause on generic functions | [Types — Generics](/docs/references/types#generics-and-traits) |
| `trait` | Declaration | User-defined trait | [Types — Generics](/docs/references/types#generics-and-traits) |

---

## Declaration keywords

```
fn | enum | type | trait | use | mod | extern | class | impl | defer | async | where | attr
```

Attributes (`#[derive(...)]`, `#[test]`, `#[ffi(...)]`, `#[max_depth(N)]`, user `#[name(...)]`) are not keywords — see [Syntax — Attributes](/docs/references/syntax#attributes).

Registered in the top-level `declaration()` parser before generic statements so keywords like `enum` are not misparsed as `let`.

---

## Statement keywords

```
let | const | if | else | while | for | break | continue | return | raise | panic
```

Appear inside `{ ... }` blocks via `statement()`.

---

## Expression / literal keywords

```
match | new | true | false | yield | resume | done | raise | panic | typeof
```

Parsed as **atoms** before the generic `ident()` rule so they are never treated as variable names.

---

## Pattern keywords

```
default
```

Maps to `Pattern::Default`. Whole-arm `_` is `E0216`; nested `_` is still `Pattern::Wildcard` inside payloads.

---

## Modifier keywords

```
pub
```

Optional prefix on class fields and `impl` methods. Default visibility is private.

---

## Reserved words (not keywords today)

These tokens are **not** in the parser keyword set. Using them as identifiers may work today but is discouraged — they may become keywords:

| Word | Notes |
|------|-------|
| `struct` | FFI `extern struct` only; otherwise use `class` or record dicts |

`import` is not a keyword and will not be added. Module binding is `use` only ([limitations.md](https://github.com/ardax-corp/coil-lang/blob/main/docs/internals/limitations.md) COI-73).

`case` is not a keyword and will not be added. Pattern matching is `match` only ([limitations.md](https://github.com/ardax-corp/coil-lang/blob/main/docs/internals/limitations.md) COI-74).

---

## Keywords vs builtins

| Kind | Examples | Callable as `name(...)`? |
|------|----------|------------------------|
| Statement keyword | `return` | No — statement form only |
| Virtual-module export | `format` (via `use string::format`), `dload`, `declare`, `invoke` (via `use ffi::{dload, declare, invoke}`) | Yes as identifiers — not reserved keywords |
| Declaration keyword | `fn`, `enum` | No |

---

## Related documents

| Document | Contents |
|----------|----------|
| [Syntax](/docs/references/syntax) | Grammar using these keywords |
| [Built-ins](/docs/references) | virtual modules and builtin functions |
| [Operators](/docs/references/operators) | Non-keyword operators |
