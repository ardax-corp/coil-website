---
slug: "cli/cli/progress/Spinner"
package: "cli"
title: "Spinner"
description: "A redrawing spinner; call tick from the work loop."
module: "cli::progress"
kind: "class"
name: "Spinner"
signature: "class Spinner"
import: "use cli::progress::{Spinner};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/progress.hy#L314"
order: 2
---

A redrawing spinner; call [`tick`](/packages/cli/reference/cli/progress/Spinner/tick) from the work loop.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `label` | `string` |  |
| `frames` | `Vec<string>` |  |
| `enabled` | `bool` |  |

## Methods

| Name | Description |
|------|-------------|
| [`set_label`](/packages/cli/reference/cli/progress/Spinner/set_label) |  |
| [`tick`](/packages/cli/reference/cli/progress/Spinner/tick) | Advance and redraw, at most every 80ms. |
| [`finish`](/packages/cli/reference/cli/progress/Spinner/finish) | Replace the spinner with `message` (or clear it when ""). |

## See also

- [`Spinner::tick`](/packages/cli/reference/cli/progress/Spinner/tick)
- [`BarStyle`](/packages/cli/reference/cli/progress/BarStyle): Bar glyphs.
- [`Bar`](/packages/cli/reference/cli/progress/Bar): A redrawing progress bar.
