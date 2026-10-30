---
slug: "cli/cli/keys/describe_key"
package: "cli"
title: "describe_key"
description: "ctrl+alt+shift+name, the form KeyEvent bindings use: \"ctrl+c\", \"alt+enter\", \"shift+f5\", \"up\", \"a\", \"space\"."
module: "cli::keys"
kind: "fn"
name: "describe_key"
signature: "fn describe_key(KeyEvent e) -> string"
import: "use cli::keys::{describe_key};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L633"
order: 14
---

`ctrl+alt+shift+name`, the form [`KeyEvent`](/packages/cli/reference/cli/keys/KeyEvent) bindings use: `"ctrl+c"`, `"alt+enter"`, `"shift+f5"`, `"up"`, `"a"`, `"space"`.

## Parameters

| Name | Type |
|------|------|
| `e` | `KeyEvent` |

## Returns

`string`

## See also

- [`cli::keys::KeyEvent`](/packages/cli/reference/cli/keys/KeyEvent)
- [`bytes_between`](/packages/cli/reference/cli/keys/bytes_between): Bytes `b[from..to]`.
- [`plain_key`](/packages/cli/reference/cli/keys/plain_key): Key for a single control or printable byte / code point.
- [`params`](/packages/cli/reference/cli/keys/params): Numeric parameters of a CSI body (`1;5` -> [1, 5]); empty fields are 0.
- [`mods_of`](/packages/cli/reference/cli/keys/mods_of): Modifier bits from xterm's `1 + bits` parameter.
- [`letter_key`](/packages/cli/reference/cli/keys/letter_key): Key for a letter final byte (CSI or SS3).
- [`mouse_event`](/packages/cli/reference/cli/keys/mouse_event): A mouse event from the button byte `cb`, position and release flag.
- [`csi_event`](/packages/cli/reference/cli/keys/csi_event): Event for a complete CSI sequence: `body` is between `ESC [` and the final byte `f`.
