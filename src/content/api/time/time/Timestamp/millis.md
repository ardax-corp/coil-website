---
slug: "time/time/Timestamp/millis"
package: "time"
title: "Timestamp::millis"
description: "Whole milliseconds since the epoch, rounded toward negative infinity."
module: "time"
kind: "method"
name: "millis"
parent: "Timestamp"
signature: "pub fn millis() -> int"
import: "use time::{Timestamp};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L1560"
order: 1
---

Whole milliseconds since the epoch, rounded toward negative infinity.

Called on a `Timestamp` value as `value.millis(…)`.

## Returns

`int`

## See also

- [`Timestamp`](/packages/time/reference/time/Timestamp): A point in time, measured from the Unix epoch (1970-01-01T00:00:00Z, UTC).
- [`Timestamp::secs`](/packages/time/reference/time/Timestamp/secs): Whole seconds since the epoch, rounded toward negative infinity.
- [`Timestamp::micros`](/packages/time/reference/time/Timestamp/micros): Whole microseconds since the epoch, rounded toward negative infinity.
- [`Timestamp::nanos`](/packages/time/reference/time/Timestamp/nanos): Nanoseconds since the epoch.
