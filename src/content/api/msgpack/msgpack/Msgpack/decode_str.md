---
slug: "msgpack/msgpack/Msgpack/decode_str"
package: "msgpack"
title: "Msgpack::decode_str"
description: "decode on the bytes of s. Prefer decode: MessagePack is binary."
module: "msgpack"
kind: "method"
name: "decode_str"
parent: "Msgpack"
signature: "pub fn decode_str(string s) -> Result<MsgpackValue, MsgpackError>"
import: "use msgpack::{Msgpack};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.hy#L1589"
order: 4
---

[`decode`](/packages/msgpack/reference/msgpack/Msgpack/decode) on the bytes of `s`. Prefer [`decode`](/packages/msgpack/reference/msgpack/Msgpack/decode): MessagePack is binary.

Called on a `Msgpack` value as `value.decode_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<MsgpackValue, MsgpackError>`

## See also

- [`Msgpack::decode`](/packages/msgpack/reference/msgpack/Msgpack/decode)
- [`Msgpack`](/packages/msgpack/reference/msgpack/Msgpack): A MessagePack codec: one-shot decode of bytes to a `MsgpackValue`, and encode back.
- [`Msgpack::standard`](/packages/msgpack/reference/msgpack/Msgpack/standard): The MessagePack codec.
- [`Msgpack::encode`](/packages/msgpack/reference/msgpack/Msgpack/encode): Encodes `value` as MessagePack bytes.
- [`Msgpack::encode_str`](/packages/msgpack/reference/msgpack/Msgpack/encode_str): `encode`, then the bytes read as a `string`.
