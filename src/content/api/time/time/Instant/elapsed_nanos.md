---
slug: "time/time/Instant/elapsed_nanos"
package: "time"
title: "Instant::elapsed_nanos"
description: "Nanoseconds since this reading was taken (never negative)."
module: "time"
kind: "method"
name: "elapsed_nanos"
parent: "Instant"
signature: "pub fn elapsed_nanos() -> Result<int, TimeError>"
import: "use time::{Instant};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L1626"
order: 0
---

Nanoseconds since this reading was taken (never negative).

Returns [`TimeError::InvalidInput`](/packages/time/reference/time/TimeError#variant-invalidinput) after `drop`.

Called on a `Instant` value as `value.elapsed_nanos(…)`.

## Returns

`Result<int, TimeError>`

## See also

- [`time::TimeError`](/packages/time/reference/time/TimeError)
- [`Instant`](/packages/time/reference/time/Instant): A reading of the process's monotonic clock, for measuring elapsed time.
- [`Instant::elapsed_millis`](/packages/time/reference/time/Instant/elapsed_millis): Whole milliseconds since this reading was taken.
- [`Instant::is_live`](/packages/time/reference/time/Instant/is_live): Whether this `Instant` can still be read, that is, `drop` has not been called.
