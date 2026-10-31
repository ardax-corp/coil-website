---
slug: "time/time/parse_iso8601_date"
package: "time"
title: "parse_iso8601_date"
description: "Parse a YYYY-MM-DD date as midnight UTC of that day."
module: "time"
kind: "fn"
name: "parse_iso8601_date"
signature: "fn parse_iso8601_date(string text) -> Result<Timestamp, TimeError>"
import: "use time::{parse_iso8601_date};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.hy#L1423"
order: 27
---

Parse a `YYYY-MM-DD` date as midnight UTC of that day.

Anything else, including a trailing time, is [`TimeError::ParseError`](/packages/time/reference/time/TimeError#variant-parseerror).

## Parameters

| Name | Type |
|------|------|
| `text` | `string` |

## Returns

`Result<Timestamp, TimeError>`

## Examples

```coil
use time::{parse_iso8601_date, Timestamp};
use tests::assert;
assert!(parse_iso8601_date("1970-01-02").map(fn (Timestamp t) => t.secs()).unwrap_or(0) == 86400);
assert!(parse_iso8601_date("2024-01-01T00:00:00Z").is_err());
```

## See also

- [`time::TimeError`](/packages/time/reference/time/TimeError)
- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
