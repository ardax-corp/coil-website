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
source: "https://github.com/ardax-corp/coil-cli/blob/05669fce32782c1a5cb55fb2ecff2e1215cd0bfc/src/cli/line.coil#L580"
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
