---
slug: "cli/cli/keys/index"
package: "cli"
title: "cli::keys"
description: "Decoding raw terminal input bytes into key, mouse, paste and focus events."
module: "cli::keys"
kind: "module"
name: "cli::keys"
origin: "package"
auto: false
order: 4
---

Part of the [cli](/packages/cli) package ([coil-cli](https://github.com/ardax-corp/coil-cli)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/cli)).

Import what you use (`use path::*` is not allowed):

```coil
use cli::keys::{KeyEvent, MouseEvent};
```

## Types

| Name | Description |
|------|-------------|
| [`KeyEvent`](/packages/cli/reference/cli/keys/KeyEvent) |  |
| [`MouseEvent`](/packages/cli/reference/cli/keys/MouseEvent) | A mouse report; `col` and `row` are 1-based. |
| [`Decoder`](/packages/cli/reference/cli/keys/Decoder) | Incremental decoder. |
| [`Key`](/packages/cli/reference/cli/keys/Key) |  |
| [`MouseButton`](/packages/cli/reference/cli/keys/MouseButton) |  |
| [`MouseKind`](/packages/cli/reference/cli/keys/MouseKind) |  |
| [`Event`](/packages/cli/reference/cli/keys/Event) |  |

## Constants

| Name | Description |
|------|-------------|
| [`SHIFT`](/packages/cli/reference/cli/keys/SHIFT) | Modifier bits, as in xterm's `1 + mods` parameter. |

## Functions

| Name | Description |
|------|-------------|
| [`bytes_between`](/packages/cli/reference/cli/keys/bytes_between) | Bytes `b[from..to]`. |
| [`plain_key`](/packages/cli/reference/cli/keys/plain_key) | Key for a single control or printable byte / code point. |
| [`params`](/packages/cli/reference/cli/keys/params) | Numeric parameters of a CSI body (`1;5` -> [1, 5]); empty fields are 0. |
| [`mods_of`](/packages/cli/reference/cli/keys/mods_of) | Modifier bits from xterm's `1 + bits` parameter. |
| [`letter_key`](/packages/cli/reference/cli/keys/letter_key) | Key for a letter final byte (CSI or SS3). |
| [`mouse_event`](/packages/cli/reference/cli/keys/mouse_event) | A mouse event from the button byte `cb`, position and release flag. |
| [`csi_event`](/packages/cli/reference/cli/keys/csi_event) | Event for a complete CSI sequence: `body` is between `ESC [` and the final byte `f`. |
| [`find_paste_end`](/packages/cli/reference/cli/keys/find_paste_end) | Index of the paste end marker `ESC [ 2 0 1 ~` at or after `from`, or -1. |
| [`decode_all`](/packages/cli/reference/cli/keys/decode_all) | Decode a whole buffer at once (tests, scripted input): `feed`, `drain` and `flush`. |
| [`cp_string`](/packages/cli/reference/cli/keys/cp_string) | UTF-8 text of code point `cp`. |
| [`describe_key`](/packages/cli/reference/cli/keys/describe_key) | `ctrl+alt+shift+name`, the form [`KeyEvent`](/packages/cli/reference/cli/keys/KeyEvent) bindings use: `"ctrl+c"`, `"alt+enter"`, `"shift+f5"`, `"up"`, `"a"`, `"space"`. |
| [`describe`](/packages/cli/reference/cli/keys/describe) | Short text for any event, for logs and tests. |
| [`is_key`](/packages/cli/reference/cli/keys/is_key) | Whether `e` is the key `spec` (as [`describe_key`](/packages/cli/reference/cli/keys/describe_key) writes it). |
