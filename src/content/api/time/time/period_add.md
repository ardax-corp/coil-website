---
slug: "time/time/period_add"
package: "time"
title: "period_add"
description: "Field-by-field sum of two periods (no normalization)."
module: "time"
kind: "fn"
name: "period_add"
signature: "fn period_add(Period a, Period b) -> Result<Period, TimeError>"
import: "use time::{period_add};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.hy#L1019"
order: 14
---

Field-by-field sum of two periods (no normalization).

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
