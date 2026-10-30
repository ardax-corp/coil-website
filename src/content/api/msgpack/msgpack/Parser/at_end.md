---
slug: "msgpack/msgpack/Parser/at_end"
package: "msgpack"
title: "Parser::at_end"
description: "Method Parser::at_end."
module: "msgpack"
kind: "method"
name: "at_end"
parent: "Parser"
signature: "pub fn at_end() -> bool"
import: "use msgpack::{Parser};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L873"
order: 0
---

*No documentation yet.*

Called on a `Parser` value as `value.at_end(…)`.

## Returns

`bool`

## See also

- [`Parser`](/packages/msgpack/reference/msgpack/Parser)
- [`Parser::column`](/packages/msgpack/reference/msgpack/Parser/column)
- [`Parser::finish`](/packages/msgpack/reference/msgpack/Parser/finish): `let root = parse_value()?` inside `Result<MsgpackValue, _>` dropped the error.
- [`Parser::parse_value`](/packages/msgpack/reference/msgpack/Parser/parse_value)
