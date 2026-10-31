---
slug: "cli/cli/prompt/SelectOutcome"
package: "cli"
title: "SelectOutcome"
description: "What the caller should do after Select.apply."
module: "cli::prompt"
kind: "enum"
name: "SelectOutcome"
signature: "enum SelectOutcome"
import: "use cli::prompt::{SelectOutcome};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/prompt.hy#L117"
order: 1
---

What the caller should do after [`Select.apply`](/packages/cli/reference/cli/prompt/Select/apply).

## Variants

### `Continue = 0` {#variant-continue}

Keep going: redraw and read the next key.

### `Submit = 1` {#variant-submit}

The choice was accepted; read it with `chosen` or `current`.

### `Cancel = 2` {#variant-cancel}

The choice was abandoned.

## See also

- [`Select::apply`](/packages/cli/reference/cli/prompt/Select/apply)
- [`SelectKey`](/packages/cli/reference/cli/prompt/SelectKey): One action on a `Select` list, applied with `Select.apply`.
