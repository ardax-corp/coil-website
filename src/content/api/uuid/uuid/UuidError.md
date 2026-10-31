---
slug: "uuid/uuid/UuidError"
package: "uuid"
title: "UuidError"
description: "Why a UUID could not be parsed or generated."
module: "uuid"
kind: "enum"
name: "UuidError"
signature: "enum UuidError"
import: "use uuid::{UuidError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-uuid/blob/07c0a071431e64138c44ec3e6467ab7c9fd93808/src/uuid.hy#L26"
order: 0
---

Why a UUID could not be parsed or generated.

## Variants

### `Invalid` {#variant-invalid}

Not a hyphenated `8-4-4-4-12` UUID.

### `Entropy(CryptoError)` {#variant-entropy}

The CSPRNG failed (or returned too few bytes: `CryptoError::InvalidLength`).

### `Time(TimeError)` {#variant-time}

The clock failed.

## Examples

```coil
use uuid::{parse, UuidError};
use tests::assert;
let invalid = match parse("not-a-uuid") {
    Result::Ok(_) => false,
    Result::Err(e) => match e {
        UuidError::Invalid => true,
        default => false,
    },
};
assert!(invalid);
```
