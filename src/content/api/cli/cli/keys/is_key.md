---
slug: "cli/cli/keys/is_key"
package: "cli"
title: "is_key"
description: "Whether e is the key spec (as describe_key writes it)."
module: "cli::keys"
kind: "fn"
name: "is_key"
signature: "fn is_key(Event e, string spec) -> bool"
import: "use cli::keys::{is_key};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L690"
order: 16
---

Whether `e` is the key `spec` (as [`describe_key`](/packages/cli/reference/cli/keys/describe_key) writes it).

## Parameters

| Name | Type |
|------|------|
| `e` | `Event` |
| `spec` | `string` |

## Returns

`bool`

## See also

- [`cli::keys::describe_key`](/packages/cli/reference/cli/keys/describe_key)
- [`bytes_between`](/packages/cli/reference/cli/keys/bytes_between): Bytes `b[from..to]`.
- [`plain_key`](/packages/cli/reference/cli/keys/plain_key): Key for a single control or printable byte / code point.
- [`params`](/packages/cli/reference/cli/keys/params): Numeric parameters of a CSI body (`1;5` -> [1, 5]); empty fields are 0.
- [`mods_of`](/packages/cli/reference/cli/keys/mods_of): Modifier bits from xterm's `1 + bits` parameter.
- [`letter_key`](/packages/cli/reference/cli/keys/letter_key): Key for a letter final byte (CSI or SS3).
- [`mouse_event`](/packages/cli/reference/cli/keys/mouse_event): A mouse event from the button byte `cb`, position and release flag.
- [`csi_event`](/packages/cli/reference/cli/keys/csi_event): Event for a complete CSI sequence: `body` is between `ESC [` and the final byte `f`.
