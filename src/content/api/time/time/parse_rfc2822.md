---
slug: "time/time/parse_rfc2822"
package: "time"
title: "parse_rfc2822"
description: "Parse an RFC 2822 date, such as Mon, 15 Jan 2024 12:30:00 -0500."
module: "time"
kind: "fn"
name: "parse_rfc2822"
signature: "fn parse_rfc2822(string text) -> Result<Timestamp, TimeError>"
import: "use time::{parse_rfc2822};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.coil#L1531"
order: 30
---

Parse an RFC 2822 date, such as `Mon, 15 Jan 2024 12:30:00 -0500`.

The layout is `Www, DD Mon YYYY HH:MM:SS ZONE` with English three-letter
names; the zone is `GMT`, `UT` or `±HHMM`. A weekday that does not match the
date, or any other mismatch, is [`TimeError::ParseError`](/packages/time/reference/time/TimeError#variant-parseerror).

## Parameters

| Name | Type |
|------|------|
| `text` | `string` |

## Returns

`Result<Timestamp, TimeError>`

## Examples

```coil
use time::{parse_rfc2822, parse_rfc3339, Timestamp};
use tests::assert;
let a = parse_rfc2822("Mon, 15 Jan 2024 12:30:00 -0500").map(fn (Timestamp t) => t.secs()).unwrap_or(0);
let b = parse_rfc3339("2024-01-15T17:30:00Z").map(fn (Timestamp t) => t.secs()).unwrap_or(1);
assert!(a == b);
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
