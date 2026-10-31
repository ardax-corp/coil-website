---
slug: "time/time/format"
package: "time"
title: "format"
description: "Format ts (in UTC) with a strftime-style pattern."
module: "time"
kind: "fn"
name: "format"
signature: "fn format(Timestamp ts, string fmt) -> Result<string, TimeError>"
import: "use time::{format};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.hy#L1207"
order: 20
---

Format `ts` (in UTC) with a `strftime`-style pattern.

Directives: `%Y` year (at least four digits, `-` for years before 0),
`%m` month, `%d` day, `%H` hour, `%M` minute, `%S` second (all two digits),
and `%%` for a literal `%`. Every other byte is copied as is. Sub-second
digits are not printed. An unknown directive or a trailing `%` is
[`TimeError::InvalidInput`](/packages/time/reference/time/TimeError#variant-invalidinput). [`ISO8601_DATE`](/packages/time/reference/time/ISO8601_DATE) and [`ISO8601`](/packages/time/reference/time/ISO8601) are ready-made patterns.

## Parameters

| Name | Type |
|------|------|
| `ts` | `Timestamp` |
| `fmt` | `string` |

## Returns

`Result<string, TimeError>`

## Examples

```coil
use time::{format, parse_rfc3339};
use tests::assert;
let ts = match parse_rfc3339("2024-07-04T09:05:00Z") {
    Result::Ok(t) => t,
    Result::Err(_) => panic "parse",
};
assert!((format(ts, "%d/%m/%Y %H:%M (100%%)").ok() ?? "") == "04/07/2024 09:05 (100%)");
```

## See also

- [`time::TimeError`](/packages/time/reference/time/TimeError)
- [`time::ISO8601_DATE`](/packages/time/reference/time/ISO8601_DATE)
- [`time::ISO8601`](/packages/time/reference/time/ISO8601)
- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
