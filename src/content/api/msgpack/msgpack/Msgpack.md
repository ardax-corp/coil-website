---
slug: "msgpack/msgpack/Msgpack"
package: "msgpack"
title: "Msgpack"
description: "A MessagePack codec: one-shot decode of bytes to a MsgpackValue, and encode back."
module: "msgpack"
kind: "class"
name: "Msgpack"
signature: "class Msgpack"
import: "use msgpack::{Msgpack};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.hy#L305"
order: 2
---

A MessagePack codec: one-shot decode of bytes to a [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue), and encode back.

Encode writes the smallest format family that holds each value (fixint,
int8 ... int64, fixstr, str8 ..., and so on) and always writes floats as
float64; NaN is written as the canonical quiet NaN. Decode accepts every
format, including float32 and timestamps, which stay extension type `-1`.

## Associated functions

| Name | Description |
|------|-------------|
| [`standard`](/packages/msgpack/reference/msgpack/Msgpack/standard) | The MessagePack codec. |

## Methods

| Name | Description |
|------|-------------|
| [`encode`](/packages/msgpack/reference/msgpack/Msgpack/encode) | Encodes `value` as MessagePack bytes. |
| [`decode`](/packages/msgpack/reference/msgpack/Msgpack/decode) | Decodes exactly one MessagePack value from `bytes`. |
| [`encode_str`](/packages/msgpack/reference/msgpack/Msgpack/encode_str) | [`encode`](/packages/msgpack/reference/msgpack/Msgpack/encode), then the bytes read as a [`string`](/docs/reference/types/string). |
| [`decode_str`](/packages/msgpack/reference/msgpack/Msgpack/decode_str) | [`decode`](/packages/msgpack/reference/msgpack/Msgpack/decode) on the bytes of `s`. |

## Examples

```coil
use msgpack::{Msgpack, MsgpackValue};
use tests::assert;
let m = Msgpack::standard();
let bytes = m.encode(MsgpackValue::from_int(300)).unwrap_or(Vec::new());
// uint16: 0xcd, then 300 big-endian.
assert!(bytes.len() == 3 && bytes[0] == (205 as byte));
let v = m.decode(bytes).unwrap_or(MsgpackValue::nil());
assert!(v.is_int() && v.i == 300);
```

## See also

- [`msgpack::MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue)
