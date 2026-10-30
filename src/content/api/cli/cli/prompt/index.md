---
slug: "cli/cli/prompt/index"
package: "cli"
title: "cli::prompt"
description: "Prompts: confirm, input, password, and single or multi select."
module: "cli::prompt"
kind: "module"
name: "cli::prompt"
origin: "package"
auto: false
order: 7
---

Part of the [cli](/packages/cli) package ([coil-cli](https://github.com/ardax-corp/coil-cli)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/cli)).

Import what you use (`use path::*` is not allowed):

```coil
use cli::prompt::{Select, parse_confirm};
```

## Types

| Name | Description |
|------|-------------|
| [`Select`](/packages/cli/reference/cli/prompt/Select) | A scrolling, filterable list. |
| [`SelectKey`](/packages/cli/reference/cli/prompt/SelectKey) |  |
| [`SelectOutcome`](/packages/cli/reference/cli/prompt/SelectOutcome) |  |

## Functions

| Name | Description |
|------|-------------|
| [`parse_confirm`](/packages/cli/reference/cli/prompt/parse_confirm) | `y`/`yes`/`n`/`no` (any case); an empty answer is `fallback`; anything else is `None` (ask again). |
| [`confirm_label`](/packages/cli/reference/cli/prompt/confirm_label) | `question [Y/n] ` or `question [y/N] `. |
| [`fuzzy_match`](/packages/cli/reference/cli/prompt/fuzzy_match) | Case-insensitive subsequence match: "cmt" matches "commit". |
| [`confirm_line`](/packages/cli/reference/cli/prompt/confirm_line) | Ask `question` on `out`, reading answers from `input` until one parses. |
| [`input_line`](/packages/cli/reference/cli/prompt/input_line) | Ask for a line; an empty answer is `fallback`. |
| [`select_line`](/packages/cli/reference/cli/prompt/select_line) | Pick one of `items` by number. |
| [`select_key_for`](/packages/cli/reference/cli/prompt/select_key_for) | The default binding for an input event in a [`Select`](/packages/cli/reference/cli/prompt/Select): arrows, j/k style Ctrl-N/P, space toggles, Ctrl-A toggles all, typing filters. |
| [`confirm`](/packages/cli/reference/cli/prompt/confirm) | Ask a yes/no question. |
| [`input`](/packages/cli/reference/cli/prompt/input) | Ask for a line, edited in place on a terminal; an empty answer is `fallback`. |
| [`password`](/packages/cli/reference/cli/prompt/password) | Ask for a secret; each character shows as `*`. |
| [`select_block`](/packages/cli/reference/cli/prompt/select_block) | Lines for the whole select block: the question (with the filter) and the list, or a note when the filter hides everything. |
| [`select`](/packages/cli/reference/cli/prompt/fn.select) | Pick one of `items` with the arrow keys (type to filter). |
| [`multi_select`](/packages/cli/reference/cli/prompt/multi_select) | Pick any of `items` (space toggles, Ctrl-A toggles all, Enter accepts). |
| [`parse_choices`](/packages/cli/reference/cli/prompt/parse_choices) | Parse `1 3,4` into 0-based indices below `n`; `None` if any part is not a number in 1..=n. |
| [`multi_select_line`](/packages/cli/reference/cli/prompt/multi_select_line) | Pick several of `items` by number from a stream. |
