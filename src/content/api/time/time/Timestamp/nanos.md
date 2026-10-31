---
slug: "time/time/Timestamp/nanos"
package: "time"
title: "Timestamp::nanos"
description: "Nanoseconds since the epoch."
module: "time"
kind: "method"
name: "nanos"
parent: "Timestamp"
signature: "pub fn nanos() -> int"
import: "use time::{Timestamp};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L1570"
order: 3
---

Nanoseconds since the epoch.

Called on a `Timestamp` value as `value.nanos(…)`.

## Returns

`int`

## See also

- [`Timestamp`](/packages/time/reference/time/Timestamp): A point in time, measured from the Unix epoch (1970-01-01T00:00:00Z, UTC).
- [`Timestamp::secs`](/packages/time/reference/time/Timestamp/secs): Whole seconds since the epoch, rounded toward negative infinity.
- [`Timestamp::millis`](/packages/time/reference/time/Timestamp/millis): Whole milliseconds since the epoch, rounded toward negative infinity.
- [`Timestamp::micros`](/packages/time/reference/time/Timestamp/micros): Whole microseconds since the epoch, rounded toward negative infinity.
