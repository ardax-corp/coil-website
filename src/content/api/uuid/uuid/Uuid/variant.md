---
slug: "uuid/uuid/Uuid/variant"
package: "uuid"
title: "Uuid::variant"
description: "Returns the two high bits of octet 8: 2 (binary 10) is the RFC 4122 variant that every generator here sets."
module: "uuid"
kind: "method"
name: "variant"
parent: "Uuid"
signature: "pub fn variant() -> int"
import: "use uuid::{Uuid};"
origin: "package"
source: "https://github.com/ardax-corp/coil-uuid/blob/07c0a071431e64138c44ec3e6467ab7c9fd93808/src/uuid.coil#L446"
order: 2
---

Returns the two high bits of octet 8: `2` (binary `10`) is the RFC 4122 variant that every generator here sets.

Called on a `Uuid` value as `value.variant(…)`.

## Returns

`int`

## See also

- [`Uuid`](/packages/uuid/reference/uuid/Uuid): A 128-bit UUID, stored as its 16 octets in network (big-endian) order.
- [`Uuid::to_string`](/packages/uuid/reference/uuid/Uuid/to_string): Returns the canonical lowercase `8-4-4-4-12` hex form, which `parse` reads back.
- [`Uuid::version`](/packages/uuid/reference/uuid/Uuid/version): Returns the version number: the high nibble of octet 6 (`1`, `4`, `6` or `7` for the UUIDs this package generates).
