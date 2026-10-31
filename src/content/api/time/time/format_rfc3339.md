---
slug: "time/time/format_rfc3339"
package: "time"
title: "format_rfc3339"
description: "Format ts as RFC 3339 in UTC, such as 2024-01-01T00:00:00Z."
module: "time"
kind: "fn"
name: "format_rfc3339"
signature: "fn format_rfc3339(Timestamp ts) -> Result<string, TimeError>"
import: "use time::{format_rfc3339};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L1353"
order: 22
---

Format `ts` as RFC 3339 in UTC, such as `2024-01-01T00:00:00Z`.

A non-zero sub-second part is printed as a fraction with trailing zeros
removed (`2024-01-01T00:00:00.123Z`).

## Parameters

| Name | Type |
|------|------|
| `ts` | `Timestamp` |

## Returns

`Result<string, TimeError>`

## Examples

```coil
use time::{format_rfc3339, parse_rfc3339};
use tests::assert;
let ts = match parse_rfc3339("2024-01-15T12:30:00-05:00") {
    Result::Ok(t) => t,
    Result::Err(_) => panic "parse",
};
assert!((format_rfc3339(ts).ok() ?? "") == "2024-01-15T17:30:00Z");
```

## See also

- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`sleep_ms`](/packages/time/reference/time/sleep_ms): Block the current task for at least `millis` milliseconds.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
- [`sub`](/packages/time/reference/time/sub): `ts` moved back by `p`: `add` with every field of `p` negated.
