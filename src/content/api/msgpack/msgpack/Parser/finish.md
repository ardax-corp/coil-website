---
slug: "msgpack/msgpack/Parser/finish"
package: "msgpack"
title: "Parser::finish"
description: "let root = parse_value()? inside Result<MsgpackValue, _> dropped the error."
module: "msgpack"
kind: "method"
name: "finish"
parent: "Parser"
signature: "pub fn finish() -> Result<MsgpackValue, MsgpackError>"
import: "use msgpack::{Parser};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L951"
order: 2
---

`let root = parse_value()?` inside [`Result<MsgpackValue, _>`](/docs/reference/prelude/Result) dropped the error.

Called on a `Parser` value as `value.finish(…)`.

## Returns

`Result<MsgpackValue, MsgpackError>`

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`Parser`](/packages/msgpack/reference/msgpack/Parser)
- [`Parser::at_end`](/packages/msgpack/reference/msgpack/Parser/at_end)
- [`Parser::column`](/packages/msgpack/reference/msgpack/Parser/column)
- [`Parser::parse_value`](/packages/msgpack/reference/msgpack/Parser/parse_value)
