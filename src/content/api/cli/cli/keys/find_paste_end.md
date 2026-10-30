---
slug: "cli/cli/keys/find_paste_end"
package: "cli"
title: "find_paste_end"
description: "Index of the paste end marker ESC [ 2 0 1 ~ at or after from, or -1."
module: "cli::keys"
kind: "fn"
name: "find_paste_end"
signature: "fn find_paste_end(Vec<byte> b, int from) -> int"
import: "use cli::keys::{find_paste_end};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L399"
order: 11
---

Index of the paste end marker `ESC [ 2 0 1 ~` at or after `from`, or -1.

## Parameters

| Name | Type |
|------|------|
| `b` | `Vec<byte>` |
| `from` | `int` |

## Returns

`int`

## See also

- [`bytes_between`](/packages/cli/reference/cli/keys/bytes_between): Bytes `b[from..to]`.
- [`plain_key`](/packages/cli/reference/cli/keys/plain_key): Key for a single control or printable byte / code point.
- [`params`](/packages/cli/reference/cli/keys/params): Numeric parameters of a CSI body (`1;5` -> [1, 5]); empty fields are 0.
- [`mods_of`](/packages/cli/reference/cli/keys/mods_of): Modifier bits from xterm's `1 + bits` parameter.
- [`letter_key`](/packages/cli/reference/cli/keys/letter_key): Key for a letter final byte (CSI or SS3).
- [`mouse_event`](/packages/cli/reference/cli/keys/mouse_event): A mouse event from the button byte `cb`, position and release flag.
- [`csi_event`](/packages/cli/reference/cli/keys/csi_event): Event for a complete CSI sequence: `body` is between `ESC [` and the final byte `f`.
- [`decode_all`](/packages/cli/reference/cli/keys/decode_all): Decode a whole buffer at once (tests, scripted input): `feed`, `drain` and `flush`.
