---
slug: "cli/cli/line/edit_for"
package: "cli"
title: "edit_for"
description: "The default (Emacs / readline-style) binding for an input event, or None when it means nothing to the editor. Pastes insert their text."
module: "cli::line"
kind: "fn"
name: "edit_for"
signature: "fn edit_for(Event e) -> Option<Edit>"
import: "use cli::line::{edit_for};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/line.hy#L415"
order: 5
---

The default (Emacs / readline-style) binding for an input event, or `None` when it means nothing to the editor. Pastes insert their text.

## Parameters

| Name | Type |
|------|------|
| `e` | `Event` |

## Returns

`Option<Edit>`

## See also

- [`units`](/packages/cli/reference/cli/line/units): `s` split into display units: one character plus any zero-width marks.
- [`read_line_masked`](/packages/cli/reference/cli/line/read_line_masked): Read a line with `prompt`, editing it in raw mode (Emacs keys, history, paste) with each character shown as `mask` when it is not "".
- [`read_line`](/packages/cli/reference/cli/line/read_line): `read_line_masked` with the text shown.
