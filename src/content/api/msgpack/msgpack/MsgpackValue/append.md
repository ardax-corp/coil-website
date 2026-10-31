---
slug: "msgpack/msgpack/MsgpackValue/append"
package: "msgpack"
title: "MsgpackValue::append"
description: "Copies child onto the end of this array."
module: "msgpack"
kind: "method"
name: "append"
parent: "MsgpackValue"
signature: "pub fn append(MsgpackValue child) -> Result<(), MsgpackError>"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.hy#L629"
order: 29
---

Copies `child` onto the end of this array.

Returns [`MsgpackError::Invalid`](/packages/msgpack/reference/msgpack/MsgpackError#variant-invalid) when this is not an array.

Called on a `MsgpackValue` value as `value.append(…)`.

## Parameters

| Name | Type |
|------|------|
| `child` | `MsgpackValue` |

## Returns

`Result<(), MsgpackError>`

## Examples

```coil
use msgpack::{MsgpackValue, MsgpackError};
use tests::assert;
let arr = MsgpackValue::empty_array();
assert!(arr.append(MsgpackValue::from_int(1)).is_ok());
assert!(arr.array_len() == 1 && arr.child(0).i == 1);
assert!(MsgpackValue::nil().append(arr).is_err());
```

## See also

- [`msgpack::MsgpackError`](/packages/msgpack/reference/msgpack/MsgpackError)
- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
