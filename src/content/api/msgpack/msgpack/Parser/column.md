---
slug: "msgpack/msgpack/Parser/column"
package: "msgpack"
title: "Parser::column"
description: "Method Parser::column."
module: "msgpack"
kind: "method"
name: "column"
parent: "Parser"
signature: "pub fn column() -> int"
import: "use msgpack::{Parser};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L877"
order: 1
---

*No documentation yet.*

Called on a `Parser` value as `value.column(…)`.

## Returns

`int`

## See also

- [`Parser`](/packages/msgpack/reference/msgpack/Parser)
- [`Parser::at_end`](/packages/msgpack/reference/msgpack/Parser/at_end)
- [`Parser::finish`](/packages/msgpack/reference/msgpack/Parser/finish): `let root = parse_value()?` inside `Result<MsgpackValue, _>` dropped the error.
- [`Parser::parse_value`](/packages/msgpack/reference/msgpack/Parser/parse_value)
