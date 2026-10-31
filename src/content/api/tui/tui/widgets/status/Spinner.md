---
slug: "tui/tui/widgets/status/Spinner"
package: "tui"
title: "Spinner"
description: "An animated spinner and a label. Starts ticking the first time it is drawn; stops when done is set."
module: "tui::widgets::status"
kind: "class"
name: "Spinner"
signature: "shared class Spinner"
import: "use tui::widgets::status::{Spinner};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/status.hy#L126"
order: 1
---

An animated spinner and a label. Starts ticking the first time it is drawn; stops when `done` is set.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `label` | `string` | Text after the spinner. |
| `frames` | `Vec<string>` | The animation frames (braille dots by default). |
| `frame` | `int` | Index of the frame shown. |
| `interval` | `int` | Milliseconds per frame. |
| `done` | `bool` | Set by [`stop`](/packages/tui/reference/tui/widgets/status/Spinner/stop): the animation is gone and only the label is drawn. |
| `timer` | `int` | Id of the frame timer (0 when not running). |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/tui/reference/tui/widgets/status/Spinner/new) | A spinner with `label`, braille frames every 80ms. |

## Methods

| Name | Description |
|------|-------------|
| [`stop`](/packages/tui/reference/tui/widgets/status/Spinner/stop) | Stop the animation and redraw with the label alone. |
| [`start`](/packages/tui/reference/tui/widgets/status/Spinner/start) | Start the frame timer (done by the first draw; nothing once started or stopped). |

## Trait implementations

- `Component` for `Spinner`

## See also

- [`Spinner::stop`](/packages/tui/reference/tui/widgets/status/Spinner/stop)
- [`Gauge`](/packages/tui/reference/tui/widgets/status/Gauge): A horizontal bar showing `value` out of `max`, with a label after it ("" for the percentage).
- [`KeyHints`](/packages/tui/reference/tui/widgets/status/KeyHints): A line of key hints: `^S save q quit`.
