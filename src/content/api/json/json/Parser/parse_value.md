---
slug: "json/json/Parser/parse_value"
package: "json"
title: "Parser::parse_value"
description: "Method Parser::parse_value."
module: "json"
kind: "method"
name: "parse_value"
parent: "Parser"
signature: "pub fn parse_value() -> Result<int, JsonError>"
import: "use json::{Parser};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L1078"
order: 4
---

*No documentation yet.*

Called on a `Parser` value as `value.parse_value(…)`.

## Returns

`Result<int, JsonError>`

## See also

- [`Parser`](/packages/json/reference/json/Parser)
- [`Parser::at_end`](/packages/json/reference/json/Parser/at_end)
- [`Parser::mark_at`](/packages/json/reference/json/Parser/mark_at): Fill `line` and `column` from a byte offset.
- [`Parser::mark`](/packages/json/reference/json/Parser/mark)
- [`Parser::skip_ws`](/packages/json/reference/json/Parser/skip_ws)
