---
slug: "time/time/instant_now"
package: "time"
title: "instant_now"
description: "Take a monotonic clock reading now."
module: "time"
kind: "fn"
name: "instant_now"
signature: "fn instant_now() -> Instant"
import: "use time::{instant_now};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L911"
order: 8
---

Take a monotonic clock reading now.

## Returns

`Instant`

## Examples

```coil
use time::{instant_now, elapsed_nanos};
use tests::assert;
let start = instant_now();
assert!(elapsed_nanos(start).unwrap_or(-1) >= 0);
```

## See also

- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
- [`sub`](/packages/time/reference/time/sub): `ts` moved back by `p`: `add` with every field of `p` negated.
- [`period_add`](/packages/time/reference/time/period_add): Field-by-field sum of two periods (no normalization).
