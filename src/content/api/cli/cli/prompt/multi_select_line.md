---
slug: "cli/cli/prompt/multi_select_line"
package: "cli"
title: "multi_select_line"
description: "Pick several of items by number from a stream."
module: "cli::prompt"
kind: "fn"
name: "multi_select_line"
signature: "fn multi_select_line( Stream input, Stream out, string question, Vec<string> items, ) -> Result<Option<Vec<int>>, TtyError>"
import: "use cli::prompt::{multi_select_line};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/prompt.hy#L671"
order: 15
---

Pick several of `items` by number from a stream.

## Parameters

| Name | Type |
|------|------|
| `input` | `Stream` |
| `out` | `Stream` |
| `question` | `string` |
| `items` | `Vec<string>` |

## Returns

`Result<Option<Vec<int>>, TtyError>`

## See also

- [`parse_confirm`](/packages/cli/reference/cli/prompt/parse_confirm): `y`/`yes`/`n`/`no` (any case); an empty answer is `fallback`; anything else is `None` (ask again).
- [`confirm_label`](/packages/cli/reference/cli/prompt/confirm_label): `question [Y/n] ` or `question [y/N] `.
- [`fuzzy_match`](/packages/cli/reference/cli/prompt/fuzzy_match): Case-insensitive subsequence match: "cmt" matches "commit".
- [`confirm_line`](/packages/cli/reference/cli/prompt/confirm_line): Ask `question` on `out`, reading answers from `input` until one parses.
- [`input_line`](/packages/cli/reference/cli/prompt/input_line): Ask for a line; an empty answer is `fallback`.
- [`select_line`](/packages/cli/reference/cli/prompt/select_line): Pick one of `items` by number.
- [`select_key_for`](/packages/cli/reference/cli/prompt/select_key_for): The default binding for an input event in a `Select`: arrows, j/k style Ctrl-N/P, space toggles, Ctrl-A toggles all, typing filters.
- [`confirm`](/packages/cli/reference/cli/prompt/confirm): Ask a yes/no question.
