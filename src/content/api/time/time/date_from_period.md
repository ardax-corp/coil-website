---
slug: "time/time/date_from_period"
package: "time"
title: "date_from_period"
description: "Midnight UTC of the calendar date p.years()-p.months()-p.days()."
module: "time"
kind: "fn"
name: "date_from_period"
signature: "fn date_from_period(Period p) -> Result<Timestamp, TimeError>"
import: "use time::{date_from_period};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.coil#L1099"
order: 17
---

Midnight UTC of the calendar date `p.years()`-`p.months()`-`p.days()`.

`p` is read as a year, month (1-12) and day (1-31); its smaller fields are
ignored. A zero month or day, a month above 12 or a day past the month's end
is [`TimeError::InvalidInput`](/packages/time/reference/time/TimeError#variant-invalidinput). A negative month or day, or a year outside the
32-bit range, is [`TimeError::Overflow`](/packages/time/reference/time/TimeError#variant-overflow).

## Parameters

| Name | Type |
|------|------|
| `p` | `Period` |

## Returns

`Result<Timestamp, TimeError>`

## Examples

```coil
use time::{date_from_period, period, format_iso8601_date};
use tests::assert;
let leap_day = match period(2024, 2, 29, 0, 0, 0, 0, 0, 0) {
    Result::Ok(p) => p,
    Result::Err(_) => panic "period",
};
let ts = match date_from_period(leap_day) {
    Result::Ok(t) => t,
    Result::Err(_) => panic "date_from_period",
};
assert!((format_iso8601_date(ts).ok() ?? "") == "2024-02-29");
let no_such_day = match period(2023, 2, 29, 0, 0, 0, 0, 0, 0) {
    Result::Ok(p) => p,
    Result::Err(_) => panic "period",
};
assert!(date_from_period(no_such_day).is_err());
```

## See also

- [`time::TimeError`](/packages/time/reference/time/TimeError)
- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
