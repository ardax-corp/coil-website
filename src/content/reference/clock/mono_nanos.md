---
slug: "clock/mono_nanos"
title: "mono_nanos"
description: "Returns monotonic nanoseconds from a process-local starting point."
module: "clock"
kind: "fn"
name: "mono_nanos"
signature: "fn mono_nanos() -> int"
import: "use clock::{mono_nanos};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/builtin_docs/clock.hy#L34"
order: 1
---

Returns monotonic nanoseconds from a process-local starting point.

The value never goes backwards and is unrelated to wall time: only the
difference between two readings means something.

## Returns

`int`

## Examples

```coil
use clock::{mono_nanos, sleep_ms};
use tests::assert;
let start = mono_nanos();
sleep_ms(5);
let elapsed_ms = (mono_nanos() - start) / 1000000;
assert!(elapsed_ms >= 5);
```

## See also

- [`wall_nanos`](/docs/reference/clock/wall_nanos): Returns the current wall-clock time in nanoseconds since the Unix epoch (UTC).
- [`sleep_ms`](/docs/reference/clock/sleep_ms): Pauses for at least `ms` milliseconds.
