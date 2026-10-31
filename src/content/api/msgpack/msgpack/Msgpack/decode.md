---
slug: "msgpack/msgpack/Msgpack/decode"
package: "msgpack"
title: "Msgpack::decode"
description: "Decodes exactly one MessagePack value from bytes."
module: "msgpack"
kind: "method"
name: "decode"
parent: "Msgpack"
signature: "pub fn decode(Vec<byte> bytes) -> Result<MsgpackValue, MsgpackError>"
import: "use msgpack::{Msgpack};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.coil#L1567"
order: 2
---

Decodes exactly one MessagePack value from `bytes`.

Trailing bytes and truncated or reserved values (`0xc1`) are
[`MsgpackError::Invalid`](/packages/msgpack/reference/msgpack/MsgpackError#variant-invalid); a string that is not
UTF-8 is [`MsgpackError::Utf8`](/packages/msgpack/reference/msgpack/MsgpackError#variant-utf8); a uint64 above the largest [`int`](/docs/reference/types/int) is
[`MsgpackError::Number`](/packages/msgpack/reference/msgpack/MsgpackError#variant-number).

Called on a `Msgpack` value as `value.decode(…)`.

## Parameters

| Name | Type |
|------|------|
| `bytes` | `Vec<byte>` |

## Returns

`Result<MsgpackValue, MsgpackError>`

## Examples

```coil
use msgpack::{Msgpack, MsgpackValue};
use tests::assert;
// fixmap of 1: "a" => true
let bytes: Vec<byte> = Vec::new();
bytes.push(129 as byte);
bytes.push(161 as byte);
bytes.push("a");
bytes.push(195 as byte);
let v = Msgpack::standard().decode(bytes).unwrap_or(MsgpackValue::nil());
assert!(v.has("a") && v.get("a").flag);
```

## See also

- [`msgpack::MsgpackError`](/packages/msgpack/reference/msgpack/MsgpackError)
- [`int`](/docs/reference/types/int)
- [`Msgpack`](/packages/msgpack/reference/msgpack/Msgpack): A MessagePack codec: one-shot decode of bytes to a `MsgpackValue`, and encode back.
- [`Msgpack::standard`](/packages/msgpack/reference/msgpack/Msgpack/standard): The MessagePack codec.
- [`Msgpack::encode`](/packages/msgpack/reference/msgpack/Msgpack/encode): Encodes `value` as MessagePack bytes.
- [`Msgpack::encode_str`](/packages/msgpack/reference/msgpack/Msgpack/encode_str): `encode`, then the bytes read as a `string`.
- [`Msgpack::decode_str`](/packages/msgpack/reference/msgpack/Msgpack/decode_str): `decode` on the bytes of `s`.
