---
slug: "time/time/parse_rfc3339"
package: "time"
title: "parse_rfc3339"
description: "Parse an RFC 3339 date-time, such as 2024-01-01T00:00:00Z."
module: "time"
kind: "fn"
name: "parse_rfc3339"
signature: "fn parse_rfc3339(string text) -> Result<Timestamp, TimeError>"
import: "use time::{parse_rfc3339};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L1374"
order: 23
---

Parse an RFC 3339 date-time, such as `2024-01-01T00:00:00Z`.

Accepts `T` or a space between date and time, an optional fraction of up to
nine digits, and a zone of `Z`, `z` or `±HH:MM`. A missing zone, a
colon-less offset, or any other mismatch is [`TimeError::ParseError`](/packages/time/reference/time/TimeError#variant-parseerror).

## Parameters

| Name | Type |
|------|------|
| `text` | `string` |

## Returns

`Result<Timestamp, TimeError>`

## Examples

```coil
use time::{parse_rfc3339, Timestamp};
use tests::assert;
let ms = parse_rfc3339("2024-01-01T00:00:00.250Z").map(fn (Timestamp t) => t.millis()).unwrap_or(0);
assert!(ms == 1704067200250);
assert!(parse_rfc3339("2024-01-01T00:00:00").is_err());
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
