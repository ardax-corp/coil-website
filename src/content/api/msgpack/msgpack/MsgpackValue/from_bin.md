---
slug: "msgpack/msgpack/MsgpackValue/from_bin"
package: "msgpack"
title: "MsgpackValue::from_bin"
description: "A MessagePack binary value holding data."
module: "msgpack"
kind: "static method"
name: "from_bin"
parent: "MsgpackValue"
signature: "pub static fn from_bin(Vec<byte> data) -> MsgpackValue"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/717fa0fe98bf14f43b00c42cce89eeb1d7f97684/src/msgpack.hy#L412"
order: 7
---

A MessagePack binary value holding `data`.

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`MsgpackValue`

## Examples

```coil
use msgpack::{MsgpackValue};
use string::{to_bytes};
use tests::assert;
let v = MsgpackValue::from_bin(to_bytes("raw"));
assert!(v.is_bin() && v.bin_len() == 3);
assert!(v.bytes()[0] == "r");
```

## See also

- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
- [`MsgpackValue::from_string`](/packages/msgpack/reference/msgpack/MsgpackValue/from_string): A MessagePack string (UTF-8).
