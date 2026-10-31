---
slug: "cli/cli/prompt/select_line"
package: "cli"
title: "select_line"
description: "Pick one of items by number. None at end of input."
module: "cli::prompt"
kind: "fn"
name: "select_line"
signature: "fn select_line(Stream input, Stream out, string question, Vec<string> items) -> Option<int>"
import: "use cli::prompt::{select_line};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/prompt.hy#L392"
order: 9
---

Pick one of `items` by number. `None` at end of input.

## Parameters

| Name | Type |
|------|------|
| `input` | `Stream` |
| `out` | `Stream` |
| `question` | `string` |
| `items` | `Vec<string>` |

## Returns

`Option<int>`

## See also

- [`parse_confirm`](/packages/cli/reference/cli/prompt/parse_confirm): `y`/`yes`/`n`/`no` (any case); an empty answer is `fallback`; anything else is `None` (ask again).
- [`confirm_label`](/packages/cli/reference/cli/prompt/confirm_label): `question [Y/n] ` or `question [y/N] `.
- [`fuzzy_match`](/packages/cli/reference/cli/prompt/fuzzy_match): Case-insensitive subsequence match: "cmt" matches "commit".
- [`select_model`](/packages/cli/reference/cli/prompt/select_model): A `Select` over `items`, single or `multi`, showing at most `height` rows (at least 1), with nothing checked and no filter.
- [`confirm_line`](/packages/cli/reference/cli/prompt/confirm_line): Ask `question` on `out`, reading answers from `input` until one parses.
- [`input_line`](/packages/cli/reference/cli/prompt/input_line): Ask for a line; an empty answer is `fallback`.
- [`select_key_for`](/packages/cli/reference/cli/prompt/select_key_for): The default binding for an input event in a `Select`: arrows, j/k style Ctrl-N/P, space toggles, Ctrl-A toggles all, typing filters.
- [`confirm`](/packages/cli/reference/cli/prompt/confirm): Ask a yes/no question.
