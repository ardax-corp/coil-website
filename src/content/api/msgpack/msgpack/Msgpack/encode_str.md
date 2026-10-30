---
slug: "msgpack/msgpack/Msgpack/encode_str"
package: "msgpack"
title: "Msgpack::encode_str"
description: "Method Msgpack::encode_str."
module: "msgpack"
kind: "method"
name: "encode_str"
parent: "Msgpack"
signature: "pub fn encode_str(MsgpackValue value) -> Result<string, MsgpackError>"
import: "use msgpack::{Msgpack};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L1361"
order: 3
---

*No documentation yet.*

Called on a `Msgpack` value as `value.encode_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `MsgpackValue` |

## Returns

`Result<string, MsgpackError>`

## See also

- [`Msgpack`](/packages/msgpack/reference/msgpack/Msgpack): MessagePack codec.
- [`Msgpack::standard`](/packages/msgpack/reference/msgpack/Msgpack/standard): The MessagePack format: one-shot encode and decode.
- [`Msgpack::encode`](/packages/msgpack/reference/msgpack/Msgpack/encode)
- [`Msgpack::decode`](/packages/msgpack/reference/msgpack/Msgpack/decode)
- [`Msgpack::decode_str`](/packages/msgpack/reference/msgpack/Msgpack/decode_str)
