---
slug: "cli/cli/ansi/CursorShape"
package: "cli"
title: "CursorShape"
description: "Cursor shapes for cursor_shape."
module: "cli::ansi"
kind: "enum"
name: "CursorShape"
signature: "enum CursorShape"
import: "use cli::ansi::{CursorShape};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/ansi.hy#L112"
order: 0
---

Cursor shapes for [`cursor_shape`](/packages/cli/reference/cli/ansi/cursor_shape).

## Variants

### `Default = 0` {#variant-default}

The terminal's configured shape.

### `BlinkingBlock = 1` {#variant-blinkingblock}

A blinking block.

### `Block = 2` {#variant-block}

A steady block.

### `BlinkingUnderline = 3` {#variant-blinkingunderline}

A blinking underline.

### `Underline = 4` {#variant-underline}

A steady underline.

### `BlinkingBar = 5` {#variant-blinkingbar}

A blinking vertical bar.

### `Bar = 6` {#variant-bar}

A steady vertical bar (the usual insert-mode cursor).

## See also

- [`cli::ansi::cursor_shape`](/packages/cli/reference/cli/ansi/cursor_shape)
