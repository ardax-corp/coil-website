---
slug: "tui/tui/widgets/dialog/Popup"
package: "tui"
title: "Popup"
description: "A box drawn on top of the layers below: its area is cleared, it is centred (or placed at x, y when at is set) at its measured size, and Esc closes it."
module: "tui::widgets::dialog"
kind: "class"
name: "Popup"
signature: "shared class Popup"
import: "use tui::widgets::dialog::{Popup};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/dialog.hy#L30"
order: 0
---

A box drawn on top of the layers below: its area is cleared, it is centred (or placed at `x`, `y` when `at` is set) at its measured size, and Esc closes it.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `child` | `Node` | The popup's content. |
| `kids` | `Vec<Node>` | `[child]`, for `children`. |
| `at` | `bool` | Place at (`x`, `y`) instead of centring. |
| `x` | `int` | Column of the top-left corner when `at` is set (kept on screen). |
| `y` | `int` | Row of the top-left corner when `at` is set (kept on screen). |
| `on_close` | `fn(Ctx) -> ()` | Called after Esc closed the popup. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/tui/reference/tui/widgets/dialog/Popup/new) | A centred popup around `child`. |

## Methods

| Name | Description |
|------|-------------|
| [`place`](/packages/tui/reference/tui/widgets/dialog/Popup/place) | Where the popup goes inside `area`, at the child's measured size. |

## Trait implementations

- `Component` for `Popup`
