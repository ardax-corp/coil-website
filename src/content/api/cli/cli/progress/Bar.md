---
slug: "cli/cli/progress/Bar"
package: "cli"
title: "Bar"
description: "A progress bar on stderr that redraws its line in place, at most every 80ms. When enabled is false (stderr is not a terminal) nothing is written, so logs stay clean."
module: "cli::progress"
kind: "class"
name: "Bar"
signature: "class Bar"
import: "use cli::progress::{Bar};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/progress.hy#L281"
order: 1
---

A progress bar on stderr that redraws its line in place, at most every 80ms. When `enabled` is false (stderr is not a terminal) nothing is written, so logs stay clean.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `total` | `int` | Steps for a full bar. |
| `current` | `int` | Steps done so far. |
| `label` | `string` | Text in front of the bar ("" for none). |
| `style` | `BarStyle` | The glyphs; [`blocks()`](/packages/cli/reference/cli/progress/blocks) unless changed. |
| `cols` | `int` | Columns to fit in (the terminal width). |
| `enabled` | `bool` | Draw at all. Pass whether stderr is a terminal. |

## Methods

| Name | Description |
|------|-------------|
| [`set_label`](/packages/cli/reference/cli/progress/Bar/set_label) | Change the label and redraw (throttled). |
| [`inc`](/packages/cli/reference/cli/progress/Bar/inc) | Advance by `n` steps and redraw (throttled). |
| [`set`](/packages/cli/reference/cli/progress/Bar/set) | Set the steps done to `n` and redraw (throttled). |
| [`elapsed_ms`](/packages/cli/reference/cli/progress/Bar/elapsed_ms) | Milliseconds since the bar was made. |
| [`line`](/packages/cli/reference/cli/progress/Bar/line) | The line as it would be drawn now (see [`render_line`](/packages/cli/reference/cli/progress/render_line)). |
| [`draw`](/packages/cli/reference/cli/progress/Bar/draw) | Redraw now if enough time passed (or `force`). |
| [`finish`](/packages/cli/reference/cli/progress/Bar/finish) | Final draw and newline; `message` replaces the bar when not "". |
| [`clear`](/packages/cli/reference/cli/progress/Bar/clear) | Remove the bar's line. |

## Examples

```coil
use cli::progress::bar;
use cli::term::{columns, stderr_is_tty};
let b = bar(1000, columns(), stderr_is_tty());
b.set_label("copying");
let i = 0;
while i < 1000 {
    b.inc(1);
    i++;
}
b.finish("done");
```

## See also

- [`cli::progress::blocks`](/packages/cli/reference/cli/progress/blocks)
- [`BarStyle`](/packages/cli/reference/cli/progress/BarStyle): Bar glyphs.
- [`Spinner`](/packages/cli/reference/cli/progress/Spinner): A redrawing spinner; call `tick` from the work loop.
