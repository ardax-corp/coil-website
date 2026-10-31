---
slug: "cli/cli/progress/human_bytes"
package: "cli"
title: "human_bytes"
description: "A byte count in binary units: 12 B, 1.5 KiB, 3.2 GiB (one decimal below 10, none from 10 up)."
module: "cli::progress"
kind: "fn"
name: "human_bytes"
signature: "fn human_bytes(int n) -> string"
import: "use cli::progress::{human_bytes};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/progress.hy#L108"
order: 6
---

A byte count in binary units: `12 B`, `1.5 KiB`, `3.2 GiB` (one decimal below 10, none from 10 up).

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`string`

## Examples

```coil
use cli::progress::{human_bytes, human_duration};
use tests::assert;
assert!(human_bytes(12) == "12 B");
assert!(human_bytes(1536) == "1.5 KiB");
assert!(human_duration(185000) == "3m05s");
```

## See also

- [`blocks`](/packages/cli/reference/cli/progress/blocks): Smooth Unicode blocks: `▕██████▍ ▏`.
- [`ascii`](/packages/cli/reference/cli/progress/ascii): Plain ASCII: `[=====> ]`.
- [`render_bar`](/packages/cli/reference/cli/progress/render_bar): The bar itself, `cells` wide inside its ends, for `current` of `total`.
- [`human_duration`](/packages/cli/reference/cli/progress/human_duration): A duration in milliseconds, short: `950ms`, `12s`, `3m05s`, `1h02m`.
- [`human_rate`](/packages/cli/reference/cli/progress/human_rate): `12.3k/s`-style count per second; `""` before any time passed.
- [`eta_ms`](/packages/cli/reference/cli/progress/eta_ms): Remaining time estimate in ms, or -1 when it cannot be told yet.
- [`render_line`](/packages/cli/reference/cli/progress/render_line): A whole progress line, at most `cols` columns: `label ▕████▍ ▏ 45% 450/1000 1.2k/s ETA 3s`.
- [`dots`](/packages/cli/reference/cli/progress/dots): Braille spinner frames.
