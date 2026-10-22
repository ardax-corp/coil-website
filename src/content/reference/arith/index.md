---
slug: "arith/index"
title: "arith"
description: "Overflow-aware integer arithmetic: checked, wrapping, saturating and overflowing operations."
module: "arith"
kind: "module"
name: "arith"
origin: "stdlib"
auto: false
order: 17
---

Plain `+`, `-`, `*` and `**` on [`int`](/docs/reference/types/int) panic when the result does not fit. Import one of these traits to say what should happen instead: [`Checked`](/docs/reference/arith/Checked) gives an [`Option`](/docs/reference/prelude/Option), [`Wrapping`](/docs/reference/arith/Wrapping) wraps modulo 2^64, [`Saturating`](/docs/reference/arith/Saturating) clamps, and [`Overflowing`](/docs/reference/arith/Overflowing) returns the wrapped value with a flag.

```coil
use arith::{Checked, Wrapping};
use tests::{assert};

fn main() {
    assert!(9223372036854775807.checked_add(1).is_none());
    assert!(31.wrapping_pow(20) != 0);
}
```

Part of [coil-stdlib](/packages/stdlib). spool projects get it automatically; with plain `coil`, pass `--root ~/.coil/stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use arith::{Checked, Wrapping};
```

## Traits

| Name | Description |
|------|-------------|
| [`Checked`](/docs/reference/arith/Checked) | Integer arithmetic that returns `None` instead of panicking when the result does not fit. |
| [`Wrapping`](/docs/reference/arith/Wrapping) | Integer arithmetic that wraps around modulo 2^64 instead of panicking. |
| [`Saturating`](/docs/reference/arith/Saturating) | Integer arithmetic that clamps to [`INT_MIN`](/docs/reference/arith/INT_MIN) / [`INT_MAX`](/docs/reference/arith/INT_MAX) instead of panicking. |
| [`Overflowing`](/docs/reference/arith/Overflowing) | Integer arithmetic that returns the wrapped result together with whether it wrapped. |

## Constants

| Name | Description |
|------|-------------|
| [`INT_MAX`](/docs/reference/arith/INT_MAX) | The largest [`int`](/docs/reference/types/int), `9223372036854775807`. |
| [`INT_MIN`](/docs/reference/arith/INT_MIN) | The smallest [`int`](/docs/reference/types/int), `-9223372036854775808`. |
