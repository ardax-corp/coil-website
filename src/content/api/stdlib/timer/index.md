---
slug: "stdlib/timer/index"
package: "stdlib"
title: "timer"
description: "Timers as values over task::sleep and the monotonic clock."
module: "timer"
kind: "module"
name: "timer"
origin: "stdlib"
auto: false
order: 26
---

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use timer::{Interval, sleep_until};
```

## Types

| Name | Description |
|------|-------------|
| [`Interval`](/packages/stdlib/reference/timer/Interval) | A periodic timer: `tick` suspends until the next period. |

## Functions

| Name | Description |
|------|-------------|
| [`sleep_until`](/packages/stdlib/reference/timer/sleep_until) | Suspends the current task until the monotonic clock ([`clock::mono_nanos`](/docs/reference/clock/mono_nanos)) reaches `deadline`; returns at once when it already has. |
