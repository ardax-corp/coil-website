---
slug: "time/time/epoch"
package: "time"
title: "epoch"
description: "The Unix epoch, 1970-01-01T00:00:00Z: a Timestamp with every scale at zero."
module: "time"
kind: "fn"
name: "epoch"
signature: "fn epoch() -> Result<Timestamp, TimeError>"
import: "use time::{epoch};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L1150"
order: 19
---

The Unix epoch, 1970-01-01T00:00:00Z: a [`Timestamp`](/packages/time/reference/time/Timestamp) with every scale at zero.

## Returns

`Result<Timestamp, TimeError>`

## Examples

```coil
use time::{epoch, format_rfc3339};
use tests::assert;
let zero = match epoch() {
    Result::Ok(t) => t,
    Result::Err(_) => panic "epoch",
};
assert!((format_rfc3339(zero).ok() ?? "") == "1970-01-01T00:00:00Z");
```

## See also

- [`time::Timestamp`](/packages/time/reference/time/Timestamp)
- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
