---
slug: "clock/sleep_ms"
title: "sleep_ms"
description: "Pauses for at least ms milliseconds."
module: "clock"
kind: "fn"
name: "sleep_ms"
signature: "fn sleep_ms(int ms)"
import: "use clock::{sleep_ms};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/clock.coil#L51"
order: 2
---

Pauses for at least `ms` milliseconds.

Zero or a negative value returns at once. Outside a [`task::scope`](/docs/reference/task/fn.scope) this
blocks the thread; inside one it suspends only the calling task, so
other tasks keep running.

## Parameters

| Name | Type |
|------|------|
| `ms` | `int` |

## Examples

```coil
use clock::{sleep_ms, mono_nanos};
use tests::assert;
let start = mono_nanos();
sleep_ms(10);
assert!(mono_nanos() - start >= 10000000);
```

## See also

- [`task::scope`](/docs/reference/task/fn.scope)
- [`wall_nanos`](/docs/reference/clock/wall_nanos): Returns the current wall-clock time in nanoseconds since the Unix epoch (UTC).
- [`mono_nanos`](/docs/reference/clock/mono_nanos): Returns monotonic nanoseconds from a process-local starting point.
