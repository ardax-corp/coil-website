---
slug: "msgpack/msgpack/Parser/parse_value"
package: "msgpack"
title: "Parser::parse_value"
description: "Method Parser::parse_value."
module: "msgpack"
kind: "method"
name: "parse_value"
parent: "Parser"
signature: "pub fn parse_value() -> Result<int, MsgpackError>"
import: "use msgpack::{Parser};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L1259"
order: 3
---

*No documentation yet.*

Called on a `Parser` value as `value.parse_value(…)`.

## Returns

`Result<int, MsgpackError>`

## See also

- [`Parser`](/packages/msgpack/reference/msgpack/Parser)
- [`Parser::at_end`](/packages/msgpack/reference/msgpack/Parser/at_end)
- [`Parser::column`](/packages/msgpack/reference/msgpack/Parser/column)
- [`Parser::finish`](/packages/msgpack/reference/msgpack/Parser/finish): `let root = parse_value()?` inside `Result<MsgpackValue, _>` dropped the error.
