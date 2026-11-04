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
source: "https://github.com/ardax-corp/coil-msgpack/blob/d4bbea9d2025672c7051197559461ba467a0c8b0/src/msgpack.coil#L1534"
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
