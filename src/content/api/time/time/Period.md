---
slug: "time/time/Period"
package: "time"
title: "Period"
description: "An amount of time as nine independent fields, from years down to nanos."
module: "time"
kind: "class"
name: "Period"
signature: "class Period"
import: "use time::{Period};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.hy#L151"
order: 2
---

An amount of time as nine independent fields, from [`years`](/packages/time/reference/time/Period/years) down to [`nanos`](/packages/time/reference/time/Period/nanos).

Fields are not normalized: `period(0, 0, 0, 0, 90, 0, 0, 0, 0)` stays ninety
minutes and is not turned into an hour and a half. Any field may be negative.
[`add`](/packages/time/reference/time/add) applies [`years`](/packages/time/reference/time/Period/years) and [`months`](/packages/time/reference/time/Period/months) on the calendar first, then the fixed-length
fields (days and smaller) as an exact number of nanoseconds.

Build one with [`period`](/packages/time/reference/time/fn.period); combine with [`period_add`](/packages/time/reference/time/period_add) / [`period_sub`](/packages/time/reference/time/period_sub).

## Methods

| Name | Description |
|------|-------------|
| [`years`](/packages/time/reference/time/Period/years) | The [`years`](/packages/time/reference/time/Period/years) field. |
| [`months`](/packages/time/reference/time/Period/months) | The [`months`](/packages/time/reference/time/Period/months) field. |
| [`days`](/packages/time/reference/time/Period/days) | The [`days`](/packages/time/reference/time/Period/days) field. |
| [`hours`](/packages/time/reference/time/Period/hours) | The [`hours`](/packages/time/reference/time/Period/hours) field. |
| [`minutes`](/packages/time/reference/time/Period/minutes) | The [`minutes`](/packages/time/reference/time/Period/minutes) field. |
| [`secs`](/packages/time/reference/time/Period/secs) | The [`secs`](/packages/time/reference/time/Period/secs) field. |
| [`millis`](/packages/time/reference/time/Period/millis) | The [`millis`](/packages/time/reference/time/Period/millis) field. |
| [`micros`](/packages/time/reference/time/Period/micros) | The [`micros`](/packages/time/reference/time/Period/micros) field. |
| [`nanos`](/packages/time/reference/time/Period/nanos) | The [`nanos`](/packages/time/reference/time/Period/nanos) field. |

## Examples

```coil
use time::{period, period_add};
use tests::assert;
let day = match period(0, 0, 1, 0, 0, 0, 0, 0, 0) {
    Result::Ok(p) => p,
    Result::Err(_) => panic "period",
};
let hours = match period(0, 0, 0, 6, 0, 0, 0, 0, 0) {
    Result::Ok(p) => p,
    Result::Err(_) => panic "period",
};
let total = match period_add(day, hours) {
    Result::Ok(p) => p,
    Result::Err(_) => panic "period_add",
};
assert!(total.days() == 1 && total.hours() == 6);
```

## See also

- [`Period::years`](/packages/time/reference/time/Period/years)
- [`Period::nanos`](/packages/time/reference/time/Period/nanos)
- [`time::add`](/packages/time/reference/time/add)
- [`Period::months`](/packages/time/reference/time/Period/months)
- [`time::period`](/packages/time/reference/time/fn.period)
- [`time::period_add`](/packages/time/reference/time/period_add)
- [`time::period_sub`](/packages/time/reference/time/period_sub)
- [`Timestamp`](/packages/time/reference/time/Timestamp): A point in time, measured from the Unix epoch (1970-01-01T00:00:00Z, UTC).
