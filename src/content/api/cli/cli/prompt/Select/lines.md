---
slug: "cli/cli/prompt/Select/lines"
package: "cli"
title: "Select::lines"
description: "The list rows to draw, each at most cols columns: a ❯ marker on the cursor row and ◉/○ boxes for multi-select."
module: "cli::prompt"
kind: "method"
name: "lines"
parent: "Select"
signature: "pub fn lines(int cols) -> Vec<string>"
import: "use cli::prompt::{Select};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/prompt.hy#L319"
order: 3
---

The list rows to draw, each at most `cols` columns: a `❯` marker on the cursor row and `◉`/`○` boxes for multi-select.

Called on a `Select` value as `value.lines(…)`.

## Parameters

| Name | Type |
|------|------|
| `cols` | `int` |

## Returns

`Vec<string>`

## See also

- [`Select`](/packages/cli/reference/cli/prompt/Select): A scrolling, filterable list: the model behind `select` and `multi_select`, with no terminal attached.
- [`Select::current`](/packages/cli/reference/cli/prompt/Select/current): Index into `items` under the cursor, or -1 when the filter hides everything.
- [`Select::chosen`](/packages/cli/reference/cli/prompt/Select/chosen): Indices of the checked items (multi) or the current one (single).
- [`Select::apply`](/packages/cli/reference/cli/prompt/Select/apply): Apply one action and keep the cursor in view.
