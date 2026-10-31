---
slug: "time/time/Instant"
package: "time"
title: "Instant"
description: "A reading of the process's monotonic clock, for measuring elapsed time."
module: "time"
kind: "class"
name: "Instant"
signature: "class Instant"
import: "use time::{Instant};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L179"
order: 3
---

A reading of the process's monotonic clock, for measuring elapsed time.

The monotonic clock never goes backwards and is not affected by changes to
the wall clock, so use `Instant` (not [`timestamp`](/packages/time/reference/time/fn.timestamp)) to time work. Take one
with [`instant_now`](/packages/time/reference/time/instant_now) and read it with [`elapsed_nanos`](/packages/time/reference/time/Instant/elapsed_nanos) / [`elapsed_millis`](/packages/time/reference/time/Instant/elapsed_millis).
After `drop`, elapsed reads return [`TimeError::InvalidInput`](/packages/time/reference/time/TimeError#variant-invalidinput).

## Methods

| Name | Description |
|------|-------------|
| [`elapsed_nanos`](/packages/time/reference/time/Instant/elapsed_nanos) | Nanoseconds since this reading was taken (never negative). |
| [`elapsed_millis`](/packages/time/reference/time/Instant/elapsed_millis) | Whole milliseconds since this reading was taken. |
| [`is_live`](/packages/time/reference/time/Instant/is_live) | Whether this `Instant` can still be read, that is, `drop` has not been called. |

## Examples

```coil
use time::{instant_now, sleep_ms};
use tests::assert;
let start = instant_now();
sleep_ms(5).unwrap_or(());
assert!(start.elapsed_millis().unwrap_or(0) >= 5);
```

## See also

- [`time::timestamp`](/packages/time/reference/time/fn.timestamp)
- [`time::instant_now`](/packages/time/reference/time/instant_now)
- [`Instant::elapsed_nanos`](/packages/time/reference/time/Instant/elapsed_nanos)
- [`Instant::elapsed_millis`](/packages/time/reference/time/Instant/elapsed_millis)
- [`time::TimeError`](/packages/time/reference/time/TimeError)
- [`Timestamp`](/packages/time/reference/time/Timestamp): A point in time, measured from the Unix epoch (1970-01-01T00:00:00Z, UTC).
- [`Period`](/packages/time/reference/time/Period): An amount of time as nine independent fields, from `years` down to `nanos`.
