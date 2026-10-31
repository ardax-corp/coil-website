---
slug: "msgpack/msgpack/Msgpack/encode_str"
package: "msgpack"
title: "Msgpack::encode_str"
description: "encode, then the bytes read as a string."
module: "msgpack"
kind: "method"
name: "encode_str"
parent: "Msgpack"
signature: "pub fn encode_str(MsgpackValue value) -> Result<string, MsgpackError>"
import: "use msgpack::{Msgpack};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/717fa0fe98bf14f43b00c42cce89eeb1d7f97684/src/msgpack.hy#L1580"
order: 3
---

[`encode`](/packages/msgpack/reference/msgpack/Msgpack/encode), then the bytes read as a [`string`](/docs/reference/types/string).

MessagePack is binary and most encodings are not valid UTF-8, which
fails with [`MsgpackError::Utf8`](/packages/msgpack/reference/msgpack/MsgpackError#variant-utf8); prefer [`encode`](/packages/msgpack/reference/msgpack/Msgpack/encode).

Called on a `Msgpack` value as `value.encode_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `MsgpackValue` |

## Returns

`Result<string, MsgpackError>`

## See also

- [`Msgpack::encode`](/packages/msgpack/reference/msgpack/Msgpack/encode)
- [`string`](/docs/reference/types/string)
- [`msgpack::MsgpackError`](/packages/msgpack/reference/msgpack/MsgpackError)
- [`Msgpack`](/packages/msgpack/reference/msgpack/Msgpack): A MessagePack codec: one-shot decode of bytes to a `MsgpackValue`, and encode back.
- [`Msgpack::standard`](/packages/msgpack/reference/msgpack/Msgpack/standard): The MessagePack codec.
- [`Msgpack::decode`](/packages/msgpack/reference/msgpack/Msgpack/decode): Decodes exactly one MessagePack value from `bytes`.
- [`Msgpack::decode_str`](/packages/msgpack/reference/msgpack/Msgpack/decode_str): `decode` on the bytes of `s`.
