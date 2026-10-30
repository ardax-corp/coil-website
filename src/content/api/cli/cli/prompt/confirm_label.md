---
slug: "cli/cli/prompt/confirm_label"
package: "cli"
title: "confirm_label"
description: "question [Y/n] or question [y/N] ."
module: "cli::prompt"
kind: "fn"
name: "confirm_label"
signature: "fn confirm_label(string question, bool fallback) -> string"
import: "use cli::prompt::{confirm_label};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/prompt.hy#L53"
order: 2
---

`question [Y/n] ` or `question [y/N] `.

## Parameters

| Name | Type |
|------|------|
| `question` | `string` |
| `fallback` | `bool` |

## Returns

`string`

## See also

- [`parse_confirm`](/packages/cli/reference/cli/prompt/parse_confirm): `y`/`yes`/`n`/`no` (any case); an empty answer is `fallback`; anything else is `None` (ask again).
- [`fuzzy_match`](/packages/cli/reference/cli/prompt/fuzzy_match): Case-insensitive subsequence match: "cmt" matches "commit".
- [`confirm_line`](/packages/cli/reference/cli/prompt/confirm_line): Ask `question` on `out`, reading answers from `input` until one parses.
- [`input_line`](/packages/cli/reference/cli/prompt/input_line): Ask for a line; an empty answer is `fallback`.
- [`select_line`](/packages/cli/reference/cli/prompt/select_line): Pick one of `items` by number.
- [`select_key_for`](/packages/cli/reference/cli/prompt/select_key_for): The default binding for an input event in a `Select`: arrows, j/k style Ctrl-N/P, space toggles, Ctrl-A toggles all, typing filters.
- [`confirm`](/packages/cli/reference/cli/prompt/confirm): Ask a yes/no question.
- [`input`](/packages/cli/reference/cli/prompt/input): Ask for a line, edited in place on a terminal; an empty answer is `fallback`.
