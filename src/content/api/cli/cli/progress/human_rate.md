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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/progress.hy#L128"
order: 9
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
- [`human_bytes`](/packages/cli/reference/cli/progress/human_bytes): `1.5 KiB`, `12 B`, `3.2 GiB`.
- [`one_decimal`](/packages/cli/reference/cli/progress/one_decimal): `v` with one decimal place, `10.0` and up without.
- [`human_duration`](/packages/cli/reference/cli/progress/human_duration): `950ms`, `12s`, `3m05s`, `1h02m`.
- [`eta_ms`](/packages/cli/reference/cli/progress/eta_ms): Remaining time estimate in ms, or -1 when it cannot be told yet.
- [`render_line`](/packages/cli/reference/cli/progress/render_line): A whole progress line, at most `cols` columns: `label ▕████▍ ▏ 45% 450/1000 1.2k/s ETA 3s`.
