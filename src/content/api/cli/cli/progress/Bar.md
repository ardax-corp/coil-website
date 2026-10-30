---
slug: "cli/cli/progress/Bar"
package: "cli"
title: "Bar"
description: "A redrawing progress bar."
module: "cli::progress"
kind: "class"
name: "Bar"
signature: "class Bar"
import: "use cli::progress::{Bar};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/progress.hy#L225"
order: 1
---

A redrawing progress bar.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `total` | `int` |  |
| `current` | `int` |  |
| `label` | `string` |  |
| `style` | `BarStyle` |  |
| `cols` | `int` | Columns to fit in (the terminal width). |
| `enabled` | `bool` | Draw at all. Pass whether stderr is a terminal. |

## Methods

| Name | Description |
|------|-------------|
| [`set_label`](/packages/cli/reference/cli/progress/Bar/set_label) |  |
| [`inc`](/packages/cli/reference/cli/progress/Bar/inc) |  |
| [`set`](/packages/cli/reference/cli/progress/Bar/set) |  |
| [`elapsed_ms`](/packages/cli/reference/cli/progress/Bar/elapsed_ms) |  |
| [`line`](/packages/cli/reference/cli/progress/Bar/line) |  |
| [`draw`](/packages/cli/reference/cli/progress/Bar/draw) | Redraw now if enough time passed (or `force`). |
| [`finish`](/packages/cli/reference/cli/progress/Bar/finish) | Final draw and newline; `message` replaces the bar when not "". |
| [`clear`](/packages/cli/reference/cli/progress/Bar/clear) | Remove the bar's line. |

## See also

- [`BarStyle`](/packages/cli/reference/cli/progress/BarStyle): Bar glyphs.
- [`Spinner`](/packages/cli/reference/cli/progress/Spinner): A redrawing spinner; call `tick` from the work loop.
