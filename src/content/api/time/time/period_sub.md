---
slug: "time/time/period_sub"
package: "time"
title: "period_sub"
description: "Field-by-field difference a - b (no normalization)."
module: "time"
kind: "fn"
name: "period_sub"
signature: "fn period_sub(Period a, Period b) -> Result<Period, TimeError>"
import: "use time::{period_sub};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L1039"
order: 15
---

Field-by-field difference `a - b` (no normalization).

Returns [`TimeError::Overflow`](/packages/time/reference/time/TimeError#variant-overflow) when any field overflows.

## Parameters

| Name | Type |
|------|------|
| `a` | `Period` |
| `b` | `Period` |

## Returns

`Result<Period, TimeError>`

## See also

- [`time::TimeError`](/packages/time/reference/time/TimeError)
- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
