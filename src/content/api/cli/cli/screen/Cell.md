---
slug: "cli/cli/screen/Cell"
package: "cli"
title: "Cell"
description: "One cell: the text drawn there (one character plus any zero-width marks) and its style. A wide character's second cell holds \"\"."
module: "cli::screen"
kind: "class"
name: "Cell"
signature: "class Cell"
import: "use cli::screen::{Cell};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L15"
order: 0
---

One cell: the text drawn there (one character plus any zero-width marks) and its style. A wide character's second cell holds "".

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `text` | `string` |  |
| `style` | `Style` |  |

## See also

- [`BoxChars`](/packages/cli/reference/cli/screen/BoxChars): Box-drawing characters for `Buffer.draw_box`.
- [`Buffer`](/packages/cli/reference/cli/screen/Buffer)
- [`Screen`](/packages/cli/reference/cli/screen/Screen): Double-buffered presenter.
