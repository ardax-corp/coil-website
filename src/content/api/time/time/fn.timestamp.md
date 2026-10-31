---
slug: "time/time/fn.timestamp"
package: "time"
title: "timestamp"
description: "The current wall-clock time (UTC) as a Timestamp."
module: "time"
kind: "fn"
name: "timestamp"
signature: "fn timestamp() -> Result<Timestamp, TimeError>"
import: "use time::{timestamp};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.coil#L876"
order: 6
---

The current wall-clock time (UTC) as a [`Timestamp`](/packages/time/reference/time/Timestamp).

The wall clock can jump (NTP, manual changes); use [`instant_now`](/packages/time/reference/time/instant_now) to measure
durations.

## Returns

`Result<Timestamp, TimeError>`

## Examples

```coil
use time::{timestamp, Timestamp};
use tests::assert;
let secs = timestamp().map(fn (Timestamp t) => t.secs()).unwrap_or(0);
assert!(secs > 1704067200);
```

## See also

- [`time::Timestamp`](/packages/time/reference/time/Timestamp)
- [`time::instant_now`](/packages/time/reference/time/instant_now)
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
- [`sub`](/packages/time/reference/time/sub): `ts` moved back by `p`: `add` with every field of `p` negated.
