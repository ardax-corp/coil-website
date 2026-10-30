---
slug: "msgpack/msgpack/Msgpack/encode"
package: "msgpack"
title: "Msgpack::encode"
description: "Method Msgpack::encode."
module: "msgpack"
kind: "method"
name: "encode"
parent: "Msgpack"
signature: "pub fn encode(MsgpackValue value) -> Result<Vec<byte>, MsgpackError>"
import: "use msgpack::{Msgpack};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L1348"
order: 1
---

*No documentation yet.*

Called on a `Msgpack` value as `value.encode(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `MsgpackValue` |

## Returns

`Result<Vec<byte>, MsgpackError>`

## See also

- [`Msgpack`](/packages/msgpack/reference/msgpack/Msgpack): MessagePack codec.
- [`Msgpack::standard`](/packages/msgpack/reference/msgpack/Msgpack/standard): The MessagePack format: one-shot encode and decode.
- [`Msgpack::decode`](/packages/msgpack/reference/msgpack/Msgpack/decode)
- [`Msgpack::encode_str`](/packages/msgpack/reference/msgpack/Msgpack/encode_str)
- [`Msgpack::decode_str`](/packages/msgpack/reference/msgpack/Msgpack/decode_str)
