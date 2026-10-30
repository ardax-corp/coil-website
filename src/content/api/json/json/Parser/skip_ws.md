---
slug: "json/json/Parser/skip_ws"
package: "json"
title: "Parser::skip_ws"
description: "Method Parser::skip_ws."
module: "json"
kind: "method"
name: "skip_ws"
parent: "Parser"
signature: "pub fn skip_ws() -> Result<(), JsonError>"
import: "use json::{Parser};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L580"
order: 3
---

*No documentation yet.*

Called on a `Parser` value as `value.skip_ws(…)`.

## Returns

`Result<(), JsonError>`

## See also

- [`Parser`](/packages/json/reference/json/Parser)
- [`Parser::at_end`](/packages/json/reference/json/Parser/at_end)
- [`Parser::mark_at`](/packages/json/reference/json/Parser/mark_at): Fill `line` and `column` from a byte offset.
- [`Parser::mark`](/packages/json/reference/json/Parser/mark)
- [`Parser::parse_value`](/packages/json/reference/json/Parser/parse_value)
