---
slug: "msgpack/msgpack/Msgpack/encode"
package: "msgpack"
title: "Msgpack::encode"
description: "Encodes value as MessagePack bytes."
module: "msgpack"
kind: "method"
name: "encode"
parent: "Msgpack"
signature: "pub fn encode(MsgpackValue value) -> Result<Vec<byte>, MsgpackError>"
import: "use msgpack::{Msgpack};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.coil#L1542"
order: 1
---

Encodes `value` as MessagePack bytes.

Fails with [`MsgpackError::Number`](/packages/msgpack/reference/msgpack/MsgpackError#variant-number) when an extension type code is
outside -128..=127.

Called on a `Msgpack` value as `value.encode(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `MsgpackValue` |

## Returns

`Result<Vec<byte>, MsgpackError>`

## See also

- [`msgpack::MsgpackError`](/packages/msgpack/reference/msgpack/MsgpackError)
- [`Msgpack`](/packages/msgpack/reference/msgpack/Msgpack): A MessagePack codec: one-shot decode of bytes to a `MsgpackValue`, and encode back.
- [`Msgpack::standard`](/packages/msgpack/reference/msgpack/Msgpack/standard): The MessagePack codec.
- [`Msgpack::decode`](/packages/msgpack/reference/msgpack/Msgpack/decode): Decodes exactly one MessagePack value from `bytes`.
- [`Msgpack::encode_str`](/packages/msgpack/reference/msgpack/Msgpack/encode_str): `encode`, then the bytes read as a `string`.
- [`Msgpack::decode_str`](/packages/msgpack/reference/msgpack/Msgpack/decode_str): `decode` on the bytes of `s`.
