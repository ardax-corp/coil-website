---
slug: "cli/cli/screen/Screen/present"
package: "cli"
title: "Screen::present"
description: "Escapes for the drawn frame (the full screen the first time and after resize/invalidate, else only the changes)."
module: "cli::screen"
kind: "method"
name: "present"
parent: "Screen"
signature: "pub fn present() -> string"
import: "use cli::screen::{Screen};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L278"
order: 1
---

Escapes for the drawn frame (the full screen the first time and after [`resize`](/packages/cli/reference/cli/screen/Screen/resize)/[`invalidate`](/packages/cli/reference/cli/screen/Screen/invalidate), else only the changes).

Called on a `Screen` value as `value.present(…)`.

## Returns

`string`

## See also

- [`Screen::resize`](/packages/cli/reference/cli/screen/Screen/resize)
- [`Screen::invalidate`](/packages/cli/reference/cli/screen/Screen/invalidate)
- [`Screen`](/packages/cli/reference/cli/screen/Screen): Double-buffered presenter.
- [`Screen::frame`](/packages/cli/reference/cli/screen/Screen/frame): The buffer to draw the next frame into (cleared).
- [`Screen::cols`](/packages/cli/reference/cli/screen/Screen/cols)
- [`Screen::rows`](/packages/cli/reference/cli/screen/Screen/rows)
