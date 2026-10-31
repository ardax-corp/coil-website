---
slug: "cli/cli/keys/KeyEvent"
package: "cli"
title: "KeyEvent"
description: "A key press: the key and the modifier bits held with it."
module: "cli::keys"
kind: "class"
name: "KeyEvent"
signature: "class KeyEvent"
import: "use cli::keys::{KeyEvent};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/keys.hy#L61"
order: 1
---

A key press: the key and the modifier bits held with it.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `key` | `Key` | Which key. |
| `mods` | `int` | Modifier bits: [`SHIFT`](/packages/cli/reference/cli/keys/SHIFT), [`ALT`](/packages/cli/reference/cli/keys/ALT), [`CTRL`](/packages/cli/reference/cli/keys/CTRL), [`META`](/packages/cli/reference/cli/keys/META). |

## Methods

| Name | Description |
|------|-------------|
| [`shift`](/packages/cli/reference/cli/keys/KeyEvent/shift) | Whether Shift was held. |
| [`alt`](/packages/cli/reference/cli/keys/KeyEvent/alt) | Whether Alt was held. |
| [`ctrl`](/packages/cli/reference/cli/keys/KeyEvent/ctrl) | Whether Control was held. |
| [`char`](/packages/cli/reference/cli/keys/KeyEvent/char) | The character, when this is a plain or shifted character key. |

## See also

- [`cli::keys::SHIFT`](/packages/cli/reference/cli/keys/SHIFT)
- [`cli::keys::ALT`](/packages/cli/reference/cli/keys/ALT)
- [`cli::keys::CTRL`](/packages/cli/reference/cli/keys/CTRL)
- [`cli::keys::META`](/packages/cli/reference/cli/keys/META)
- [`MouseEvent`](/packages/cli/reference/cli/keys/MouseEvent): A mouse report; `col` and `row` are 1-based.
- [`Decoder`](/packages/cli/reference/cli/keys/Decoder): Incremental decoder.
