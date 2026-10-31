---
slug: "time/time/Timestamp"
package: "time"
title: "Timestamp"
description: "A point in time, measured from the Unix epoch (1970-01-01T00:00:00Z, UTC)."
module: "time"
kind: "class"
name: "Timestamp"
signature: "class Timestamp"
import: "use time::{Timestamp};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L116"
order: 1
---

A point in time, measured from the Unix epoch (1970-01-01T00:00:00Z, UTC).

The same instant is available at four scales: [`secs`](/packages/time/reference/time/Timestamp/secs), [`millis`](/packages/time/reference/time/Timestamp/millis), [`micros`](/packages/time/reference/time/Timestamp/micros) and
[`nanos`](/packages/time/reference/time/Timestamp/nanos). Coarser scales round toward negative infinity, so times before the
epoch have negative values. A `Timestamp` has no time zone; formatting and
calendar math are always in UTC.

Get one from [`timestamp`](/packages/time/reference/time/fn.timestamp) (now), [`date`](/packages/time/reference/time/date) (today at midnight), [`epoch`](/packages/time/reference/time/epoch), the
`parse_*` functions, or [`add`](/packages/time/reference/time/add) / [`sub`](/packages/time/reference/time/sub) on another `Timestamp`.

## Methods

| Name | Description |
|------|-------------|
| [`secs`](/packages/time/reference/time/Timestamp/secs) | Whole seconds since the epoch, rounded toward negative infinity. |
| [`millis`](/packages/time/reference/time/Timestamp/millis) | Whole milliseconds since the epoch, rounded toward negative infinity. |
| [`micros`](/packages/time/reference/time/Timestamp/micros) | Whole microseconds since the epoch, rounded toward negative infinity. |
| [`nanos`](/packages/time/reference/time/Timestamp/nanos) | Nanoseconds since the epoch. |

## Examples

```coil
use time::{parse_rfc3339, Timestamp};
use tests::assert;
let secs = parse_rfc3339("2024-01-01T00:00:01.5Z").map(fn (Timestamp t) => t.secs()).unwrap_or(0);
assert!(secs == 1704067201);
let millis = parse_rfc3339("2024-01-01T00:00:01.5Z").map(fn (Timestamp t) => t.millis()).unwrap_or(0);
assert!(millis == 1704067201500);
```

## See also

- [`Timestamp::secs`](/packages/time/reference/time/Timestamp/secs)
- [`Timestamp::millis`](/packages/time/reference/time/Timestamp/millis)
- [`Timestamp::micros`](/packages/time/reference/time/Timestamp/micros)
- [`Timestamp::nanos`](/packages/time/reference/time/Timestamp/nanos)
- [`time::timestamp`](/packages/time/reference/time/fn.timestamp)
- [`time::date`](/packages/time/reference/time/date)
- [`time::epoch`](/packages/time/reference/time/epoch)
- [`time::add`](/packages/time/reference/time/add)
- [`time::sub`](/packages/time/reference/time/sub)
