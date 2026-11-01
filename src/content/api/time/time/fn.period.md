---
slug: "time/time/fn.period"
package: "time"
title: "period"
description: "Build a Period from its nine fields, largest first."
module: "time"
kind: "fn"
name: "period"
signature: "fn period(int years, int months, int days, int hours, int minutes, int secs, int millis, int micros, int nanos) -> Result<Period, TimeError>"
import: "use time::{period};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.coil#L950"
order: 11
---

Build a [`Period`](/packages/time/reference/time/Period) from its nine fields, largest first.

Fields are stored as given (no normalization, negatives allowed). It always
returns `Ok` today; the [`Result`](/docs/reference/prelude/Result) leaves room for validation.

## Parameters

| Name | Type |
|------|------|
| `years` | `int` |
| `months` | `int` |
| `days` | `int` |
| `hours` | `int` |
| `minutes` | `int` |
| `secs` | `int` |
| `millis` | `int` |
| `micros` | `int` |
| `nanos` | `int` |

## Returns

`Result<Period, TimeError>`

## Examples

```coil
use time::{period, Period};
use tests::assert;
let p = period(1, 2, 3, 0, 0, 0, 0, 0, 0);
assert!(p.map(fn (Period p) => p.years() == 1 && p.months() == 2 && p.days() == 3).unwrap_or(false));
```

## See also

- [`time::Period`](/packages/time/reference/time/Period)
- [`Result`](/docs/reference/prelude/Result)
- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
