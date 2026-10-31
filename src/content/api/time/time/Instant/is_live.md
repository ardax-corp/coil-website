---
slug: "time/time/Instant/is_live"
package: "time"
title: "Instant::is_live"
description: "Whether this Instant can still be read, that is, drop has not been called."
module: "time"
kind: "method"
name: "is_live"
parent: "Instant"
signature: "pub fn is_live() -> bool"
import: "use time::{Instant};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L1646"
order: 2
---

Whether this [`Instant`](/packages/time/reference/time/Instant) can still be read, that is, `drop` has not been called.

Called on a `Instant` value as `value.is_live(…)`.

## Returns

`bool`

## See also

- [`time::Instant`](/packages/time/reference/time/Instant)
- [`Instant::elapsed_nanos`](/packages/time/reference/time/Instant/elapsed_nanos): Nanoseconds since this reading was taken (never negative).
- [`Instant::elapsed_millis`](/packages/time/reference/time/Instant/elapsed_millis): Whole milliseconds since this reading was taken.
