---
slug: "cli/cli/line/Outcome"
package: "cli"
title: "Outcome"
description: "What the caller should do after an action."
module: "cli::line"
kind: "enum"
name: "Outcome"
signature: "enum Outcome"
import: "use cli::line::{Outcome};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/line.hy#L83"
order: 1
---

What the caller should do after an action.

## Variants

### `Continue = 0` {#variant-continue}

Keep editing.

### `Submit = 1` {#variant-submit}

The line was accepted; read it with [`Editor.take`](/packages/cli/reference/cli/line/Editor/take).

### `Cancel = 2` {#variant-cancel}

The line was abandoned.

### `Eof = 3` {#variant-eof}

End of input on an empty line.

## See also

- [`Editor::take`](/packages/cli/reference/cli/line/Editor/take)
- [`Edit`](/packages/cli/reference/cli/line/Edit): One line-editor action, applied with `Editor.apply`.
- [`LineInput`](/packages/cli/reference/cli/line/LineInput): What `read_line` got.
