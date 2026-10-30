---
slug: "cli/cli/keys/csi_event"
package: "cli"
title: "csi_event"
description: "Event for a complete CSI sequence: body is between ESC [ and the final byte f."
module: "cli::keys"
kind: "fn"
name: "csi_event"
signature: "fn csi_event(Vec<byte> body, int f, Vec<byte> raw, bool expect_cursor) -> Event"
import: "use cli::keys::{csi_event};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L328"
order: 10
---

Event for a complete CSI sequence: `body` is between `ESC [` and the final byte `f`.

## Parameters

| Name | Type |
|------|------|
| `body` | `Vec<byte>` |
| `f` | `int` |
| `raw` | `Vec<byte>` |
| `expect_cursor` | `bool` |

## Returns

`Event`

## See also

- [`bytes_between`](/packages/cli/reference/cli/keys/bytes_between): Bytes `b[from..to]`.
- [`plain_key`](/packages/cli/reference/cli/keys/plain_key): Key for a single control or printable byte / code point.
- [`params`](/packages/cli/reference/cli/keys/params): Numeric parameters of a CSI body (`1;5` -> [1, 5]); empty fields are 0.
- [`mods_of`](/packages/cli/reference/cli/keys/mods_of): Modifier bits from xterm's `1 + bits` parameter.
- [`letter_key`](/packages/cli/reference/cli/keys/letter_key): Key for a letter final byte (CSI or SS3).
- [`mouse_event`](/packages/cli/reference/cli/keys/mouse_event): A mouse event from the button byte `cb`, position and release flag.
- [`find_paste_end`](/packages/cli/reference/cli/keys/find_paste_end): Index of the paste end marker `ESC [ 2 0 1 ~` at or after `from`, or -1.
- [`decode_all`](/packages/cli/reference/cli/keys/decode_all): Decode a whole buffer at once (tests, scripted input): `feed`, `drain` and `flush`.
