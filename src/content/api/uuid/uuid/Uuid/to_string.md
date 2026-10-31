---
slug: "uuid/uuid/Uuid/to_string"
package: "uuid"
title: "Uuid::to_string"
description: "Returns the canonical lowercase 8-4-4-4-12 hex form, which parse reads back."
module: "uuid"
kind: "method"
name: "to_string"
parent: "Uuid"
signature: "pub fn to_string() -> string"
import: "use uuid::{Uuid};"
origin: "package"
source: "https://github.com/ardax-corp/coil-uuid/blob/07c0a071431e64138c44ec3e6467ab7c9fd93808/src/uuid.hy#L421"
order: 0
---

Returns the canonical lowercase `8-4-4-4-12` hex form, which [`parse`](/packages/uuid/reference/uuid/parse) reads back.

Called on a `Uuid` value as `value.to_string(…)`.

## Returns

`string`

## Examples

```coil
use uuid::{parse};
use tests::assert;
let text = "123e4567-e89b-12d3-a456-426614174000";
let u = match parse(text) {
    Result::Ok(u) => u,
    Result::Err(_) => panic "parse failed",
};
assert!(u.to_string() == text);
```

## See also

- [`uuid::parse`](/packages/uuid/reference/uuid/parse)
- [`Uuid`](/packages/uuid/reference/uuid/Uuid): A 128-bit UUID, stored as its 16 octets in network (big-endian) order.
- [`Uuid::version`](/packages/uuid/reference/uuid/Uuid/version): Returns the version number: the high nibble of octet 6 (`1`, `4`, `6` or `7` for the UUIDs this package generates).
- [`Uuid::variant`](/packages/uuid/reference/uuid/Uuid/variant): Returns the two high bits of octet 8: `2` (binary `10`) is the RFC 4122 variant that every generator here sets.
