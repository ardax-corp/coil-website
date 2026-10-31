---
slug: "time/time/format_rfc2822"
package: "time"
title: "format_rfc2822"
description: "Format ts as an RFC 2822 date in GMT, such as Mon, 01 Jan 2024 00:00:00 GMT."
module: "time"
kind: "fn"
name: "format_rfc2822"
signature: "fn format_rfc2822(Timestamp ts) -> Result<string, TimeError>"
import: "use time::{format_rfc2822};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L1443"
order: 28
---

Format `ts` as an RFC 2822 date in GMT, such as `Mon, 01 Jan 2024 00:00:00 GMT`.

The output is the IMF-fixdate form, so it is the same as [`format_http_date`](/packages/time/reference/time/format_http_date).

## Parameters

| Name | Type |
|------|------|
| `ts` | `Timestamp` |

## Returns

`Result<string, TimeError>`

## Examples

```coil
use time::{format_rfc2822, parse_rfc3339};
use tests::assert;
let ts = match parse_rfc3339("1994-11-06T08:49:37Z") {
    Result::Ok(t) => t,
    Result::Err(_) => panic "parse",
};
assert!((format_rfc2822(ts).ok() ?? "") == "Sun, 06 Nov 1994 08:49:37 GMT");
```

## See also

- [`time::format_http_date`](/packages/time/reference/time/format_http_date)
- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
