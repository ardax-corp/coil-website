---
slug: "cli/cli/prompt/Select/apply"
package: "cli"
title: "Select::apply"
description: "Apply one action and keep the cursor in view. Typing into the filter moves the cursor back to the top."
module: "cli::prompt"
kind: "method"
name: "apply"
parent: "Select"
signature: "pub fn apply(SelectKey k) -> SelectOutcome"
import: "use cli::prompt::{Select};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/prompt.hy#L241"
order: 2
---

Apply one action and keep the cursor in view. Typing into the filter moves the cursor back to the top.

Called on a `Select` value as `value.apply(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `SelectKey` |

## Returns

`SelectOutcome`

## See also

- [`Select`](/packages/cli/reference/cli/prompt/Select): A scrolling, filterable list: the model behind `select` and `multi_select`, with no terminal attached.
- [`Select::current`](/packages/cli/reference/cli/prompt/Select/current): Index into `items` under the cursor, or -1 when the filter hides everything.
- [`Select::chosen`](/packages/cli/reference/cli/prompt/Select/chosen): Indices of the checked items (multi) or the current one (single).
- [`Select::lines`](/packages/cli/reference/cli/prompt/Select/lines): The list rows to draw, each at most `cols` columns: a `❯` marker on the cursor row and `◉`/`○` boxes for multi-select.
