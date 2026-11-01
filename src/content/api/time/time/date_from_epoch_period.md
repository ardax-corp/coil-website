---
slug: "time/time/date_from_epoch_period"
package: "time"
title: "date_from_epoch_period"
description: "The Unix epoch moved forward by p; same as add(epoch, p)."
module: "time"
kind: "fn"
name: "date_from_epoch_period"
signature: "fn date_from_epoch_period(Period p) -> Result<Timestamp, TimeError>"
import: "use time::{date_from_epoch_period};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.coil#L1132"
order: 18
---

The Unix epoch moved forward by `p`; same as `add(epoch, p)`.

## Parameters

| Name | Type |
|------|------|
| `p` | `Period` |

## Returns

`Result<Timestamp, TimeError>`

## Examples

```coil
use time::{date_from_epoch_period, period, Timestamp};
use tests::assert;
let day = match period(0, 0, 1, 0, 0, 0, 0, 0, 0) {
    Result::Ok(p) => p,
    Result::Err(_) => panic "period",
};
let secs = date_from_epoch_period(day).map(fn (Timestamp t) => t.secs()).unwrap_or(0);
assert!(secs == 86400);
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
