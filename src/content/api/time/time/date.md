---
slug: "time/time/date"
package: "time"
title: "date"
description: "Today's date: the current wall-clock time truncated to midnight UTC."
module: "time"
kind: "fn"
name: "date"
signature: "fn date() -> Result<Timestamp, TimeError>"
import: "use time::{date};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.hy#L1065"
order: 16
---

Today's date: the current wall-clock time truncated to midnight UTC.

## Returns

`Result<Timestamp, TimeError>`

## Examples

```coil
use time::{date, format};
use tests::assert;
let today = match date() {
    Result::Ok(t) => t,
    Result::Err(_) => panic "date",
};
assert!((format(today, "%H:%M:%S").ok() ?? "") == "00:00:00");
```

## See also

- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
- [`sub`](/packages/time/reference/time/sub): `ts` moved back by `p`: `add` with every field of `p` negated.
