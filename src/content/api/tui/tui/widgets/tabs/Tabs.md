---
slug: "tui/tui/widgets/tabs/Tabs"
package: "tui"
title: "Tabs"
description: "A title bar over pages, one shown at a time. With the bar focused, Left/Right switch; Ctrl-PageUp/PageDown switch from anywhere inside; clicking a title switches to it."
module: "tui::widgets::tabs"
kind: "class"
name: "Tabs"
signature: "shared class Tabs"
import: "use tui::widgets::tabs::{Tabs};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/tabs.hy#L22"
order: 0
---

A title bar over pages, one shown at a time. With the bar focused, Left/Right switch; Ctrl-PageUp/PageDown switch from anywhere inside; clicking a title switches to it.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `titles` | `Vec<string>` | The titles in the bar, one per page. |
| `pages` | `Vec<Node>` | The pages; only the active one is visible. |
| `active` | `int` | Index of the page shown. |
| `on_change` | `fn(int, Ctx) -> ()` | Called with the new index when the page changes. |
| `stops` | `Vec<int>` | Start column of each title in the last frame (and the end). |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/tui/reference/tui/widgets/tabs/Tabs/new) | Tabs over `pages` titled `titles`, the first page shown. |

## Methods

| Name | Description |
|------|-------------|
| [`show`](/packages/tui/reference/tui/widgets/tabs/Tabs/show) | Make only the active page visible. |
| [`select`](/packages/tui/reference/tui/widgets/tabs/Tabs/select) | Switch to page `i`; true when it changed. |
| [`on_change`](/packages/tui/reference/tui/widgets/tabs/Tabs/on_change) | Call `f` with the new index on each change (builder style). |

## Trait implementations

- `Component` for `Tabs`
