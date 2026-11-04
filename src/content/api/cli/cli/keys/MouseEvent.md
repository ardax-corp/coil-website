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
source: "https://github.com/ardax-corp/coil-cli/blob/05669fce32782c1a5cb55fb2ecff2e1215cd0bfc/src/cli/keys.coil#L131"
order: 4
---

A mouse report; `col` and `row` are 1-based.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `kind` | `MouseKind` | Press, release, drag or move. |
| `button` | `MouseButton` | Which button. |
| `col` | `int` | 1-based column. |
| `row` | `int` | 1-based row. |
| `mods` | `int` | Modifier bits held ([`SHIFT`](/packages/cli/reference/cli/keys/SHIFT), [`ALT`](/packages/cli/reference/cli/keys/ALT), [`CTRL`](/packages/cli/reference/cli/keys/CTRL)). |

## See also

- [`cli::keys::SHIFT`](/packages/cli/reference/cli/keys/SHIFT)
- [`cli::keys::ALT`](/packages/cli/reference/cli/keys/ALT)
- [`cli::keys::CTRL`](/packages/cli/reference/cli/keys/CTRL)
- [`KeyEvent`](/packages/cli/reference/cli/keys/KeyEvent): A key press: the key and the modifier bits held with it.
- [`Decoder`](/packages/cli/reference/cli/keys/Decoder): Incremental decoder.
