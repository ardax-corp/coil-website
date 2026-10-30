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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/line.hy#L498"
order: 3
---

What [`read_line`](/packages/cli/reference/cli/line/read_line) got.

## Variants

### `Line(string)` {#variant-line}

### `Cancelled` {#variant-cancelled}

Ctrl-C (or Esc).

### `Eof` {#variant-eof}

End of input (Ctrl-D on an empty line, or stdin closed).

## See also

- [`cli::line::read_line`](/packages/cli/reference/cli/line/read_line)
- [`Outcome`](/packages/cli/reference/cli/line/Outcome): What the caller should do after an action.
- [`Edit`](/packages/cli/reference/cli/line/Edit)
