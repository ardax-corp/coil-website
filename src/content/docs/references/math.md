---
title: "Math (`sin` / `sqrt` / linear algebra)"
description: "Auto-imported from virtual prelude::math (via inject_prelude_scope — no source use needed). Powers and remainders are the ** and % operators; num::pow is the function form."
---

# Math (`sin` / `sqrt` / linear algebra)

Auto-imported from virtual `prelude::math` (via `inject_prelude_scope` — no source `use` needed). Powers and remainders are the `**` and `%` operators, not functions here.

## Scalar float math

These functions accept and return `float` values:

| Function | Type | Meaning |
|----------|------|---------|
| `sin`, `cos`, `tan` | `float -> float` | Trigonometric functions (radians) |
| `sqrt` | `float -> float` | Square root |
| `floor`, `ceil` | `float -> float` | Round toward negative / positive infinity |
| `exp` | `float -> float` | `e` raised to the argument |
| `ln` | `float -> float` | Natural logarithm |

For powers and remainders use the operators: `a ** b` (on `float`, IEEE
`powf`; on `int`, an overflow or a negative exponent traps) and `a % b` (on
`float`, C `fmod`: the sign follows `a`). `prelude::math::pow` and
`prelude::math::rem` were removed; importing them is an error that names the
operator. A bare `rem(a, b)` or `pow(a, b)` is the `Rem` / `Pow` operator
trait's method, the same as `a % b` / `a ** b`.

When you need a function value, `use num::{pow};` gives:

| Overload | Meaning |
|----------|---------|
| `pow(float, float) -> float` | `a ** b` |
| `pow(int, int) -> int` | Iterative integer power; `exp < 0` returns `0` (unlike `**`, which traps) |

They use Rust `f64` operations through `HostInvoke` and preserve IEEE-754
behavior: for example, `sqrt(-1.0)` and `ln(-1.0)` produce NaN,
`ln(0.0)` produces negative infinity, and overflow produces infinity.
They do not clamp exceptional inputs to `0.0`.

```coil
let radius = sqrt(3.0 ** 2.0 + 4.0 ** 2.0); // 5.0
let wave = sin(3.141592653589793 / 2.0);     // 1.0
let bits = 2 ** 10;                          // 1024
let frac = 7.5 % 2.0;                        // 1.5
```

## Linear algebra

**Named helpers** do **not** overload `*` / `**` on bare tuples or arrays
(those stay element-wise; see [Operators](/docs/references/operators)).

| Helper | Arguments | Result |
|--------|-----------|--------|
| `dot(a, b)` | Equal-length homogeneous numeric vectors (tuple↔tuple or `[T; N]`↔`[T; N]`) | scalar `T` |
| `cross(a, b)` | Length-3 vectors (same container kind) | length-3 vector |
| `matmul(A, B)` | Nested fixed-length matrices: `[[T; K]; M]` × `[[T; N]; K]` | `[[T; N]; M]` (row-major) |
| `matrix(rows)` | Nested fixed-length matrix data | `Matrix<Data>` |

### `Matrix` and `*`

`matrix(...)` wraps nested static rows as a nominal `Matrix<Data>` type
(runtime is still the nested data — zero-cost). On `Matrix`:

| Op | Meaning |
|----|---------|
| `*` | **Matmul** (via `Mul`, not element-wise) |
| `+` / `-` | Element-wise zip |
| `==` `!=` `<` `<=` `>` `>=` | Element-wise compare. Result is a `Matrix` of `byte`: `1` where the test holds, `0` otherwise. A scalar of the cell type broadcasts (`m == 1`). An `int` literal broadcasts onto `byte` cells. |
| `&` `\|` `^` `<<` `>>` `~` | Element-wise bitwise ops on `int` or `byte` cells (not `float`). A scalar broadcasts. A `<<` / `>>` count outside `0..=63` panics with `shift count out of range`. `byte` results stay in `0..=255`. |
| `intersect(a, b)` / `diff(a, b)` | Presence masks. A cell is present when it is not `0` (`NaN` counts as present). `intersect` is `1` where both are present. `diff` is `1` where the left cell is present and the right cell is `0`. Result is a `Matrix` of `byte`. Same shape, no scalar broadcast. |
| `/`, `%`, `**` | **Rejected** — `Matrix` is not `Num` |

```coil
dot((1, 2, 3), (4, 5, 6));           // 32
cross((1, 0, 0), (0, 1, 0));         // (0, 0, 1)
matmul([[1, 2], [3, 4]], [[5, 6], [7, 8]]);  // [[19, 22], [43, 50]]

let a = matrix([[1, 2], [3, 4]]);
let b = matrix([[5, 6], [7, 8]]);
let c = a * b;   // matmul → Matrix
let d = a + a;   // element-wise
let eq = a == b; // Matrix of byte, 1 where cells match
let both = intersect(a, b);
```

See `examples/vec_dot.hy`, `examples/vec_matmul.hy`, `examples/matrix_mul.hy`,
and `examples/matrix_mask.hy`.

Packed kernels (`packed_dot` / `packed_matmul` / matrix zip) run as HostInvoke
natives and use the workspace `coil-simd` crate (stable `std::arch`, runtime
AVX2/NEON dispatch) — see [internals/simd.md](https://github.com/ardax-corp/coil-lang/blob/main/docs/internals/simd.md).

---

## Related

- [Operators](/docs/references/operators)
