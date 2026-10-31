---
slug: "msgpack/msgpack/Msgpack/standard"
package: "msgpack"
title: "Msgpack::standard"
description: "The MessagePack codec."
module: "msgpack"
kind: "static method"
name: "standard"
parent: "Msgpack"
signature: "pub static fn standard() -> Msgpack"
import: "use msgpack::{Msgpack};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/717fa0fe98bf14f43b00c42cce89eeb1d7f97684/src/msgpack.hy#L1534"
order: 0
---

The MessagePack codec.

## Returns

`Msgpack`

## See also

- [`Msgpack`](/packages/msgpack/reference/msgpack/Msgpack): A MessagePack codec: one-shot decode of bytes to a `MsgpackValue`, and encode back.
- [`Msgpack::encode`](/packages/msgpack/reference/msgpack/Msgpack/encode): Encodes `value` as MessagePack bytes.
- [`Msgpack::decode`](/packages/msgpack/reference/msgpack/Msgpack/decode): Decodes exactly one MessagePack value from `bytes`.
- [`Msgpack::encode_str`](/packages/msgpack/reference/msgpack/Msgpack/encode_str): `encode`, then the bytes read as a `string`.
- [`Msgpack::decode_str`](/packages/msgpack/reference/msgpack/Msgpack/decode_str): `decode` on the bytes of `s`.
