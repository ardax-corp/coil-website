---
slug: "stdlib/timer/Interval"
package: "stdlib"
title: "Interval"
description: "A periodic timer: tick suspends until the next period. Periods are counted from the start, so a slow loop body does not make the timer drift; a tick that is already late returns at once and skips the periods it missed."
module: "timer"
kind: "class"
name: "Interval"
signature: "shared class Interval"
import: "use timer::{Interval};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/timer.hy#L48"
order: 0
---

A periodic timer: [`tick`](/packages/stdlib/reference/timer/Interval/tick) suspends until the next period. Periods are counted from the start, so a slow loop body does not make the timer drift; a tick that is already late returns at once and skips the periods it missed.

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/stdlib/reference/timer/Interval/new) | A timer firing every `ms` milliseconds (at least 1), starting now. |

## Methods

| Name | Description |
|------|-------------|
| [`tick`](/packages/stdlib/reference/timer/Interval/tick) | Waits for the next period and returns its number: 1 for the first tick, larger by more than 1 when periods were skipped. |
| [`period`](/packages/stdlib/reference/timer/Interval/period) | The period in milliseconds. |

## Examples

```coil
use timer::{Interval};
use tests::assert;
let every = Interval::new(1);
let a = every.tick();
let b = every.tick();
assert!(b > a);
```

## See also

- [`Interval::tick`](/packages/stdlib/reference/timer/Interval/tick)
