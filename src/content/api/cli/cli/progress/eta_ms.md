---
slug: "cli/cli/progress/eta_ms"
package: "cli"
title: "eta_ms"
description: "Remaining time estimate in ms, or -1 when it cannot be told yet."
module: "cli::progress"
kind: "fn"
name: "eta_ms"
signature: "fn eta_ms(int current, int total, int elapsed_ms) -> int"
import: "use cli::progress::{eta_ms};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/progress.hy#L170"
order: 9
---

Remaining time estimate in ms, or -1 when it cannot be told yet.

## Parameters

| Name | Type |
|------|------|
| `current` | `int` |
| `total` | `int` |
| `elapsed_ms` | `int` |

## Returns

`int`

## See also

- [`blocks`](/packages/cli/reference/cli/progress/blocks): Smooth Unicode blocks: `▕██████▍ ▏`.
- [`ascii`](/packages/cli/reference/cli/progress/ascii): Plain ASCII: `[=====> ]`.
- [`render_bar`](/packages/cli/reference/cli/progress/render_bar): The bar itself, `cells` wide inside its ends, for `current` of `total`.
- [`human_bytes`](/packages/cli/reference/cli/progress/human_bytes): A byte count in binary units: `12 B`, `1.5 KiB`, `3.2 GiB` (one decimal below 10, none from 10 up).
- [`human_duration`](/packages/cli/reference/cli/progress/human_duration): A duration in milliseconds, short: `950ms`, `12s`, `3m05s`, `1h02m`.
- [`human_rate`](/packages/cli/reference/cli/progress/human_rate): `12.3k/s`-style count per second; `""` before any time passed.
- [`render_line`](/packages/cli/reference/cli/progress/render_line): A whole progress line, at most `cols` columns: `label ▕████▍ ▏ 45% 450/1000 1.2k/s ETA 3s`.
- [`dots`](/packages/cli/reference/cli/progress/dots): Braille spinner frames.
