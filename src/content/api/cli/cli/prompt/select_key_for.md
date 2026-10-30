---
slug: "cli/cli/prompt/select_key_for"
package: "cli"
title: "select_key_for"
description: "The default binding for an input event in a Select: arrows, j/k style Ctrl-N/P, space toggles, Ctrl-A toggles all, typing filters."
module: "cli::prompt"
kind: "fn"
name: "select_key_for"
signature: "fn select_key_for(Event e) -> Option<SelectKey>"
import: "use cli::prompt::{select_key_for};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/prompt.hy#L363"
order: 7
---

The default binding for an input event in a [`Select`](/packages/cli/reference/cli/prompt/Select): arrows, j/k style Ctrl-N/P, space toggles, Ctrl-A toggles all, typing filters.

## Parameters

| Name | Type |
|------|------|
| `e` | `Event` |

## Returns

`Option<SelectKey>`

## See also

- [`cli::prompt::Select`](/packages/cli/reference/cli/prompt/Select)
- [`parse_confirm`](/packages/cli/reference/cli/prompt/parse_confirm): `y`/`yes`/`n`/`no` (any case); an empty answer is `fallback`; anything else is `None` (ask again).
- [`confirm_label`](/packages/cli/reference/cli/prompt/confirm_label): `question [Y/n] ` or `question [y/N] `.
- [`fuzzy_match`](/packages/cli/reference/cli/prompt/fuzzy_match): Case-insensitive subsequence match: "cmt" matches "commit".
- [`confirm_line`](/packages/cli/reference/cli/prompt/confirm_line): Ask `question` on `out`, reading answers from `input` until one parses.
- [`input_line`](/packages/cli/reference/cli/prompt/input_line): Ask for a line; an empty answer is `fallback`.
- [`select_line`](/packages/cli/reference/cli/prompt/select_line): Pick one of `items` by number.
- [`confirm`](/packages/cli/reference/cli/prompt/confirm): Ask a yes/no question.
