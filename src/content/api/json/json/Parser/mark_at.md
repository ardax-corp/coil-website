---
slug: "json/json/Parser/mark_at"
package: "json"
title: "Parser::mark_at"
description: "Fill line and column from a byte offset. Used when raising."
module: "json"
kind: "method"
name: "mark_at"
parent: "Parser"
signature: "pub fn mark_at(int at)"
import: "use json::{Parser};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L507"
order: 1
---

Fill `line` and `column` from a byte offset. Used when raising.

Called on a `Parser` value as `value.mark_at(…)`.

## Parameters

| Name | Type |
|------|------|
| `at` | `int` |

## See also

- [`Parser`](/packages/json/reference/json/Parser)
- [`Parser::at_end`](/packages/json/reference/json/Parser/at_end)
- [`Parser::mark`](/packages/json/reference/json/Parser/mark)
- [`Parser::skip_ws`](/packages/json/reference/json/Parser/skip_ws)
- [`Parser::parse_value`](/packages/json/reference/json/Parser/parse_value)
