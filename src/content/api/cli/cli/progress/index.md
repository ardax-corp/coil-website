---
slug: "cli/cli/progress/index"
package: "cli"
title: "cli::progress"
description: "Progress bars and spinners that redraw one line on stderr."
module: "cli::progress"
kind: "module"
name: "cli::progress"
origin: "package"
auto: false
order: 6
---

Part of the [cli](/packages/cli) package ([coil-cli](https://github.com/ardax-corp/coil-cli)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/cli)).

Import what you use (`use path::*` is not allowed):

```coil
use cli::progress::{BarStyle, Bar};
```

## Types

| Name | Description |
|------|-------------|
| [`BarStyle`](/packages/cli/reference/cli/progress/BarStyle) | Bar glyphs. |
| [`Bar`](/packages/cli/reference/cli/progress/Bar) | A progress bar on stderr that redraws its line in place, at most every 80ms. |
| [`Spinner`](/packages/cli/reference/cli/progress/Spinner) | A redrawing spinner; call `tick` from the work loop. |

## Functions

| Name | Description |
|------|-------------|
| [`blocks`](/packages/cli/reference/cli/progress/blocks) | Smooth Unicode blocks: `▕██████▍     ▏`. |
| [`ascii`](/packages/cli/reference/cli/progress/ascii) | Plain ASCII: `[=====>    ]`. |
| [`render_bar`](/packages/cli/reference/cli/progress/render_bar) | The bar itself, `cells` wide inside its ends, for `current` of `total`. |
| [`human_bytes`](/packages/cli/reference/cli/progress/human_bytes) | A byte count in binary units: `12 B`, `1.5 KiB`, `3.2 GiB` (one decimal below 10, none from 10 up). |
| [`human_duration`](/packages/cli/reference/cli/progress/human_duration) | A duration in milliseconds, short: `950ms`, `12s`, `3m05s`, `1h02m`. |
| [`human_rate`](/packages/cli/reference/cli/progress/human_rate) | `12.3k/s`-style count per second; `""` before any time passed. |
| [`eta_ms`](/packages/cli/reference/cli/progress/eta_ms) | Remaining time estimate in ms, or -1 when it cannot be told yet. |
| [`render_line`](/packages/cli/reference/cli/progress/render_line) | A whole progress line, at most `cols` columns: `label ▕████▍    ▏ 45% 450/1000 1.2k/s ETA 3s`. |
| [`dots`](/packages/cli/reference/cli/progress/dots) | Braille spinner frames. |
| [`line_frames`](/packages/cli/reference/cli/progress/line_frames) | ASCII spinner frames. |
| [`render_spinner`](/packages/cli/reference/cli/progress/render_spinner) | One spinner line: frame `tick` (wrapping) of `frames`, then `label`, then the elapsed time once it reaches a second. |
| [`bar`](/packages/cli/reference/cli/progress/fn.bar) | A bar for `total` steps on stderr, `cols` wide. |
| [`spinner`](/packages/cli/reference/cli/progress/fn.spinner) | A spinner on stderr with `label` and the [`dots()`](/packages/cli/reference/cli/progress/dots) frames. |
