---
slug: "stdlib/timer/Interval/new"
package: "stdlib"
title: "Interval::new"
description: "A timer firing every ms milliseconds (at least 1), starting now."
module: "timer"
kind: "static method"
name: "new"
parent: "Interval"
signature: "pub static fn new(int ms) -> Interval"
import: "use timer::{Interval};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/timer.coil#L56"
order: 0
---

A timer firing every `ms` milliseconds (at least 1), starting now.

## Parameters

| Name | Type |
|------|------|
| `ms` | `int` |

## Returns

`Interval`

## See also

- [`Interval`](/packages/stdlib/reference/timer/Interval): A periodic timer: `tick` suspends until the next period.
- [`Interval::tick`](/packages/stdlib/reference/timer/Interval/tick): Waits for the next period and returns its number: 1 for the first tick, larger by more than 1 when periods were skipped.
- [`Interval::period`](/packages/stdlib/reference/timer/Interval/period): The period in milliseconds.
