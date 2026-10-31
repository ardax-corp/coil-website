---
slug: "tui/tui/theme/Theme"
package: "tui"
title: "Theme"
description: "The styles widgets use unless they are given their own."
module: "tui::theme"
kind: "class"
name: "Theme"
signature: "class Theme"
import: "use tui::theme::{Theme};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/theme.hy#L5"
order: 0
---

The styles widgets use unless they are given their own.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `text` | `Style` | Ordinary text. |
| `muted` | `Style` | Secondary text: hints, separators, empty-list notes. |
| `accent` | `Style` | Highlights such as key names in hints and gauge fill. |
| `title` | `Style` | Titles of blocks, dialogs and tabs. |
| `border` | `Style` | Borders of unfocused blocks. |
| `border_focused` | `Style` | Borders of blocks holding the focus. |
| `selection` | `Style` | The selected row of a focused list or table. |
| `selection_unfocused` | `Style` | The selected row when the list is not focused. |
| `button` | `Style` | A button. |
| `button_focused` | `Style` | The focused button. |
| `input` | `Style` | A text field. |
| `input_focused` | `Style` | The focused text field. |
| `placeholder` | `Style` | Placeholder text in an empty field. |
| `disabled` | `Style` | Controls that cannot be used. |
| `error` | `Style` | Error messages. |
