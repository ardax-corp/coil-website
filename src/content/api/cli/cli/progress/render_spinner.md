---
slug: "cli/cli/progress/render_spinner"
package: "cli"
title: "render_spinner"
description: "One spinner line: frame tick (wrapping) of frames, then label, then the elapsed time once it reaches a second."
module: "cli::progress"
kind: "fn"
name: "render_spinner"
signature: "fn render_spinner(Vec<string> frames, int tick, string label, int elapsed_ms) -> string"
import: "use cli::progress::{render_spinner};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/progress.hy#L240"
order: 13
---

One spinner line: frame `tick` (wrapping) of `frames`, then `label`, then the elapsed time once it reaches a second.

## Parameters

| Name | Type |
|------|------|
| `frames` | `Vec<string>` |
| `tick` | `int` |
| `label` | `string` |
| `elapsed_ms` | `int` |

## Returns

`string`

## Examples

```coil
use cli::progress::{line_frames, render_spinner};
use tests::assert;
assert!(render_spinner(line_frames(), 5, "working", 2500) == "\\ working (2s)");
```

## See also

- [`blocks`](/packages/cli/reference/cli/progress/blocks): Smooth Unicode blocks: `▕██████▍ ▏`.
- [`ascii`](/packages/cli/reference/cli/progress/ascii): Plain ASCII: `[=====> ]`.
- [`render_bar`](/packages/cli/reference/cli/progress/render_bar): The bar itself, `cells` wide inside its ends, for `current` of `total`.
- [`human_bytes`](/packages/cli/reference/cli/progress/human_bytes): A byte count in binary units: `12 B`, `1.5 KiB`, `3.2 GiB` (one decimal below 10, none from 10 up).
- [`human_duration`](/packages/cli/reference/cli/progress/human_duration): A duration in milliseconds, short: `950ms`, `12s`, `3m05s`, `1h02m`.
- [`human_rate`](/packages/cli/reference/cli/progress/human_rate): `12.3k/s`-style count per second; `""` before any time passed.
- [`eta_ms`](/packages/cli/reference/cli/progress/eta_ms): Remaining time estimate in ms, or -1 when it cannot be told yet.
- [`render_line`](/packages/cli/reference/cli/progress/render_line): A whole progress line, at most `cols` columns: `label ▕████▍ ▏ 45% 450/1000 1.2k/s ETA 3s`.
