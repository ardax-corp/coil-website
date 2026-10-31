---
slug: "time/time/TimeError"
package: "time"
title: "TimeError"
description: "Error returned by every fallible function in time."
module: "time"
kind: "enum"
name: "TimeError"
signature: "enum TimeError"
import: "use time::{TimeError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-time/blob/2373411132e804c05780996e38c8fd0727a80ec0/src/time.coil#L84"
order: 0
---

Error returned by every fallible function in [`time`](/packages/time/reference/time).

## Variants

### `InvalidInput` {#variant-invalidinput}

An argument is out of range: a negative sleep, a zero month or day, an
impossible date, an unknown [`format`](/packages/time/reference/time/format) directive, or an [`Instant`](/packages/time/reference/time/Instant) that was dropped.

### `Overflow` {#variant-overflow}

A result or an intermediate value does not fit in a 64-bit [`int`](/docs/reference/types/int).

### `ParseError` {#variant-parseerror}

The text does not match the expected format, or names an impossible date or time.

### `Other` {#variant-other}

Any other failure, such as output that is not valid UTF-8.

## Examples

```coil
use time::{sleep_ms, TimeError};
use tests::assert;
let invalid = match sleep_ms(-1) {
    Result::Ok(_) => false,
    Result::Err(e) => match e {
        TimeError::InvalidInput => true,
        default => false,
    },
};
assert!(invalid);
```

## See also

- [`time`](/packages/time/reference/time)
- [`time::format`](/packages/time/reference/time/format)
- [`time::Instant`](/packages/time/reference/time/Instant)
- [`int`](/docs/reference/types/int)
