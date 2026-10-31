---
slug: "cli/cli/progress/human_rate"
package: "cli"
title: "human_rate"
description: "12.3k/s-style count per second; \"\" before any time passed."
module: "cli::progress"
kind: "fn"
name: "human_rate"
signature: "fn human_rate(int count, int elapsed_ms) -> string"
import: "use cli::progress::{human_rate};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/progress.hy#L155"
order: 8
---

`12.3k/s`-style count per second; `""` before any time passed.

## Parameters

| Name | Type |
|------|------|
| `count` | `int` |
| `elapsed_ms` | `int` |

## Returns

`string`

## See also

- [`blocks`](/packages/cli/reference/cli/progress/blocks): Smooth Unicode blocks: `▕██████▍ ▏`.
- [`ascii`](/packages/cli/reference/cli/progress/ascii): Plain ASCII: `[=====> ]`.
- [`render_bar`](/packages/cli/reference/cli/progress/render_bar): The bar itself, `cells` wide inside its ends, for `current` of `total`.
- [`human_bytes`](/packages/cli/reference/cli/progress/human_bytes): A byte count in binary units: `12 B`, `1.5 KiB`, `3.2 GiB` (one decimal below 10, none from 10 up).
- [`human_duration`](/packages/cli/reference/cli/progress/human_duration): A duration in milliseconds, short: `950ms`, `12s`, `3m05s`, `1h02m`.
- [`eta_ms`](/packages/cli/reference/cli/progress/eta_ms): Remaining time estimate in ms, or -1 when it cannot be told yet.
- [`render_line`](/packages/cli/reference/cli/progress/render_line): A whole progress line, at most `cols` columns: `label ▕████▍ ▏ 45% 450/1000 1.2k/s ETA 3s`.
- [`dots`](/packages/cli/reference/cli/progress/dots): Braille spinner frames.
