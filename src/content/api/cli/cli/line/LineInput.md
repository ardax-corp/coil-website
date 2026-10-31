---
slug: "cli/cli/line/LineInput"
package: "cli"
title: "LineInput"
description: "What read_line got."
module: "cli::line"
kind: "enum"
name: "LineInput"
signature: "enum LineInput"
import: "use cli::line::{LineInput};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/line.hy#L580"
order: 4
---

What [`read_line`](/packages/cli/reference/cli/line/read_line) got.

## Variants

### `Line(string)` {#variant-line}

An accepted line (without the newline).

### `Cancelled` {#variant-cancelled}

Ctrl-C (or Esc).

### `Eof` {#variant-eof}

End of input (Ctrl-D on an empty line, or stdin closed).

## See also

- [`cli::line::read_line`](/packages/cli/reference/cli/line/read_line)
- [`Edit`](/packages/cli/reference/cli/line/Edit): One line-editor action, applied with `Editor.apply`.
- [`Outcome`](/packages/cli/reference/cli/line/Outcome): What the caller should do after an action.
