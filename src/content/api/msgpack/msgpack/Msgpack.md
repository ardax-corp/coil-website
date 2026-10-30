---
slug: "msgpack/msgpack/Msgpack"
package: "msgpack"
title: "Msgpack"
description: "MessagePack codec. Msgpack::standard() is the one format."
module: "msgpack"
kind: "class"
name: "Msgpack"
signature: "class Msgpack"
import: "use msgpack::{Msgpack};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L209"
order: 4
---

MessagePack codec. [`Msgpack::standard()`](/packages/msgpack/reference/msgpack/Msgpack/standard) is the one format.

## Associated functions

| Name | Description |
|------|-------------|
| [`standard`](/packages/msgpack/reference/msgpack/Msgpack/standard) | The MessagePack format: one-shot encode and decode. |

## Methods

| Name | Description |
|------|-------------|
| [`encode`](/packages/msgpack/reference/msgpack/Msgpack/encode) |  |
| [`decode`](/packages/msgpack/reference/msgpack/Msgpack/decode) |  |
| [`encode_str`](/packages/msgpack/reference/msgpack/Msgpack/encode_str) |  |
| [`decode_str`](/packages/msgpack/reference/msgpack/Msgpack/decode_str) |  |

## See also

- [`Msgpack::standard`](/packages/msgpack/reference/msgpack/Msgpack/standard)
- [`Copier`](/packages/msgpack/reference/msgpack/Copier): Holds both arenas so the recursive copy takes only an index.
- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): MessagePack value.
- [`Parser`](/packages/msgpack/reference/msgpack/Parser)
- [`Store`](/packages/msgpack/reference/msgpack/Store)
