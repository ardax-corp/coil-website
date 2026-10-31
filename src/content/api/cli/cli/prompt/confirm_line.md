---
slug: "cli/cli/prompt/confirm_line"
package: "cli"
title: "confirm_line"
description: "Ask question on out, reading answers from input until one parses. End of input gives fallback."
module: "cli::prompt"
kind: "fn"
name: "confirm_line"
signature: "fn confirm_line(Stream input, Stream out, string question, bool fallback) -> bool"
import: "use cli::prompt::{confirm_line};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/prompt.hy#L352"
order: 7
---

Ask `question` on `out`, reading answers from `input` until one parses. End of input gives `fallback`.

## Parameters

| Name | Type |
|------|------|
| `input` | `Stream` |
| `out` | `Stream` |
| `question` | `string` |
| `fallback` | `bool` |

## Returns

`bool`

## See also

- [`parse_confirm`](/packages/cli/reference/cli/prompt/parse_confirm): `y`/`yes`/`n`/`no` (any case); an empty answer is `fallback`; anything else is `None` (ask again).
- [`confirm_label`](/packages/cli/reference/cli/prompt/confirm_label): `question [Y/n] ` or `question [y/N] `.
- [`fuzzy_match`](/packages/cli/reference/cli/prompt/fuzzy_match): Case-insensitive subsequence match: "cmt" matches "commit".
- [`select_model`](/packages/cli/reference/cli/prompt/select_model): A `Select` over `items`, single or `multi`, showing at most `height` rows (at least 1), with nothing checked and no filter.
- [`input_line`](/packages/cli/reference/cli/prompt/input_line): Ask for a line; an empty answer is `fallback`.
- [`select_line`](/packages/cli/reference/cli/prompt/select_line): Pick one of `items` by number.
- [`select_key_for`](/packages/cli/reference/cli/prompt/select_key_for): The default binding for an input event in a `Select`: arrows, j/k style Ctrl-N/P, space toggles, Ctrl-A toggles all, typing filters.
- [`confirm`](/packages/cli/reference/cli/prompt/confirm): Ask a yes/no question.
