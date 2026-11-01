---
slug: "uuid/uuid/Uuid/version"
package: "uuid"
title: "Uuid::version"
description: "Returns the version number: the high nibble of octet 6 (1, 4, 6 or 7 for the UUIDs this package generates)."
module: "uuid"
kind: "method"
name: "version"
parent: "Uuid"
signature: "pub fn version() -> int"
import: "use uuid::{Uuid};"
origin: "package"
source: "https://github.com/ardax-corp/coil-uuid/blob/98c88bb6a6d617623fa9ca8a3bc4e475f005b12f/src/uuid.coil#L423"
order: 1
---

Returns the version number: the high nibble of octet 6 (`1`, `4`, `6` or `7` for the UUIDs this package generates).

Called on a `Uuid` value as `value.version(…)`.

## Returns

`int`

## See also

- [`Uuid`](/packages/uuid/reference/uuid/Uuid): A 128-bit UUID, stored as its 16 octets in network (big-endian) order.
- [`Uuid::to_string`](/packages/uuid/reference/uuid/Uuid/to_string): Returns the canonical lowercase `8-4-4-4-12` hex form, which `parse` reads back.
- [`Uuid::variant`](/packages/uuid/reference/uuid/Uuid/variant): Returns the two high bits of octet 8: `2` (binary `10`) is the RFC 4122 variant that every generator here sets.
