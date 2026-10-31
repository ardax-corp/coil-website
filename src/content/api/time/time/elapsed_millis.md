---
slug: "time/time/elapsed_millis"
package: "time"
title: "elapsed_millis"
description: "Whole milliseconds since inst was taken. Same as inst.elapsed_millis()."
module: "time"
kind: "fn"
name: "elapsed_millis"
signature: "fn elapsed_millis(Instant inst) -> Result<int, TimeError>"
import: "use time::{elapsed_millis};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.hy#L930"
order: 10
---

Whole milliseconds since `inst` was taken. Same as `inst.elapsed_millis()`.

Returns [`TimeError::InvalidInput`](/packages/time/reference/time/TimeError#variant-invalidinput) when `inst` was dropped.

## Parameters

| Name | Type |
|------|------|
| `inst` | `Instant` |

## Returns

`Result<int, TimeError>`

## See also

- [`time::TimeError`](/packages/time/reference/time/TimeError)
- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
- [`sub`](/packages/time/reference/time/sub): `ts` moved back by `p`: `add` with every field of `p` negated.
