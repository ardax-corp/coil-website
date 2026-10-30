---
slug: "cli/cli/prompt/Select/apply"
package: "cli"
title: "Select::apply"
description: "Method Select::apply."
module: "cli::prompt"
kind: "method"
name: "apply"
parent: "Select"
signature: "pub fn apply(SelectKey k) -> SelectOutcome"
import: "use cli::prompt::{Select};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/prompt.hy#L188"
order: 2
---

*No documentation yet.*

Called on a `Select` value as `value.apply(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `SelectKey` |

## Returns

`SelectOutcome`

## See also

- [`Select`](/packages/cli/reference/cli/prompt/Select): A scrolling, filterable list.
- [`Select::current`](/packages/cli/reference/cli/prompt/Select/current): Index into `items` under the cursor, or -1 when the filter hides everything.
- [`Select::chosen`](/packages/cli/reference/cli/prompt/Select/chosen): Indices of the checked items (multi) or the current one (single).
- [`Select::lines`](/packages/cli/reference/cli/prompt/Select/lines): The list rows to draw, each at most `cols` columns: a `❯` marker on the cursor row and `◉`/`○` boxes for multi-select.
