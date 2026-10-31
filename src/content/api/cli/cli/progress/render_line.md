---
slug: "cli/cli/progress/render_line"
package: "cli"
title: "render_line"
description: "A whole progress line, at most cols columns: label ▕████▍ ▏ 45% 450/1000 1.2k/s ETA 3s. The bar takes what the text leaves (at most 60 cells; under 10 it is left out and the text is truncated to fit)."
module: "cli::progress"
kind: "fn"
name: "render_line"
signature: "fn render_line( BarStyle st, string label, int current, int total, int elapsed_ms, int cols, ) -> string"
import: "use cli::progress::{render_line};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/progress.hy#L181"
order: 10
---

A whole progress line, at most `cols` columns: `label ▕████▍    ▏ 45% 450/1000 1.2k/s ETA 3s`. The bar takes what the text leaves (at most 60 cells; under 10 it is left out and the text is truncated to fit).

## Parameters

| Name | Type |
|------|------|
| `st` | `BarStyle` |
| `label` | `string` |
| `current` | `int` |
| `total` | `int` |
| `elapsed_ms` | `int` |
| `cols` | `int` |

## Returns

`string`

## See also

- [`blocks`](/packages/cli/reference/cli/progress/blocks): Smooth Unicode blocks: `▕██████▍ ▏`.
- [`ascii`](/packages/cli/reference/cli/progress/ascii): Plain ASCII: `[=====> ]`.
- [`render_bar`](/packages/cli/reference/cli/progress/render_bar): The bar itself, `cells` wide inside its ends, for `current` of `total`.
- [`human_bytes`](/packages/cli/reference/cli/progress/human_bytes): A byte count in binary units: `12 B`, `1.5 KiB`, `3.2 GiB` (one decimal below 10, none from 10 up).
- [`human_duration`](/packages/cli/reference/cli/progress/human_duration): A duration in milliseconds, short: `950ms`, `12s`, `3m05s`, `1h02m`.
- [`human_rate`](/packages/cli/reference/cli/progress/human_rate): `12.3k/s`-style count per second; `""` before any time passed.
- [`eta_ms`](/packages/cli/reference/cli/progress/eta_ms): Remaining time estimate in ms, or -1 when it cannot be told yet.
- [`dots`](/packages/cli/reference/cli/progress/dots): Braille spinner frames.
