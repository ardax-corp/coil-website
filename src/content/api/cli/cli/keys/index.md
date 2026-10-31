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
use cli::keys::{Key, KeyEvent};
```

## Types

| Name | Description |
|------|-------------|
| [`Key`](/packages/cli/reference/cli/keys/Key) | A key on the keyboard, without modifiers (those are in `KeyEvent.mods`). |
| [`KeyEvent`](/packages/cli/reference/cli/keys/KeyEvent) | A key press: the key and the modifier bits held with it. |
| [`MouseButton`](/packages/cli/reference/cli/keys/MouseButton) | Which button a mouse report is about. |
| [`MouseKind`](/packages/cli/reference/cli/keys/MouseKind) | What happened in a mouse report. |
| [`MouseEvent`](/packages/cli/reference/cli/keys/MouseEvent) | A mouse report; `col` and `row` are 1-based. |
| [`Event`](/packages/cli/reference/cli/keys/Event) | One decoded input event. |
| [`Decoder`](/packages/cli/reference/cli/keys/Decoder) | Incremental decoder. |

## Constants

| Name | Description |
|------|-------------|
| [`SHIFT`](/packages/cli/reference/cli/keys/SHIFT) | Shift, a bit of `KeyEvent.mods` and `MouseEvent.mods`. |
| [`ALT`](/packages/cli/reference/cli/keys/ALT) | Alt (or Option, or a key sent with an Esc prefix). |
| [`CTRL`](/packages/cli/reference/cli/keys/CTRL) | Control. |
| [`META`](/packages/cli/reference/cli/keys/META) | Meta / Super, where the terminal reports it. |

## Functions

| Name | Description |
|------|-------------|
| [`key`](/packages/cli/reference/cli/keys/fn.key) | A key event for `k` with modifier bits `mods` (for tests and scripted input). |
| [`decoder`](/packages/cli/reference/cli/keys/fn.decoder) | An empty decoder. |
| [`decode_all`](/packages/cli/reference/cli/keys/decode_all) | Decode a whole buffer at once (tests, scripted input): `feed`, `drain` and `flush`. |
| [`cp_string`](/packages/cli/reference/cli/keys/cp_string) | UTF-8 text of code point `cp` (for [`Key::Char`](/packages/cli/reference/cli/keys/Key#variant-char)). |
| [`describe_key`](/packages/cli/reference/cli/keys/describe_key) | `ctrl+alt+shift+name`, the form [`KeyEvent`](/packages/cli/reference/cli/keys/KeyEvent) bindings use: `"ctrl+c"`, `"alt+enter"`, `"shift+f5"`, `"up"`, `"a"`, `"space"`. |
| [`describe`](/packages/cli/reference/cli/keys/describe) | Short text for any event, for logs and tests: keys as [`describe_key`](/packages/cli/reference/cli/keys/describe_key) writes them, `mouse(press left 3,4)`, `paste(text)`, `focus-in`, `cursor(row,col)`, `resize(80x24)`, `unknown(n bytes)`. |
| [`is_key`](/packages/cli/reference/cli/keys/is_key) | Whether `e` is the key `spec` (as [`describe_key`](/packages/cli/reference/cli/keys/describe_key) writes it). |
