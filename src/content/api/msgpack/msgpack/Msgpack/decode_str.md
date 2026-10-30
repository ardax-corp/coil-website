---
slug: "msgpack/msgpack/Msgpack/decode_str"
package: "msgpack"
title: "Msgpack::decode_str"
description: "Method Msgpack::decode_str."
module: "msgpack"
kind: "method"
name: "decode_str"
parent: "Msgpack"
signature: "pub fn decode_str(string s) -> Result<MsgpackValue, MsgpackError>"
import: "use msgpack::{Msgpack};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L1369"
order: 4
---

*No documentation yet.*

Called on a `Msgpack` value as `value.decode_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<MsgpackValue, MsgpackError>`

## See also

- [`Msgpack`](/packages/msgpack/reference/msgpack/Msgpack): MessagePack codec.
- [`Msgpack::standard`](/packages/msgpack/reference/msgpack/Msgpack/standard): The MessagePack format: one-shot encode and decode.
- [`Msgpack::encode`](/packages/msgpack/reference/msgpack/Msgpack/encode)
- [`Msgpack::decode`](/packages/msgpack/reference/msgpack/Msgpack/decode)
- [`Msgpack::encode_str`](/packages/msgpack/reference/msgpack/Msgpack/encode_str)
