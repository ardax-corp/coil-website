---
slug: "uuid/uuid/Uuid"
package: "uuid"
title: "Uuid"
description: "A 128-bit UUID, stored as its 16 octets in network (big-endian) order."
module: "uuid"
kind: "class"
name: "Uuid"
signature: "class Uuid"
import: "use uuid::{Uuid};"
origin: "package"
source: "https://github.com/ardax-corp/coil-uuid/blob/07c0a071431e64138c44ec3e6467ab7c9fd93808/src/uuid.hy#L69"
order: 1
---

A 128-bit UUID, stored as its 16 octets in network (big-endian) order.

Make one with [`v1`](/packages/uuid/reference/uuid/v1), [`v4`](/packages/uuid/reference/uuid/v4), [`v6`](/packages/uuid/reference/uuid/v6), [`v7`](/packages/uuid/reference/uuid/v7) or [`parse`](/packages/uuid/reference/uuid/parse), and format it with
[`to_string`](/packages/uuid/reference/uuid/Uuid/to_string). Two `Uuid`s are `==` when their octets are equal. `Uuid` does
not implement `Hash`, so key a map by [`to_string()`](/packages/uuid/reference/uuid/Uuid/to_string) instead.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `bytes` | `Vec<byte>` | The 16 octets, most significant first. |

## Methods

| Name | Description |
|------|-------------|
| [`to_string`](/packages/uuid/reference/uuid/Uuid/to_string) | Returns the canonical lowercase `8-4-4-4-12` hex form, which [`parse`](/packages/uuid/reference/uuid/parse) reads back. |
| [`version`](/packages/uuid/reference/uuid/Uuid/version) | Returns the version number: the high nibble of octet 6 (`1`, `4`, `6` or `7` for the UUIDs this package generates). |
| [`variant`](/packages/uuid/reference/uuid/Uuid/variant) | Returns the two high bits of octet 8: `2` (binary `10`) is the RFC 4122 variant that every generator here sets. |

## Examples

```coil
use uuid::{parse, Uuid};
use tests::assert;
let u = match parse("550e8400-e29b-41d4-a716-446655440000") {
    Result::Ok(u) => u,
    Result::Err(_) => panic "parse failed",
};
assert!(u.bytes.len() == 16 && u.bytes[0] == 85 as byte);
assert!(u.version() == 4 && u.variant() == 2);
```

## See also

- [`uuid::v1`](/packages/uuid/reference/uuid/v1)
- [`uuid::v4`](/packages/uuid/reference/uuid/v4)
- [`uuid::v6`](/packages/uuid/reference/uuid/v6)
- [`uuid::v7`](/packages/uuid/reference/uuid/v7)
- [`uuid::parse`](/packages/uuid/reference/uuid/parse)
- [`Uuid::to_string`](/packages/uuid/reference/uuid/Uuid/to_string)
