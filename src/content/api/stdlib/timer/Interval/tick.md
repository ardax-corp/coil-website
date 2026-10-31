---
slug: "stdlib/timer/Interval/tick"
package: "stdlib"
title: "Interval::tick"
description: "Waits for the next period and returns its number: 1 for the first tick, larger by more than 1 when periods were skipped."
module: "timer"
kind: "method"
name: "tick"
parent: "Interval"
signature: "pub fn tick() -> int"
import: "use timer::{Interval};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/timer.hy#L66"
order: 1
---

Waits for the next period and returns its number: 1 for the first tick, larger by more than 1 when periods were skipped.

Called on a `Interval` value as `value.tick(…)`.

## Returns

`int`

## See also

- [`Interval`](/packages/stdlib/reference/timer/Interval): A periodic timer: `tick` suspends until the next period.
- [`Interval::new`](/packages/stdlib/reference/timer/Interval/new): A timer firing every `ms` milliseconds (at least 1), starting now.
- [`Interval::period`](/packages/stdlib/reference/timer/Interval/period): The period in milliseconds.
