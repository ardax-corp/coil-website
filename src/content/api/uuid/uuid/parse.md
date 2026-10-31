---
slug: "uuid/uuid/parse"
package: "uuid"
title: "parse"
description: "Parses the hyphenated 8-4-4-4-12 hex form of a UUID."
module: "uuid"
kind: "fn"
name: "parse"
signature: "fn parse(string s) -> Result<Uuid, UuidError>"
import: "use uuid::{parse};"
origin: "package"
source: "https://github.com/ardax-corp/coil-uuid/blob/07c0a071431e64138c44ec3e6467ab7c9fd93808/src/uuid.hy#L401"
order: 6
---

Parses the hyphenated `8-4-4-4-12` hex form of a UUID.

Hex digits may be upper or lower case. The hyphens are required; braces,
a `urn:uuid:` prefix and the 32-digit form without hyphens are rejected.
Any version and variant are accepted.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<Uuid, UuidError>`

## Errors

Returns [`UuidError::Invalid`](/packages/uuid/reference/uuid/UuidError#variant-invalid) when `s` is not 36 characters in that form.

## Examples

```coil
use uuid::{parse};
use tests::assert;
let u = match parse("550E8400-E29B-41D4-A716-446655440000") {
    Result::Ok(u) => u,
    Result::Err(_) => panic "parse failed",
};
assert!(u.to_string() == "550e8400-e29b-41d4-a716-446655440000");
assert!(parse("550e8400e29b41d4a716446655440000").is_err());
```

## See also

- [`uuid::UuidError`](/packages/uuid/reference/uuid/UuidError)
- [`v4`](/packages/uuid/reference/uuid/v4): Generates a random (version 4) UUID.
- [`v1`](/packages/uuid/reference/uuid/v1): Generates a time-based (version 1) UUID.
- [`v6`](/packages/uuid/reference/uuid/v6): Generates a reordered time-based (version 6) UUID.
- [`v7`](/packages/uuid/reference/uuid/v7): Generates a Unix-time-ordered (version 7) UUID.
