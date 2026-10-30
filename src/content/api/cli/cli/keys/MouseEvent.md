---
slug: "cli/cli/keys/MouseEvent"
package: "cli"
title: "MouseEvent"
description: "A mouse report; col and row are 1-based."
module: "cli::keys"
kind: "class"
name: "MouseEvent"
signature: "class MouseEvent"
import: "use cli::keys::{MouseEvent};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L91"
order: 1
---

A mouse report; `col` and `row` are 1-based.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `kind` | `MouseKind` |  |
| `button` | `MouseButton` |  |
| `col` | `int` |  |
| `row` | `int` |  |
| `mods` | `int` |  |

## See also

- [`KeyEvent`](/packages/cli/reference/cli/keys/KeyEvent)
- [`Decoder`](/packages/cli/reference/cli/keys/Decoder): Incremental decoder.
