---
slug: "uuid/uuid/index"
package: "uuid"
title: "uuid"
description: "Generate v1, v4, v6 and v7 UUIDs (RFC 9562) and parse or format any version."
module: "uuid"
kind: "module"
name: "uuid"
origin: "package"
auto: false
order: 0
---

Part of the [uuid](/packages/uuid) package ([coil-uuid](https://github.com/ardax-corp/coil-uuid)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/uuid)).

Import what you use (`use path::*` is not allowed):

```coil
use uuid::{UuidError, Uuid};
```

## Types

| Name | Description |
|------|-------------|
| [`UuidError`](/packages/uuid/reference/uuid/UuidError) | Why a UUID could not be parsed or generated. |
| [`Uuid`](/packages/uuid/reference/uuid/Uuid) | A 128-bit UUID, stored as its 16 octets in network (big-endian) order. |

## Functions

| Name | Description |
|------|-------------|
| [`v4`](/packages/uuid/reference/uuid/v4) | Generates a random (version 4) UUID. |
| [`v1`](/packages/uuid/reference/uuid/v1) | Generates a time-based (version 1) UUID. |
| [`v6`](/packages/uuid/reference/uuid/v6) | Generates a reordered time-based (version 6) UUID. |
| [`v7`](/packages/uuid/reference/uuid/v7) | Generates a Unix-time-ordered (version 7) UUID. |
| [`parse`](/packages/uuid/reference/uuid/parse) | Parses the hyphenated `8-4-4-4-12` hex form of a UUID. |
