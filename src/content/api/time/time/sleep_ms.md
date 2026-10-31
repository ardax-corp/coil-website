---
slug: "time/time/sleep_ms"
package: "time"
title: "sleep_ms"
description: "Block the current task for at least millis milliseconds."
module: "time"
kind: "fn"
name: "sleep_ms"
signature: "fn sleep_ms(int millis) -> Result<(), TimeError>"
import: "use time::{sleep_ms};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/eba7f01ce0bbae69ae55c9e17e14143efd3b9204/src/time.hy#L893"
order: 7
---

Block the current task for at least `millis` milliseconds.

`sleep_ms(0)` returns at once. A negative `millis` is [`TimeError::InvalidInput`](/packages/time/reference/time/TimeError#variant-invalidinput).

## Parameters

| Name | Type |
|------|------|
| `millis` | `int` |

## Returns

`Result<(), TimeError>`

## Examples

```coil
use time::{sleep_ms};
use tests::assert;
assert!(sleep_ms(1).is_ok());
assert!(sleep_ms(-1).is_err());
```

## See also

- [`time::TimeError`](/packages/time/reference/time/TimeError)
- [`timestamp`](/packages/time/reference/time/fn.timestamp): The current wall-clock time (UTC) as a `Timestamp`.
- [`instant_now`](/packages/time/reference/time/instant_now): Take a monotonic clock reading now.
- [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos): Nanoseconds since `inst` was taken.
- [`elapsed_millis`](/packages/time/reference/time/elapsed_millis): Whole milliseconds since `inst` was taken.
- [`period`](/packages/time/reference/time/fn.period): Build a `Period` from its nine fields, largest first.
- [`add`](/packages/time/reference/time/add): `ts` moved forward by `p`.
- [`sub`](/packages/time/reference/time/sub): `ts` moved back by `p`: `add` with every field of `p` negated.
