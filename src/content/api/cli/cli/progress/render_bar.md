---
slug: "cli/cli/progress/render_bar"
package: "cli"
title: "render_bar"
description: "The bar itself, cells wide inside its ends, for current of total. current is clamped to 0..=total; a total of 0 draws an empty bar."
module: "cli::progress"
kind: "fn"
name: "render_bar"
signature: "fn render_bar(BarStyle st, int current, int total, int cells) -> string"
import: "use cli::progress::{render_bar};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/progress.coil#L69"
order: 5
---

The bar itself, `cells` wide inside its ends, for `current` of `total`. `current` is clamped to `0..=total`; a `total` of 0 draws an empty bar.

## Parameters

| Name | Type |
|------|------|
| `st` | `BarStyle` |
| `current` | `int` |
| `total` | `int` |
| `cells` | `int` |

## Returns

`string`

## Examples

```coil
use cli::progress::{ascii, render_bar};
use tests::assert;
assert!(render_bar(ascii(), 5, 10, 10) == "[=====     ]");
assert!(render_bar(ascii(), 55, 100, 10) == "[=====>    ]");
assert!(render_bar(ascii(), 20, 10, 4) == "[====]");
```

## See also

- [`blocks`](/packages/cli/reference/cli/progress/blocks): Smooth Unicode blocks: `▕██████▍ ▏`.
- [`ascii`](/packages/cli/reference/cli/progress/ascii): Plain ASCII: `[=====> ]`.
- [`human_bytes`](/packages/cli/reference/cli/progress/human_bytes): A byte count in binary units: `12 B`, `1.5 KiB`, `3.2 GiB` (one decimal below 10, none from 10 up).
- [`human_duration`](/packages/cli/reference/cli/progress/human_duration): A duration in milliseconds, short: `950ms`, `12s`, `3m05s`, `1h02m`.
- [`human_rate`](/packages/cli/reference/cli/progress/human_rate): `12.3k/s`-style count per second; `""` before any time passed.
- [`eta_ms`](/packages/cli/reference/cli/progress/eta_ms): Remaining time estimate in ms, or -1 when it cannot be told yet.
- [`render_line`](/packages/cli/reference/cli/progress/render_line): A whole progress line, at most `cols` columns: `label ▕████▍ ▏ 45% 450/1000 1.2k/s ETA 3s`.
- [`dots`](/packages/cli/reference/cli/progress/dots): Braille spinner frames.
