---
slug: "time/time/sub"
package: "time"
title: "sub"
description: "ts moved back by p: add with every field of p negated."
module: "time"
kind: "fn"
name: "sub"
signature: "fn sub(Timestamp ts, Period p) -> Result<Timestamp, TimeError>"
import: "use time::{sub};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.coil#L1010"
order: 13
---

`ts` moved back by `p`: [`add`](/packages/time/reference/time/add) with every field of `p` negated.

Returns [`TimeError::Overflow`](/packages/time/reference/time/TimeError#variant-overflow) when a field cannot be negated or the result
does not fit.

## Parameters

| Name | Type |
|------|------|
| `ts` | `Timestamp` |
| `p` | `Period` |

## Returns

`Result<Timestamp, TimeError>`

## Examples

```coil
use time::{sub, parse_rfc3339, format_rfc3339, period};
use tests::assert;
let day = match period(0, 0, 1, 0, 0, 0, 0, 0, 0) {
    Result::Ok(p) => p,
    Result::Err(_) => panic "period",
};
let mar1 = match parse_rfc3339("2024-03-01T08:00:00Z") {
    Result::Ok(t) => t,
    Result::Err(_) => panic "parse",
};
let prev = match sub(mar1, day) {
    Result::Ok(t) => t,
    Result::Err(_) => panic "sub",
};
assert!((format_rfc3339(prev).ok() ?? "") == "2024-02-29T08:00:00Z");
```

## See also

- [`time::add`](/packages/time/reference/time/add)
- [`time::TimeError`](/packages/time/reference/time/TimeError)
- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
