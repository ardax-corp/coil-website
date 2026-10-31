---
slug: "time/time/elapsed_nanos"
package: "time"
title: "elapsed_nanos"
description: "Nanoseconds since inst was taken. Same as inst.elapsed_nanos()."
module: "time"
kind: "fn"
name: "elapsed_nanos"
signature: "fn elapsed_nanos(Instant inst) -> Result<int, TimeError>"
import: "use time::{elapsed_nanos};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L920"
order: 9
---

Nanoseconds since `inst` was taken. Same as `inst.elapsed_nanos()`.

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
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
- [`sub`](/packages/time/reference/time/sub): `ts` moved back by `p`: `add` with every field of `p` negated.
