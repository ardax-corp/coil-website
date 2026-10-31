---
slug: "time/time/format_iso8601"
package: "time"
title: "format_iso8601"
description: "Format ts as an ISO 8601 date-time in UTC; the output is the same as format_rfc3339."
module: "time"
kind: "fn"
name: "format_iso8601"
signature: "fn format_iso8601(Timestamp ts) -> Result<string, TimeError>"
import: "use time::{format_iso8601};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.coil#L1380"
order: 24
---

Format `ts` as an ISO 8601 date-time in UTC; the output is the same as [`format_rfc3339`](/packages/time/reference/time/format_rfc3339).

## Parameters

| Name | Type |
|------|------|
| `ts` | `Timestamp` |

## Returns

`Result<string, TimeError>`

## See also

- [`time::format_rfc3339`](/packages/time/reference/time/format_rfc3339)
- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
