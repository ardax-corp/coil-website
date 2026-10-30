---
slug: "cli/cli/screen/render_full"
package: "cli"
title: "render_full"
description: "The whole buffer: clear, then every row."
module: "cli::screen"
kind: "fn"
name: "render_full"
signature: "fn render_full(Buffer next, ColorLevel level) -> string"
import: "use cli::screen::{render_full};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L252"
order: 5
---

The whole buffer: clear, then every row.

## Parameters

| Name | Type |
|------|------|
| `next` | `Buffer` |
| `level` | `ColorLevel` |

## Returns

`string`

## See also

- [`render_diff`](/packages/cli/reference/cli/screen/render_diff): Escapes that turn a terminal showing `prev` into `next` (same size): only changed cells are written, with cursor moves between runs and an SGR change only when the style changes.
