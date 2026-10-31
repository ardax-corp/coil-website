---
slug: "cli/cli/progress/fn.spinner"
package: "cli"
title: "spinner"
description: "A spinner on stderr with label and the dots() frames. enabled should be whether stderr is a terminal."
module: "cli::progress"
kind: "fn"
name: "spinner"
signature: "fn spinner(string label, bool enabled) -> Spinner"
import: "use cli::progress::{spinner};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/progress.coil#L408"
order: 15
---

A spinner on stderr with `label` and the [`dots()`](/packages/cli/reference/cli/progress/dots) frames. `enabled` should be whether stderr is a terminal.

## Parameters

| Name | Type |
|------|------|
| `label` | `string` |
| `enabled` | `bool` |

## Returns

`Spinner`

## Examples

```coil
use cli::progress::spinner;
use cli::term::stderr_is_tty;
let s = spinner("waiting", stderr_is_tty());
let i = 0;
while i < 1000 {
    s.tick();
    i++;
}
s.finish("ready");
```

## See also

- [`cli::progress::dots`](/packages/cli/reference/cli/progress/dots)
- [`blocks`](/packages/cli/reference/cli/progress/blocks): Smooth Unicode blocks: `▕██████▍ ▏`.
- [`ascii`](/packages/cli/reference/cli/progress/ascii): Plain ASCII: `[=====> ]`.
- [`render_bar`](/packages/cli/reference/cli/progress/render_bar): The bar itself, `cells` wide inside its ends, for `current` of `total`.
- [`human_bytes`](/packages/cli/reference/cli/progress/human_bytes): A byte count in binary units: `12 B`, `1.5 KiB`, `3.2 GiB` (one decimal below 10, none from 10 up).
- [`human_duration`](/packages/cli/reference/cli/progress/human_duration): A duration in milliseconds, short: `950ms`, `12s`, `3m05s`, `1h02m`.
- [`human_rate`](/packages/cli/reference/cli/progress/human_rate): `12.3k/s`-style count per second; `""` before any time passed.
- [`eta_ms`](/packages/cli/reference/cli/progress/eta_ms): Remaining time estimate in ms, or -1 when it cannot be told yet.
