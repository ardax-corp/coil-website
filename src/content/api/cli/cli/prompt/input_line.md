---
slug: "cli/cli/prompt/input_line"
package: "cli"
title: "input_line"
description: "Ask for a line; an empty answer is fallback. None at end of input."
module: "cli::prompt"
kind: "fn"
name: "input_line"
signature: "fn input_line(Stream input, Stream out, string question, string fallback) -> Option<string>"
import: "use cli::prompt::{input_line};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/prompt.hy#L321"
order: 5
---

Ask for a line; an empty answer is `fallback`. `None` at end of input.

## Parameters

| Name | Type |
|------|------|
| `input` | `Stream` |
| `out` | `Stream` |
| `question` | `string` |
| `fallback` | `string` |

## Returns

`Option<string>`

## See also

- [`parse_confirm`](/packages/cli/reference/cli/prompt/parse_confirm): `y`/`yes`/`n`/`no` (any case); an empty answer is `fallback`; anything else is `None` (ask again).
- [`confirm_label`](/packages/cli/reference/cli/prompt/confirm_label): `question [Y/n] ` or `question [y/N] `.
- [`fuzzy_match`](/packages/cli/reference/cli/prompt/fuzzy_match): Case-insensitive subsequence match: "cmt" matches "commit".
- [`confirm_line`](/packages/cli/reference/cli/prompt/confirm_line): Ask `question` on `out`, reading answers from `input` until one parses.
- [`select_line`](/packages/cli/reference/cli/prompt/select_line): Pick one of `items` by number.
- [`select_key_for`](/packages/cli/reference/cli/prompt/select_key_for): The default binding for an input event in a `Select`: arrows, j/k style Ctrl-N/P, space toggles, Ctrl-A toggles all, typing filters.
- [`confirm`](/packages/cli/reference/cli/prompt/confirm): Ask a yes/no question.
- [`input`](/packages/cli/reference/cli/prompt/input): Ask for a line, edited in place on a terminal; an empty answer is `fallback`.
