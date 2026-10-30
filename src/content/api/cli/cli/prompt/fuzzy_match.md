---
slug: "cli/cli/prompt/fuzzy_match"
package: "cli"
title: "fuzzy_match"
description: "Case-insensitive subsequence match: \"cmt\" matches \"commit\"."
module: "cli::prompt"
kind: "fn"
name: "fuzzy_match"
signature: "fn fuzzy_match(string pattern, string text) -> bool"
import: "use cli::prompt::{fuzzy_match};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/prompt.hy#L61"
order: 3
---

Case-insensitive subsequence match: "cmt" matches "commit".

## Parameters

| Name | Type |
|------|------|
| `pattern` | `string` |
| `text` | `string` |

## Returns

`bool`

## See also

- [`parse_confirm`](/packages/cli/reference/cli/prompt/parse_confirm): `y`/`yes`/`n`/`no` (any case); an empty answer is `fallback`; anything else is `None` (ask again).
- [`confirm_label`](/packages/cli/reference/cli/prompt/confirm_label): `question [Y/n] ` or `question [y/N] `.
- [`confirm_line`](/packages/cli/reference/cli/prompt/confirm_line): Ask `question` on `out`, reading answers from `input` until one parses.
- [`input_line`](/packages/cli/reference/cli/prompt/input_line): Ask for a line; an empty answer is `fallback`.
- [`select_line`](/packages/cli/reference/cli/prompt/select_line): Pick one of `items` by number.
- [`select_key_for`](/packages/cli/reference/cli/prompt/select_key_for): The default binding for an input event in a `Select`: arrows, j/k style Ctrl-N/P, space toggles, Ctrl-A toggles all, typing filters.
- [`confirm`](/packages/cli/reference/cli/prompt/confirm): Ask a yes/no question.
- [`input`](/packages/cli/reference/cli/prompt/input): Ask for a line, edited in place on a terminal; an empty answer is `fallback`.
