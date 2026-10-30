---
slug: "cli/cli/screen/render_diff"
package: "cli"
title: "render_diff"
description: "Escapes that turn a terminal showing prev into next (same size): only changed cells are written, with cursor moves between runs and an SGR change only when the style changes. Ends with attributes reset."
module: "cli::screen"
kind: "fn"
name: "render_diff"
signature: "fn render_diff(Buffer prev, Buffer next, ColorLevel level) -> string"
import: "use cli::screen::{render_diff};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L213"
order: 4
---

Escapes that turn a terminal showing `prev` into `next` (same size): only changed cells are written, with cursor moves between runs and an SGR change only when the style changes. Ends with attributes reset.

## Parameters

| Name | Type |
|------|------|
| `prev` | `Buffer` |
| `next` | `Buffer` |
| `level` | `ColorLevel` |

## Returns

`string`

## See also

- [`render_full`](/packages/cli/reference/cli/screen/render_full): The whole buffer: clear, then every row.
