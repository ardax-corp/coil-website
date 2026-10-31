---
slug: "cli/cli/prompt/Select/current"
package: "cli"
title: "Select::current"
description: "Index into items under the cursor, or -1 when the filter hides everything."
module: "cli::prompt"
kind: "method"
name: "current"
parent: "Select"
signature: "pub fn current() -> int"
import: "use cli::prompt::{Select};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/prompt.hy#L212"
order: 0
---

Index into `items` under the cursor, or -1 when the filter hides everything.

Called on a `Select` value as `value.current(…)`.

## Returns

`int`

## See also

- [`Select`](/packages/cli/reference/cli/prompt/Select): A scrolling, filterable list: the model behind `select` and `multi_select`, with no terminal attached.
- [`Select::chosen`](/packages/cli/reference/cli/prompt/Select/chosen): Indices of the checked items (multi) or the current one (single).
- [`Select::apply`](/packages/cli/reference/cli/prompt/Select/apply): Apply one action and keep the cursor in view.
- [`Select::lines`](/packages/cli/reference/cli/prompt/Select/lines): The list rows to draw, each at most `cols` columns: a `❯` marker on the cursor row and `◉`/`○` boxes for multi-select.
