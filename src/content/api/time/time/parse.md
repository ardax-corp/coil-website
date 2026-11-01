---
slug: "time/time/parse"
package: "time"
title: "parse"
description: "Parse text as a UTC time laid out by the pattern fmt."
module: "time"
kind: "fn"
name: "parse"
signature: "fn parse(string text, string fmt) -> Result<Timestamp, TimeError>"
import: "use time::{parse};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.coil#L1250"
order: 21
---

Parse `text` as a UTC time laid out by the pattern `fmt`.

Accepts the same directives as [`format`](/packages/time/reference/time/format). `%Y` reads exactly four digits
(with an optional leading `-`); the others read exactly two. Missing fields
default to 1970-01-01 00:00:00. Literal bytes must match exactly and the whole
of `text` must be consumed. Any mismatch, an unknown directive, or an
impossible date or time is [`TimeError::ParseError`](/packages/time/reference/time/TimeError#variant-parseerror).

## Parameters

| Name | Type |
|------|------|
| `text` | `string` |
| `fmt` | `string` |

## Returns

`Result<Timestamp, TimeError>`

## Examples

```coil
use time::{parse, Timestamp};
use tests::assert;
let secs = parse("2024-01-01 00:00:00", "%Y-%m-%d %H:%M:%S").map(fn (Timestamp t) => t.secs()).unwrap_or(0);
assert!(secs == 1704067200);
assert!(parse("2024-02-30", "%Y-%m-%d").is_err());
```

## See also

- [`time::format`](/packages/time/reference/time/format)
- [`time::TimeError`](/packages/time/reference/time/TimeError)
- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
