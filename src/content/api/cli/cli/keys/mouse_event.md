---
slug: "cli/cli/keys/mouse_event"
package: "cli"
title: "mouse_event"
description: "A mouse event from the button byte cb, position and release flag."
module: "cli::keys"
kind: "fn"
name: "mouse_event"
signature: "fn mouse_event(int cb, int col, int row, bool release) -> Event"
import: "use cli::keys::{mouse_event};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L312"
order: 9
---

A mouse event from the button byte `cb`, position and release flag.

## Parameters

| Name | Type |
|------|------|
| `cb` | `int` |
| `col` | `int` |
| `row` | `int` |
| `release` | `bool` |

## Returns

`Event`

## See also

- [`bytes_between`](/packages/cli/reference/cli/keys/bytes_between): Bytes `b[from..to]`.
- [`plain_key`](/packages/cli/reference/cli/keys/plain_key): Key for a single control or printable byte / code point.
- [`params`](/packages/cli/reference/cli/keys/params): Numeric parameters of a CSI body (`1;5` -> [1, 5]); empty fields are 0.
- [`mods_of`](/packages/cli/reference/cli/keys/mods_of): Modifier bits from xterm's `1 + bits` parameter.
- [`letter_key`](/packages/cli/reference/cli/keys/letter_key): Key for a letter final byte (CSI or SS3).
- [`csi_event`](/packages/cli/reference/cli/keys/csi_event): Event for a complete CSI sequence: `body` is between `ESC [` and the final byte `f`.
- [`find_paste_end`](/packages/cli/reference/cli/keys/find_paste_end): Index of the paste end marker `ESC [ 2 0 1 ~` at or after `from`, or -1.
- [`decode_all`](/packages/cli/reference/cli/keys/decode_all): Decode a whole buffer at once (tests, scripted input): `feed`, `drain` and `flush`.
