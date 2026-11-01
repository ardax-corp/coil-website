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
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/progress.coil#L379"
order: 2
---

A redrawing spinner; call [`tick`](/packages/cli/reference/cli/progress/Spinner/tick) from the work loop.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `label` | `string` | Text after the spinner frame. |
| `frames` | `Vec<string>` | The animation frames; [`dots()`](/packages/cli/reference/cli/progress/dots) unless changed. |
| `enabled` | `bool` | Draw at all. Pass whether stderr is a terminal. |

## Methods

| Name | Description |
|------|-------------|
| [`set_label`](/packages/cli/reference/cli/progress/Spinner/set_label) | Change the label; shown on the next [`tick`](/packages/cli/reference/cli/progress/Spinner/tick). |
| [`tick`](/packages/cli/reference/cli/progress/Spinner/tick) | Advance and redraw, at most every 80ms. |
| [`finish`](/packages/cli/reference/cli/progress/Spinner/finish) | Replace the spinner with `message` (or clear it when ""). |

## See also

- [`Spinner::tick`](/packages/cli/reference/cli/progress/Spinner/tick)
- [`cli::progress::dots`](/packages/cli/reference/cli/progress/dots)
- [`BarStyle`](/packages/cli/reference/cli/progress/BarStyle): Bar glyphs.
- [`Bar`](/packages/cli/reference/cli/progress/Bar): A progress bar on stderr that redraws its line in place, at most every 80ms.
