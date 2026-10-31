---
slug: "stdlib/timer/Interval/period"
package: "stdlib"
title: "Interval::period"
description: "The period in milliseconds."
module: "timer"
kind: "method"
name: "period"
parent: "Interval"
signature: "pub fn period() -> int"
import: "use timer::{Interval};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/timer.hy#L81"
order: 2
---

The period in milliseconds.

Called on a `Interval` value as `value.period(…)`.

## Returns

`int`

## See also

- [`Interval`](/packages/stdlib/reference/timer/Interval): A periodic timer: `tick` suspends until the next period.
- [`Interval::new`](/packages/stdlib/reference/timer/Interval/new): A timer firing every `ms` milliseconds (at least 1), starting now.
- [`Interval::tick`](/packages/stdlib/reference/timer/Interval/tick): Waits for the next period and returns its number: 1 for the first tick, larger by more than 1 when periods were skipped.
