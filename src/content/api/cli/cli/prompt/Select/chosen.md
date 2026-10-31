---
slug: "cli/cli/prompt/Select/chosen"
package: "cli"
title: "Select::chosen"
description: "Indices of the checked items (multi) or the current one (single)."
module: "cli::prompt"
kind: "method"
name: "chosen"
parent: "Select"
signature: "pub fn chosen() -> Vec<int>"
import: "use cli::prompt::{Select};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/prompt.hy#L220"
order: 1
---

Indices of the checked items (multi) or the current one (single).

Called on a `Select` value as `value.chosen(…)`.

## Returns

`Vec<int>`

## See also

- [`Select`](/packages/cli/reference/cli/prompt/Select): A scrolling, filterable list: the model behind `select` and `multi_select`, with no terminal attached.
- [`Select::current`](/packages/cli/reference/cli/prompt/Select/current): Index into `items` under the cursor, or -1 when the filter hides everything.
- [`Select::apply`](/packages/cli/reference/cli/prompt/Select/apply): Apply one action and keep the cursor in view.
- [`Select::lines`](/packages/cli/reference/cli/prompt/Select/lines): The list rows to draw, each at most `cols` columns: a `❯` marker on the cursor row and `◉`/`○` boxes for multi-select.
