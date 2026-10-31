---
slug: "cli/cli/prompt/Select"
package: "cli"
title: "Select"
description: "A scrolling, filterable list: the model behind select and multi_select, with no terminal attached. cursor and offset index the filtered list (visible). Make one with select_model, feed it SelectKeys and draw lines."
module: "cli::prompt"
kind: "class"
name: "Select"
signature: "class Select"
import: "use cli::prompt::{Select};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/prompt.coil#L142"
order: 2
---

A scrolling, filterable list: the model behind [`select`](/packages/cli/reference/cli/prompt/fn.select) and [`multi_select`](/packages/cli/reference/cli/prompt/multi_select), with no terminal attached. `cursor` and `offset` index the filtered list (`visible`). Make one with [`select_model`](/packages/cli/reference/cli/prompt/select_model), feed it [`SelectKey`](/packages/cli/reference/cli/prompt/SelectKey)s and draw [`lines`](/packages/cli/reference/cli/prompt/Select/lines).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `items` | `Vec<string>` | Every item, filtered or not. |
| `multi` | `bool` | Whether several items can be checked. |
| `checked` | `Vec<bool>` | Per item in `items`: whether it is checked (multi-select). |
| `filter` | `string` | The text typed so far; items fuzzy-match it. |
| `visible` | `Vec<int>` | Indices into `items` of the items the filter lets through. |
| `cursor` | `int` | Cursor row, an index into `visible`. |
| `offset` | `int` | First row of `visible` shown (scroll position). |
| `height` | `int` | Rows the list may use. |

## Methods

| Name | Description |
|------|-------------|
| [`current`](/packages/cli/reference/cli/prompt/Select/current) | Index into `items` under the cursor, or -1 when the filter hides everything. |
| [`chosen`](/packages/cli/reference/cli/prompt/Select/chosen) | Indices of the checked items (multi) or the current one (single). |
| [`apply`](/packages/cli/reference/cli/prompt/Select/apply) | Apply one action and keep the cursor in view. |
| [`lines`](/packages/cli/reference/cli/prompt/Select/lines) | The list rows to draw, each at most `cols` columns: a `❯` marker on the cursor row and `◉`/`○` boxes for multi-select. |

## Examples

```coil
use cli::prompt::{SelectKey, SelectOutcome, select_model};
use tests::assert;
let s = select_model(["build", "commit", "push"], false, 5);
s.apply(SelectKey::FilterChar("cm"));
assert!(s.visible.len() == 1);
assert!(s.apply(SelectKey::Submit) == SelectOutcome::Submit);
assert!(s.current() == 1);
```

## See also

- [`cli::prompt::select`](/packages/cli/reference/cli/prompt/fn.select)
- [`cli::prompt::multi_select`](/packages/cli/reference/cli/prompt/multi_select)
- [`cli::prompt::select_model`](/packages/cli/reference/cli/prompt/select_model)
- [`cli::prompt::SelectKey`](/packages/cli/reference/cli/prompt/SelectKey)
- [`Select::lines`](/packages/cli/reference/cli/prompt/Select/lines)
