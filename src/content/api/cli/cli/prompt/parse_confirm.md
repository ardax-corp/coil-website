---
slug: "cli/cli/prompt/parse_confirm"
package: "cli"
title: "parse_confirm"
description: "y/yes/n/no (any case); an empty answer is fallback; anything else is None (ask again)."
module: "cli::prompt"
kind: "fn"
name: "parse_confirm"
signature: "fn parse_confirm(string answer, bool fallback) -> Option<bool>"
import: "use cli::prompt::{parse_confirm};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/prompt.coil#L48"
order: 3
---

`y`/`yes`/`n`/`no` (any case); an empty answer is `fallback`; anything else is `None` (ask again).

## Parameters

| Name | Type |
|------|------|
| `answer` | `string` |
| `fallback` | `bool` |

## Returns

`Option<bool>`

## Examples

```coil
use cli::prompt::parse_confirm;
use tests::assert;
assert!(parse_confirm("YES", false) == Option::Some(true));
assert!(parse_confirm("", true) == Option::Some(true));
assert!(parse_confirm("maybe", true).is_none());
```

## See also

- [`confirm_label`](/packages/cli/reference/cli/prompt/confirm_label): `question [Y/n] ` or `question [y/N] `.
- [`fuzzy_match`](/packages/cli/reference/cli/prompt/fuzzy_match): Case-insensitive subsequence match: "cmt" matches "commit".
- [`select_model`](/packages/cli/reference/cli/prompt/select_model): A `Select` over `items`, single or `multi`, showing at most `height` rows (at least 1), with nothing checked and no filter.
- [`confirm_line`](/packages/cli/reference/cli/prompt/confirm_line): Ask `question` on `out`, reading answers from `input` until one parses.
- [`input_line`](/packages/cli/reference/cli/prompt/input_line): Ask for a line; an empty answer is `fallback`.
- [`select_line`](/packages/cli/reference/cli/prompt/select_line): Pick one of `items` by number.
- [`select_key_for`](/packages/cli/reference/cli/prompt/select_key_for): The default binding for an input event in a `Select`: arrows, j/k style Ctrl-N/P, space toggles, Ctrl-A toggles all, typing filters.
- [`confirm`](/packages/cli/reference/cli/prompt/confirm): Ask a yes/no question.
