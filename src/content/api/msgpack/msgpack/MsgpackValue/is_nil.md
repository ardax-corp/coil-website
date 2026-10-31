---
slug: "msgpack/msgpack/MsgpackValue/is_nil"
package: "msgpack"
title: "MsgpackValue::is_nil"
description: "Returns true for nil."
module: "msgpack"
kind: "method"
name: "is_nil"
parent: "MsgpackValue"
signature: "pub fn is_nil() -> bool"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.hy#L444"
order: 11
---

Returns `true` for [`nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil).

Called on a `MsgpackValue` value as `value.is_nil(…)`.

## Returns

`bool`

## See also

- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil)
- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
- [`MsgpackValue::from_string`](/packages/msgpack/reference/msgpack/MsgpackValue/from_string): A MessagePack string (UTF-8).
