---
description: "Overflow-aware integer arithmetic: checked, wrapping, saturating and overflowing operations."
---
Plain `+`, `-`, `*` and `**` on `int` panic when the result does not fit. Import one of these traits to say what should happen instead: `Checked` gives an `Option`, `Wrapping` wraps modulo 2^64, `Saturating` clamps, and `Overflowing` returns the wrapped value with a flag.

```coil
use arith::{Checked, Wrapping};
use tests::{assert};

fn main() {
    assert!(9223372036854775807.checked_add(1).is_none());
    assert!(31.wrapping_pow(20) != 0);
}
```
