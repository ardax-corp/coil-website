---
slug: "msgpack/msgpack/MsgpackValue/inf"
package: "msgpack"
title: "MsgpackValue::inf"
description: "An infinite float: -inf when neg, otherwise +inf."
module: "msgpack"
kind: "static method"
name: "inf"
parent: "MsgpackValue"
signature: "pub static fn inf(bool neg) -> MsgpackValue"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.coil#L360"
order: 4
---

An infinite float: `-inf` when `neg`, otherwise `+inf`.

## Parameters

| Name | Type |
|------|------|
| `neg` | `bool` |

## Returns

`MsgpackValue`

## Examples

```coil
use msgpack::{MsgpackValue};
use tests::assert;
let v = MsgpackValue::inf(true);
assert!(v.is_float() && v.i == 1 && v.flag);
```

## See also

- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
- [`MsgpackValue::from_string`](/packages/msgpack/reference/msgpack/MsgpackValue/from_string): A MessagePack string (UTF-8).
- [`MsgpackValue::from_bin`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bin): A MessagePack binary value holding `data`.
