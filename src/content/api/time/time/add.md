---
slug: "time/time/add"
package: "time"
title: "add"
description: "ts moved forward by p."
module: "time"
kind: "fn"
name: "add"
signature: "fn add(Timestamp ts, Period p) -> Result<Timestamp, TimeError>"
import: "use time::{add};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L981"
order: 12
---

`ts` moved forward by `p`.

`years` and `months` move the calendar date first (UTC), keeping the time of
day; when the day does not exist in the target month it is clamped to the
last day (Jan 31 plus one month is Feb 28 or 29). The remaining fields are
then added as an exact duration. Returns [`TimeError::Overflow`](/packages/time/reference/time/TimeError#variant-overflow) when the
result does not fit.

## Parameters

| Name | Type |
|------|------|
| `ts` | `Timestamp` |
| `p` | `Period` |

## Returns

`Result<Timestamp, TimeError>`

## Examples

```coil
use time::{add, parse_iso8601_date, format_iso8601_date, period};
use tests::assert;
let month = match period(0, 1, 0, 0, 0, 0, 0, 0, 0) {
    Result::Ok(p) => p,
    Result::Err(_) => panic "period",
};
let jan31 = match parse_iso8601_date("2024-01-31") {
    Result::Ok(t) => t,
    Result::Err(_) => panic "parse",
};
let next = match add(jan31, month) {
    Result::Ok(t) => t,
    Result::Err(_) => panic "add",
};
assert!((format_iso8601_date(next).ok() ?? "") == "2024-02-29");
```

## See also

- [`time::TimeError`](/packages/time/reference/time/TimeError)
- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`sub`](/packages/time/reference/time/sub): `ts` moved back by `p`: `add` with every field of `p` negated.
