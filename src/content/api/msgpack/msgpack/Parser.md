---
slug: "msgpack/msgpack/Parser"
package: "msgpack"
title: "Parser"
description: "Class Parser."
module: "msgpack"
kind: "class"
name: "Parser"
signature: "class Parser"
import: "use msgpack::{Parser};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L202"
order: 3
---

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `store` | `Store` |  |

## Methods

| Name | Description |
|------|-------------|
| [`at_end`](/packages/msgpack/reference/msgpack/Parser/at_end) |  |
| [`column`](/packages/msgpack/reference/msgpack/Parser/column) |  |
| [`finish`](/packages/msgpack/reference/msgpack/Parser/finish) | `let root = parse_value()?` inside [`Result<MsgpackValue, _>`](/docs/reference/prelude/Result) dropped the error. |
| [`parse_value`](/packages/msgpack/reference/msgpack/Parser/parse_value) |  |

## See also

- [`Copier`](/packages/msgpack/reference/msgpack/Copier): Holds both arenas so the recursive copy takes only an index.
- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): MessagePack value.
- [`Msgpack`](/packages/msgpack/reference/msgpack/Msgpack): MessagePack codec.
- [`Store`](/packages/msgpack/reference/msgpack/Store)
