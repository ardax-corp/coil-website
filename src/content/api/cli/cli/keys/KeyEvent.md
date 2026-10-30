---
slug: "cli/cli/keys/KeyEvent"
package: "cli"
title: "KeyEvent"
description: "Class KeyEvent."
module: "cli::keys"
kind: "class"
name: "KeyEvent"
signature: "class KeyEvent"
import: "use cli::keys::{KeyEvent};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L39"
order: 0
---

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `key` | `Key` |  |
| `mods` | `int` |  |

## Methods

| Name | Description |
|------|-------------|
| [`shift`](/packages/cli/reference/cli/keys/KeyEvent/shift) |  |
| [`alt`](/packages/cli/reference/cli/keys/KeyEvent/alt) |  |
| [`ctrl`](/packages/cli/reference/cli/keys/KeyEvent/ctrl) |  |
| [`char`](/packages/cli/reference/cli/keys/KeyEvent/char) | The character, when this is a plain or shifted character key. |

## See also

- [`MouseEvent`](/packages/cli/reference/cli/keys/MouseEvent): A mouse report; `col` and `row` are 1-based.
- [`Decoder`](/packages/cli/reference/cli/keys/Decoder): Incremental decoder.
