---
slug: "time/time/Timestamp/micros"
package: "time"
title: "Timestamp::micros"
description: "Whole microseconds since the epoch, rounded toward negative infinity."
module: "time"
kind: "method"
name: "micros"
parent: "Timestamp"
signature: "pub fn micros() -> int"
import: "use time::{Timestamp};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.coil#L1565"
order: 2
---

Whole microseconds since the epoch, rounded toward negative infinity.

Called on a `Timestamp` value as `value.micros(…)`.

## Returns

`int`

## See also

- [`Timestamp`](/packages/time/reference/time/Timestamp): A point in time, measured from the Unix epoch (1970-01-01T00:00:00Z, UTC).
- [`Timestamp::secs`](/packages/time/reference/time/Timestamp/secs): Whole seconds since the epoch, rounded toward negative infinity.
- [`Timestamp::millis`](/packages/time/reference/time/Timestamp/millis): Whole milliseconds since the epoch, rounded toward negative infinity.
- [`Timestamp::nanos`](/packages/time/reference/time/Timestamp/nanos): Nanoseconds since the epoch.
