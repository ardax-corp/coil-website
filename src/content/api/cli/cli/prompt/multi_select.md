---
slug: "cli/cli/prompt/multi_select"
package: "cli"
title: "multi_select"
description: "Pick any of items (space toggles, Ctrl-A toggles all, Enter accepts). Off a terminal, a line of numbers separated by spaces or commas is read. None when cancelled or at end of input."
module: "cli::prompt"
kind: "fn"
name: "multi_select"
signature: "fn multi_select(string question, Vec<string> items) -> Result<Option<Vec<int>>, TtyError>"
import: "use cli::prompt::{multi_select};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/prompt.hy#L700"
order: 16
---

Pick any of `items` (space toggles, Ctrl-A toggles all, Enter accepts). Off a terminal, a line of numbers separated by spaces or commas is read. `None` when cancelled or at end of input.

## Parameters

| Name | Type |
|------|------|
| `question` | `string` |
| `items` | `Vec<string>` |

## Returns

`Result<Option<Vec<int>>, TtyError>`

## See also

- [`parse_confirm`](/packages/cli/reference/cli/prompt/parse_confirm): `y`/`yes`/`n`/`no` (any case); an empty answer is `fallback`; anything else is `None` (ask again).
- [`confirm_label`](/packages/cli/reference/cli/prompt/confirm_label): `question [Y/n] ` or `question [y/N] `.
- [`fuzzy_match`](/packages/cli/reference/cli/prompt/fuzzy_match): Case-insensitive subsequence match: "cmt" matches "commit".
- [`select_model`](/packages/cli/reference/cli/prompt/select_model): A `Select` over `items`, single or `multi`, showing at most `height` rows (at least 1), with nothing checked and no filter.
- [`confirm_line`](/packages/cli/reference/cli/prompt/confirm_line): Ask `question` on `out`, reading answers from `input` until one parses.
- [`input_line`](/packages/cli/reference/cli/prompt/input_line): Ask for a line; an empty answer is `fallback`.
- [`select_line`](/packages/cli/reference/cli/prompt/select_line): Pick one of `items` by number.
- [`select_key_for`](/packages/cli/reference/cli/prompt/select_key_for): The default binding for an input event in a `Select`: arrows, j/k style Ctrl-N/P, space toggles, Ctrl-A toggles all, typing filters.
