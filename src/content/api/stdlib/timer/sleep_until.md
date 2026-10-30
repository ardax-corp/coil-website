---
slug: "stdlib/timer/sleep_until"
package: "stdlib"
title: "sleep_until"
description: "Suspends the current task until the monotonic clock (clock::mono_nanos) reaches deadline; returns at once when it already has."
module: "timer"
kind: "fn"
name: "sleep_until"
signature: "fn sleep_until(int deadline)"
import: "use timer::{sleep_until};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/timer.hy#L22"
order: 1
---

Suspends the current task until the monotonic clock ([`clock::mono_nanos`](/docs/reference/clock/mono_nanos)) reaches `deadline`; returns at once when it already has.

## Parameters

| Name | Type |
|------|------|
| `deadline` | `int` |

## Examples

```coil
use timer::{sleep_until};
use clock::{mono_nanos};
use tests::assert;
let deadline = mono_nanos() + 2000000;
sleep_until(deadline);
assert!(mono_nanos() >= deadline);
```

## See also

- [`clock::mono_nanos`](/docs/reference/clock/mono_nanos)
