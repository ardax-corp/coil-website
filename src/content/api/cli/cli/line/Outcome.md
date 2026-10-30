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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/line.hy#L66"
order: 0
---

What the caller should do after an action.

## Variants

### `Continue = 0` {#variant-continue}

### `Submit = 1` {#variant-submit}

### `Cancel = 2` {#variant-cancel}

### `Eof = 3` {#variant-eof}

## See also

- [`LineInput`](/packages/cli/reference/cli/line/LineInput): What `read_line` got.
- [`Edit`](/packages/cli/reference/cli/line/Edit)
