---
slug: "cli/cli/screen/BoxChars"
package: "cli"
title: "BoxChars"
description: "Box-drawing characters for Buffer.draw_box."
module: "cli::screen"
kind: "class"
name: "BoxChars"
signature: "class BoxChars"
import: "use cli::screen::{BoxChars};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L29"
order: 1
---

Box-drawing characters for [`Buffer.draw_box`](/packages/cli/reference/cli/screen/Buffer/draw_box).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `tl` | `string` |  |
| `tr` | `string` |  |
| `bl` | `string` |  |
| `br` | `string` |  |
| `h` | `string` |  |
| `v` | `string` |  |

## See also

- [`Buffer::draw_box`](/packages/cli/reference/cli/screen/Buffer/draw_box)
- [`Cell`](/packages/cli/reference/cli/screen/Cell): One cell: the text drawn there (one character plus any zero-width marks) and its style.
- [`Buffer`](/packages/cli/reference/cli/screen/Buffer)
- [`Screen`](/packages/cli/reference/cli/screen/Screen): Double-buffered presenter.
