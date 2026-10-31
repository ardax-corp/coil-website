---
slug: "time/time/format_http_date"
package: "time"
title: "format_http_date"
description: "Format ts as an HTTP date (IMF-fixdate), such as Sun, 06 Nov 1994 08:49:37 GMT."
module: "time"
kind: "fn"
name: "format_http_date"
signature: "fn format_http_date(Timestamp ts) -> Result<string, TimeError>"
import: "use time::{format_http_date};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L1450"
order: 29
---

Format `ts` as an HTTP date (IMF-fixdate), such as `Sun, 06 Nov 1994 08:49:37 GMT`.

## Parameters

| Name | Type |
|------|------|
| `ts` | `Timestamp` |

## Returns

`Result<string, TimeError>`

## See also

- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
- [`sub`](/packages/time/reference/time/sub): `ts` moved back by `p`: `add` with every field of `p` negated.
