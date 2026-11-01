---
slug: "time/time/ISO8601_DATE"
package: "time"
title: "ISO8601_DATE"
description: "format / parse pattern for a calendar date, YYYY-MM-DD (no time, no zone)."
module: "time"
kind: "const"
name: "ISO8601_DATE"
signature: "const ISO8601_DATE = \"%Y-%m-%d\";"
import: "use time::{ISO8601_DATE};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.coil#L47"
order: 4
---

[`format`](/packages/time/reference/time/format) / [`parse`](/packages/time/reference/time/parse) pattern for a calendar date, `YYYY-MM-DD` (no time, no zone).

## Examples

```coil
use time::{parse, format, ISO8601_DATE};
use tests::assert;
let ts = match parse("2024-07-04", ISO8601_DATE) {
    Result::Ok(t) => t,
    Result::Err(_) => panic "parse",
};
assert!((format(ts, ISO8601_DATE).ok() ?? "") == "2024-07-04");
```

## See also

- [`time::format`](/packages/time/reference/time/format)
- [`time::parse`](/packages/time/reference/time/parse)
- [`ISO8601`](/packages/time/reference/time/ISO8601): `format` / `parse` pattern for an ISO 8601 date-time body, `YYYY-MM-DDTHH:MM:SS`.
