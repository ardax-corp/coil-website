---
slug: "cli/cli/progress/render_line"
package: "cli"
title: "render_line"
description: "A whole progress line, at most cols columns: label ▕████▍ ▏ 45% 450/1000 1.2k/s ETA 3s. The bar takes what the text leaves (at least 10 cells, else it is left out)."
module: "cli::progress"
kind: "fn"
name: "render_line"
signature: "fn render_line( BarStyle st, string label, int current, int total, int elapsed_ms, int cols, ) -> string"
import: "use cli::progress::{render_line};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/progress.hy#L153"
order: 11
---

A whole progress line, at most `cols` columns: `label ▕████▍    ▏ 45% 450/1000 1.2k/s ETA 3s`. The bar takes what the text leaves (at least 10 cells, else it is left out).

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
- [`human_bytes`](/packages/cli/reference/cli/progress/human_bytes): `1.5 KiB`, `12 B`, `3.2 GiB`.
- [`one_decimal`](/packages/cli/reference/cli/progress/one_decimal): `v` with one decimal place, `10.0` and up without.
- [`human_duration`](/packages/cli/reference/cli/progress/human_duration): `950ms`, `12s`, `3m05s`, `1h02m`.
- [`human_rate`](/packages/cli/reference/cli/progress/human_rate): `12.3k/s`-style count per second; `""` before any time passed.
- [`eta_ms`](/packages/cli/reference/cli/progress/eta_ms): Remaining time estimate in ms, or -1 when it cannot be told yet.
