---
slug: "time/time/Timestamp/secs"
package: "time"
title: "Timestamp::secs"
description: "Whole seconds since the epoch, rounded toward negative infinity."
module: "time"
kind: "method"
name: "secs"
parent: "Timestamp"
signature: "pub fn secs() -> int"
import: "use time::{Timestamp};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/6234dcab24f4fd5cc26bd37373e7645e3fb0791e/src/time.coil#L1555"
order: 0
---

Whole seconds since the epoch, rounded toward negative infinity.

Called on a `Timestamp` value as `value.secs(…)`.

## Returns

`int`

## See also

- [`Timestamp`](/packages/time/reference/time/Timestamp): A point in time, measured from the Unix epoch (1970-01-01T00:00:00Z, UTC).
- [`Timestamp::millis`](/packages/time/reference/time/Timestamp/millis): Whole milliseconds since the epoch, rounded toward negative infinity.
- [`Timestamp::micros`](/packages/time/reference/time/Timestamp/micros): Whole microseconds since the epoch, rounded toward negative infinity.
- [`Timestamp::nanos`](/packages/time/reference/time/Timestamp/nanos): Nanoseconds since the epoch.
