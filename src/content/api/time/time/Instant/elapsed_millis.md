---
slug: "time/time/Instant/elapsed_millis"
package: "time"
title: "Instant::elapsed_millis"
description: "Whole milliseconds since this reading was taken."
module: "time"
kind: "method"
name: "elapsed_millis"
parent: "Instant"
signature: "pub fn elapsed_millis() -> Result<int, TimeError>"
import: "use time::{Instant};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.coil#L1640"
order: 1
---

Whole milliseconds since this reading was taken.

Returns [`TimeError::InvalidInput`](/packages/time/reference/time/TimeError#variant-invalidinput) after `drop`.

Called on a `Instant` value as `value.elapsed_millis(…)`.

## Returns

`Result<int, TimeError>`

## See also

- [`time::TimeError`](/packages/time/reference/time/TimeError)
- [`Instant`](/packages/time/reference/time/Instant): A reading of the process's monotonic clock, for measuring elapsed time.
- [`Instant::elapsed_nanos`](/packages/time/reference/time/Instant/elapsed_nanos): Nanoseconds since this reading was taken (never negative).
- [`Instant::is_live`](/packages/time/reference/time/Instant/is_live): Whether this `Instant` can still be read, that is, `drop` has not been called.
