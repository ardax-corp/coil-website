---
slug: "cli/cli/keys/plain_key"
package: "cli"
title: "plain_key"
description: "Key for a single control or printable byte / code point."
module: "cli::keys"
kind: "fn"
name: "plain_key"
signature: "fn plain_key(int cp, int mods) -> Event"
import: "use cli::keys::{plain_key};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L166"
order: 5
---

Key for a single control or printable byte / code point.

## Parameters

| Name | Type |
|------|------|
| `cp` | `int` |
| `mods` | `int` |

## Returns

`Event`

## See also

- [`bytes_between`](/packages/cli/reference/cli/keys/bytes_between): Bytes `b[from..to]`.
- [`params`](/packages/cli/reference/cli/keys/params): Numeric parameters of a CSI body (`1;5` -> [1, 5]); empty fields are 0.
- [`mods_of`](/packages/cli/reference/cli/keys/mods_of): Modifier bits from xterm's `1 + bits` parameter.
- [`letter_key`](/packages/cli/reference/cli/keys/letter_key): Key for a letter final byte (CSI or SS3).
- [`mouse_event`](/packages/cli/reference/cli/keys/mouse_event): A mouse event from the button byte `cb`, position and release flag.
- [`csi_event`](/packages/cli/reference/cli/keys/csi_event): Event for a complete CSI sequence: `body` is between `ESC [` and the final byte `f`.
- [`find_paste_end`](/packages/cli/reference/cli/keys/find_paste_end): Index of the paste end marker `ESC [ 2 0 1 ~` at or after `from`, or -1.
- [`decode_all`](/packages/cli/reference/cli/keys/decode_all): Decode a whole buffer at once (tests, scripted input): `feed`, `drain` and `flush`.
