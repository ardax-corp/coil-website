---
slug: "cli/cli/screen/Screen/invalidate"
package: "cli"
title: "Screen::invalidate"
description: "Redraw everything on the next present (after the terminal was cleared by someone else)."
module: "cli::screen"
kind: "method"
name: "invalidate"
parent: "Screen"
signature: "pub fn invalidate()"
import: "use cli::screen::{Screen};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L294"
order: 2
---

Redraw everything on the next [`present`](/packages/cli/reference/cli/screen/Screen/present) (after the terminal was cleared by someone else).

Called on a `Screen` value as `value.invalidate(…)`.

## See also

- [`Screen::present`](/packages/cli/reference/cli/screen/Screen/present)
- [`Screen`](/packages/cli/reference/cli/screen/Screen): Double-buffered presenter.
- [`Screen::frame`](/packages/cli/reference/cli/screen/Screen/frame): The buffer to draw the next frame into (cleared).
- [`Screen::resize`](/packages/cli/reference/cli/screen/Screen/resize)
- [`Screen::cols`](/packages/cli/reference/cli/screen/Screen/cols)
- [`Screen::rows`](/packages/cli/reference/cli/screen/Screen/rows)
