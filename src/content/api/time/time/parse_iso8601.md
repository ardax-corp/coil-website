---
slug: "time/time/parse_iso8601"
package: "time"
title: "parse_iso8601"
description: "Parse an ISO 8601 date-time, such as 2024-06-08T09:10:11."
module: "time"
kind: "fn"
name: "parse_iso8601"
signature: "fn parse_iso8601(string text) -> Result<Timestamp, TimeError>"
import: "use time::{parse_iso8601};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.hy#L1400"
order: 25
---

Parse an ISO 8601 date-time, such as `2024-06-08T09:10:11`.

Like [`parse_rfc3339`](/packages/time/reference/time/parse_rfc3339), but the zone is optional (no zone means UTC) and an
offset may be written `±HH:MM` or `±HHMM`. A bare date is
[`TimeError::ParseError`](/packages/time/reference/time/TimeError#variant-parseerror); use [`parse_iso8601_date`](/packages/time/reference/time/parse_iso8601_date) for that.

## Parameters

| Name | Type |
|------|------|
| `text` | `string` |

## Returns

`Result<Timestamp, TimeError>`

## Examples

```coil
use time::{parse_iso8601, Timestamp};
use tests::assert;
let a = parse_iso8601("2024-06-08T09:10:11").map(fn (Timestamp t) => t.secs()).unwrap_or(0);
let b = parse_iso8601("2024-06-08T11:10:11+0200").map(fn (Timestamp t) => t.secs()).unwrap_or(1);
assert!(a == b);
```

## See also

- [`time::parse_rfc3339`](/packages/time/reference/time/parse_rfc3339)
- [`time::TimeError`](/packages/time/reference/time/TimeError)
- [`time::parse_iso8601_date`](/packages/time/reference/time/parse_iso8601_date)
- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
