---
slug: "msgpack/msgpack/MsgpackValue/bin_len"
package: "msgpack"
title: "MsgpackValue::bin_len"
description: "Length in bytes of a binary or extension payload, or 0 for any other value."
module: "msgpack"
kind: "method"
name: "bin_len"
parent: "MsgpackValue"
signature: "pub fn bin_len() -> int"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.hy#L506"
order: 22
---

Length in bytes of a binary or extension payload, or 0 for any other value.

Called on a `MsgpackValue` value as `value.bin_len(…)`.

## Returns

`int`

## See also

- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
- [`MsgpackValue::from_string`](/packages/msgpack/reference/msgpack/MsgpackValue/from_string): A MessagePack string (UTF-8).
