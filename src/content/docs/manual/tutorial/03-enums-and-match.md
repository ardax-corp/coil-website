---
title: Enums and Pattern Matching
description: Enums are a choice among named cases. Payload cases carry unit, tuple, or record data. Scalar-backed cases map to int, string, float, or bool literals. Construct with Enum::Variant and branch with match.
---

# Enums and Pattern Matching

Enums let you define a type as a choice among named cases. **Payload** cases carry no data (unit), positional values (tuple), or named fields (record). **Scalar-backed** cases assign a primitive literal (`Ok = 200`) so the runtime word is that backing while the type stays the enum. You create values with `Enum::Variant` and branch with `match`.

This chapter builds on [Types and Variables](/docs/manual/tutorial/02-types-and-variables). Record-shaped variants and field access are covered in depth in [Records and Fields](/docs/manual/tutorial/04-records-and-fields). Scalar rules are also in [Types — Scalar-backed enums](/docs/references/types#scalar-backed-enums).

---

## Declaring an enum

An enum groups related cases under one type name. For the common “maybe” / “success or failure” shapes, prefer the **compiler-built-in** [`Option` and `Result`](/docs/manual/tutorial/09-error-handling) — do not redeclare those names.

```coil
enum Tree {
    Leaf,
    Node(int, Tree, Tree),
}
```

Each line inside the braces is a **variant**. Payload variants fall into three shapes:

| Shape | Syntax | Example |
|-------|--------|---------|
| **Unit** | name only | `None` |
| **Tuple** | name followed by types in parentheses | `Some(int)` |
| **Record** | name followed by named fields in braces | `Point { x: int, y: int }` |

A fourth shape is **scalar-backed**: `Case = lit` with `#[repr(int|string|float|bool)]` (or inferred from the literals). See [Scalar-backed enums](#scalar-backed-enums). A payload enum can mix unit, tuple, and record ([Mixed-shape enums](#mixed-shape-enums)); it cannot mix those with `=` discriminants.

---

## Constructing values

Canonical constructors are **`Enum::Variant`** (`::`). Language tests and the parser use this form (`Tree::Leaf`, `Option::Some(42)`, `Status::Ok`, `Color::Red`). Dot access (`expr.field`) is a different production.

```coil
Tree::Leaf                // unit variant
Option::Some(42)          // built-in Option — tuple payload
Status::Ok                // scalar-backed case (type Status, word 200)
```

Bare `Some` / `None` / `Ok` / `Err` is prelude sugar only when a single in-scope enum owns that case. Two enums that share a case name make a bare use `E0201` — write `Status::Ok` next to `Result::Ok(1)`.

### Empty parentheses mean unit

`Variant` and `Variant()` are equivalent for unit variants:

```coil
Tree::Leaf
Tree::Leaf()   // same thing
```

### Record-shaped constructors

Record variants use named fields:

```coil
Point::Point { x: 5, y: 12 }
```

Field order at the call site does not have to match the declaration — `Point::Point { y: 12, x: 5 }` is valid. See [Records and Fields](/docs/manual/tutorial/04-records-and-fields) for details.

### Wrapping a class in a tuple variant

A tuple variant may hold a single class (or any other type). Construct with the class instance — do not use record-call syntax unless the variant itself was declared with `{ … }` fields:

```coil
class JsonObject {
    keys: Vec<string>,
    vals: Vec<JsonValue>,
}

enum JsonValue {
    Null,
    Obj(JsonObject),
}

fn wrap(JsonObject o) -> JsonValue {
    return JsonValue::Obj(o);   // tuple construct
}

// Prefer a record variant if you want `JsonValue::Obj { keys, vals }` at call sites:
// enum JsonValue { Obj { keys: Vec<string>, vals: Vec<JsonValue> }, … }
```

---

## `match` expressions

A `match` tests a scrutinee value against a list of patterns and runs the body of the first matching arm:

```coil
match scrutinee {
    pattern1 => body1,
    pattern2 => body2,
}
```

### Pattern forms

| Pattern | Meaning | Example |
|---------|---------|---------|
| **Catch-all** | matches any remaining case | `default` (whole arm only) |
| **Nested wildcard** | discards one payload slot | `Result::Err(_)`, `Some(_)` |
| **Binding** | matches anything, binds the value to a name | `v` |
| **Constructor** | matches a specific variant and binds its payload | `Option::Some(v)`, `Status::Ok` |

Constructor patterns mirror constructor syntax. A unit variant matches by name:

```coil
Option::None => 0
```

A tuple variant binds positional payloads:

```coil
Option::Some(v) => v
```

A record variant binds named fields (with shorthand — see chapter 04):

```coil
Point::Point { x, y } => x * x + y * y
```

### `match` is an expression

Every arm must produce a value, and all arm bodies must have the **same type**. The `match` expression itself evaluates to that unified type:

```coil
fn unwrap(Option o) -> int {
    return match o {
        Option::None => 0,
        Option::Some(v) => v,
    };
}
```

Arm bodies may also be brace blocks. A brace body accepts statements such as
`let`, `return`, `if`, and loops, followed by an optional bare expression whose
value becomes the arm's value:

```coil
Mode::Other(n) => {
    let adjusted = self.get() + n;
    adjusted
}
```

Those braces are a **block**, not a dict — `{ x: 1 }` remains a record literal.

If one arm returns `int` and another returns `string`, the compiler reports a type mismatch on the arm bodies.

Because `match` is an expression, it can appear anywhere a value is expected — in `return`, as a function argument, or on the right-hand side of a `let` binding.

---

## Worked example: built-in `Option`

From `examples/option.hy` (`Option` is a compiler builtin — no local `enum` declaration):

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn unwrap(Option o) -> int {
    return match o {
        Option::None => 0,
        Option::Some(v) => v,
    };
}

fn main() {
    write_all(stdout(), to_bytes(format("%i", unwrap(Option::Some(42)))));
}
```

**Expected output:** `42`

The `match` covers both variants. The `Some(v)` arm binds the inner `int` to `v` and returns it directly.

For `raise` / `?` / `??` / `?.`, see [Error handling](/docs/manual/tutorial/09-error-handling).

---

## Exhaustiveness checking

The compiler requires every `match` on an enum to cover **all variants**. If you omit one, you get a compile-time error:

```
Non-exhaustive match: variants not covered: `Some`
```

Cover every variant, or close the rest with a **`default`** arm. A whole-arm `_ =>` is illegal (`E0216`). Nested `_` in a constructor is still fine (`Result::Err(_)`). `default` and a whole-arm `_` together is also illegal.

```coil
match o {
    Option::None => 0,
    Option::Some(v) => v,
}

// or, with default for the remaining cases:
match o {
    Option::None => 0,
    default => 1,
}
```

### Unreachable arms

Two arms that match the same variant (same outer tag and, when applicable, same inner tag) make the later arm unreachable:

```
Unreachable arm: this pattern is matched by an earlier arm
```

This catches copy-paste mistakes and redundant patterns before they silently dead-code an arm.

---

## Nested constructor patterns

When a variant's payload is itself an enum, you can nest constructor patterns in a single arm:

```coil
Result::Ok(Option::Some(v)) => v
```

This matches a `Result::Ok` whose inner `Option` is `Some`, binding `v` to the inner integer.

### Inner-pattern dispatch

When **multiple arms share the same outer variant** but differ on the inner pattern, the runtime dispatches on the inner tag at match time. From `examples/result.hy`:

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn unwrap_result(Result r) -> int {
    return match r {
        Result::Err(_) => -1,
        Result::Ok(Option::Some(v)) => v,
        Result::Ok(Option::None) => 0,
    };
}

fn main() {
    write_all(stdout(), to_bytes(format("%i", unwrap_result(Result::Ok(Option::Some(42))))));
    write_all(stdout(), to_bytes(format("%i", unwrap_result(Result::Ok(Option::None)))));
    write_all(stdout(), to_bytes(format("%i", unwrap_result(Result::Err("oops")))));
}
```

(`Option` and `Result` are compiler builtins — no local `enum` declarations.)

**Expected output:** `420-1`

| Input | Matching arm | Result |
|-------|-------------|--------|
| `Result::Ok(Option::Some(42))` | `Result::Ok(Option::Some(v))` | `42` |
| `Result::Ok(Option::None)` | `Result::Ok(Option::None)` | `0` |
| `Result::Err("oops")` | `Result::Err(_)` | `-1` |

The two `Result::Ok` arms share the outer tag but differ on the inner `Option` tag. The compiler emits a test chain so the correct arm runs based on the runtime inner value.

---

## `match` does not consume the scrutinee

Matching copies the scrutinee. A class field is read, not taken: the original local or field is still there afterward, so you can match the same `Option` field twice — including nested `match` on `node.left` — without copying it to a `let` first.

Pattern bindings from an outer arm stay in scope in a nested `match`. An inner pattern that reuses the same name shadows the outer one:

```coil
class Node {
    val: int,
    left: Option<Node>,
}

fn left_twice(Node n) -> int {
    return match n.left {
        Option::Some(child) => match n.left {
            Option::Some(child2) => child.val + child2.val,
            Option::None => -1,
        },
        Option::None => 0,
    };
}
```

`child` is still the outer payload; `n.left` is still `Some`. Coil has no use-after-move on `match`.

---

## Recursive enums

Variants can reference their own enum type, enabling tree-like structures. From `examples/tree.hy`:

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
enum Tree {
    Leaf,
    Node(int, Tree, Tree),
}

fn sum_tree(Tree t) -> int {
    return match t {
        Tree::Leaf => 0,
        Tree::Node(v, left, right) => v + sum_tree(left) + sum_tree(right),
    };
}

fn main() {
    write_all(stdout(), to_bytes(format("%i", sum_tree(Tree::Node(1,
                Tree::Node(2, Tree::Leaf(), Tree::Leaf()),
                Tree::Node(3, Tree::Leaf(), Tree::Leaf()))))));
}
```

**Expected output:** `6`

The tree has value `1` at the root, `2` on the left subtree, and `3` on the right. `0 + 2 + 0 + 3 + 0 = 6`. The recursive calls in the `Node` arm walk the structure depth-first.

---

## Mixed-shape enums

A single enum can combine unit, tuple, and record variants. From `examples/mixed.hy`:

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
enum Shape {
    Empty,
    CircleR(int),
    Rect { width: int, height: int },
    Tri { a: int, b: int, c: int },
}

fn area(Shape s) -> int {
    return match s {
        Shape::Empty => 0,
        Shape::CircleR(r) => r * r,
        Shape::Rect { width, height } => width * height,
        Shape::Tri { a, b, c } => (a + b + c) / 3,
    };
}

fn main() {
    write_all(stdout(), to_bytes(format("%i", area(Shape::Empty))));
    write_all(stdout(), to_bytes(format("%i", area(Shape::CircleR(5)))));
    write_all(stdout(), to_bytes(format("%i", area(Shape::Rect { width: 3, height: 4 }))));
    write_all(stdout(), to_bytes(format("%i", area(Shape::Tri { a: 1, b: 2, c: 3 }))));
}
```

**Expected output:** `025122`

| Variant | Shape | Computation | Result |
|---------|-------|-------------|--------|
| `Empty` | unit | constant | `0` |
| `CircleR(5)` | tuple | `5 * 5` | `25` |
| `Rect { width: 3, height: 4 }` | record | `3 * 4` | `12` |
| `Tri { a: 1, b: 2, c: 3 }` | record | `(1 + 2 + 3) / 3` | `2` |

Each arm uses the pattern shape that matches its variant: no payload for `Empty`, a positional binding for `CircleR`, and named field bindings for `Rect` and `Tri`.

---

## Scalar-backed enums

Payload enums are heap-tagged sums. A **scalar-backed** enum is a nominal type whose runtime word is a primitive literal. From `examples/scalar_enum.hy`:

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};

#[repr(int)]
#[derive(Show, Eq, Ord, Hash)]
enum Status {
    Ok = 200,
    NotFound = 404,
}

fn label(Status s) -> string {
    return match s {
        Status::Ok => "ok",
        default => "other",
    };
}

fn main() {
    let s = Status::Ok;
    write_all(stdout(), to_bytes(format("%s %i %v\n", label(s), s, s)));
}
```

**Expected output:** `ok 200 200`

| Rule | What the compiler does |
|------|------------------------|
| Constructor | `Status::Ok` — type `Status`, not prelude `Result::Ok` |
| `=` literal | Required on every scalar case. No auto-increment |
| `#[repr(int\|string\|float\|bool)]` | Pins the backing. Omit it only when every case has `=` and the literals share one type |
| Coerce | In expression position the value **is** the backing: `let n: int = Status::Ok`, `Status::Ok + 1`, pass `Status` to an `int` parameter |
| Reverse | None. Do not write `200 as Status`. Matching `200` against a `Status` scrutinee is a type error |
| `.value` | Does not exist |
| `Show` | Prints the backing (`200`), not `Status::Ok`. `%i` and `%v` both print `200` here |
| `Eq` / `Hash` / `Ord` | On the backing word (`Rank::Low < Rank::High` when `Low = 1` and `High = 10`) |
| `match` | Cases (`Status::Ok`) plus `default`. Exhaustiveness still applies |

The same program can hold `Status::Ok` and `Result::Ok(1)`. Nested `_` still discards a payload:

```coil
let r = Result::Ok(1);
match r {
    Result::Ok(v) => v,
    Result::Err(_) => 0,
}
```

`#[repr(string)]`, `#[repr(float)]`, and `#[repr(bool)]` work the same way (`Mode::Fast = "fast"`, `Ratio::Half = 0.5`, `Switch::On = true`). See `tests/positive/scalar_enums.hy` in coil-lang.

---

## Quick reference

```coil
// Payload declaration
enum E {
    Unit,                    // no payload
    Tuple(int, string),      // positional payloads
    Record { x: int, y: int }, // named fields
}

// Scalar-backed
#[repr(int)]
#[derive(Show, Eq, Ord, Hash)]
enum Status {
    Ok = 200,
    NotFound = 404,
}

// Construction — Enum::Variant
E::Unit
E::Tuple(1, "hi")
E::Record { x: 1, y: 2 }
Status::Ok
let n: int = Status::Ok;     // coerce to backing

// Matching
match value {
    E::Unit => ...,
    E::Tuple(a, b) => ...,
    E::Record { x, y } => ...,
    default => ...,          // catch-all (not whole-arm _)
}

match r {
    Result::Err(_) => ...,   // nested _ is legal
    Result::Ok(v) => ...,
}
```

---

## What's next

- [Records and Fields](/docs/manual/tutorial/04-records-and-fields) — field access (`p.x`), chained access (`o.x.v`), nested record patterns, and the diagnostics that guard record-shaped variants.
- [Types](/docs/references/types#scalar-backed-enums) — scalar coerce, `Show` as the backing word, and payload vs scalar runtime.
- [Aggregates](/docs/manual/tutorial/05-aggregates) — tuples, arrays, and anonymous dicts (`{ foo: 42 }`), which look similar to record variants but are a separate feature.
