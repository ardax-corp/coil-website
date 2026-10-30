---
slug: "msgpack/msgpack/Msgpack/decode"
package: "msgpack"
title: "Msgpack::decode"
description: "Method Msgpack::decode."
module: "msgpack"
kind: "method"
name: "decode"
parent: "Msgpack"
signature: "pub fn decode(Vec<byte> bytes) -> Result<MsgpackValue, MsgpackError>"
import: "use msgpack::{Msgpack};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L1352"
order: 2
---

*No documentation yet.*

Called on a `Msgpack` value as `value.decode(…)`.

## Parameters

| Name | Type |
|------|------|
| `bytes` | `Vec<byte>` |

## Returns

`Result<MsgpackValue, MsgpackError>`

## See also

- [`Msgpack`](/packages/msgpack/reference/msgpack/Msgpack): MessagePack codec.
- [`Msgpack::standard`](/packages/msgpack/reference/msgpack/Msgpack/standard): The MessagePack format: one-shot encode and decode.
- [`Msgpack::encode`](/packages/msgpack/reference/msgpack/Msgpack/encode)
- [`Msgpack::encode_str`](/packages/msgpack/reference/msgpack/Msgpack/encode_str)
- [`Msgpack::decode_str`](/packages/msgpack/reference/msgpack/Msgpack/decode_str)
