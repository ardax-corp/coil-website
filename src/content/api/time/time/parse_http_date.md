---
slug: "time/time/parse_http_date"
package: "time"
title: "parse_http_date"
description: "Parse an HTTP date (IMF-fixdate), such as Sun, 06 Nov 1994 08:49:37 GMT."
module: "time"
kind: "fn"
name: "parse_http_date"
signature: "fn parse_http_date(string text) -> Result<Timestamp, TimeError>"
import: "use time::{parse_http_date};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.coil#L1548"
order: 31
---

Parse an HTTP date (IMF-fixdate), such as `Sun, 06 Nov 1994 08:49:37 GMT`.

Like [`parse_rfc2822`](/packages/time/reference/time/parse_rfc2822), but the zone must be `GMT`.

## Parameters

| Name | Type |
|------|------|
| `text` | `string` |

## Returns

`Result<Timestamp, TimeError>`

## Examples

```coil
use time::{parse_http_date};
use tests::assert;
assert!(parse_http_date("Sun, 06 Nov 1994 08:49:37 GMT").is_ok());
assert!(parse_http_date("Sun, 06 Nov 1994 08:49:37 -0500").is_err());
```

## See also

- [`time::parse_rfc2822`](/packages/time/reference/time/parse_rfc2822)
- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
