---
slug: "msgpack/msgpack/MsgpackValue"
package: "msgpack"
title: "MsgpackValue"
description: "A MessagePack value: nil, bool, int, float, string, binary, array, map or extension."
module: "msgpack"
kind: "class"
name: "MsgpackValue"
signature: "class MsgpackValue"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.coil#L261"
order: 1
---

A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.

`MsgpackValue` is a handle on one node of a tree, not an enum. Ask its type
with the `is_*` predicates, read scalars from the `flag`, `i`, `f` and `s`
fields ([`bytes()`](/packages/msgpack/reference/msgpack/MsgpackValue/bytes) for binary and extension data), and walk containers with
[`child`](/packages/msgpack/reference/msgpack/MsgpackValue/child), [`key_at`](/packages/msgpack/reference/msgpack/MsgpackValue/key_at), [`get`](/packages/msgpack/reference/msgpack/MsgpackValue/get) and [`has`](/packages/msgpack/reference/msgpack/MsgpackValue/has).

Build scalars with [`nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil) / `from_*`, and containers with [`empty_array`](/packages/msgpack/reference/msgpack/MsgpackValue/empty_array) /
[`empty_map`](/packages/msgpack/reference/msgpack/MsgpackValue/empty_map) filled by [`append`](/packages/msgpack/reference/msgpack/MsgpackValue/append) / [`put`](/packages/msgpack/reference/msgpack/MsgpackValue/put). Those copy their argument into the
container, so a later change to the argument does not show in the
container. Maps keep their entries in order, with any value as a key;
duplicate keys are kept.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `flag` | `bool` | The boolean payload when [`is_bool()`](/packages/msgpack/reference/msgpack/MsgpackValue/is_bool). On a float that is infinite or zero, `true` when it is negative. |
| `i` | `int` | The integer payload when [`is_int()`](/packages/msgpack/reference/msgpack/MsgpackValue/is_int). On a float, the kind: `0` finite, `1` infinite, `2` NaN (check this rather than `f != f`). On an extension, its type code (see [`ext_type`](/packages/msgpack/reference/msgpack/MsgpackValue/ext_type)). |
| `f` | `float` | The float payload when [`is_float()`](/packages/msgpack/reference/msgpack/MsgpackValue/is_float). A float32 is widened. |
| `s` | `string` | The string payload when [`is_string()`](/packages/msgpack/reference/msgpack/MsgpackValue/is_string). |

## Associated functions

| Name | Description |
|------|-------------|
| [`nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil) | The MessagePack [`nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil) value. |
| [`from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool) | A MessagePack boolean. |
| [`from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int) | A MessagePack integer. |
| [`nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan) | A NaN float, with the NaN kind set in `i`. |
| [`inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf) | An infinite float: `-inf` when `neg`, otherwise `+inf`. |
| [`from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float) | A MessagePack float. |
| [`from_string`](/packages/msgpack/reference/msgpack/MsgpackValue/from_string) | A MessagePack string (UTF-8). |
| [`from_bin`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bin) | A MessagePack binary value holding `data`. |
| [`from_ext`](/packages/msgpack/reference/msgpack/MsgpackValue/from_ext) | A MessagePack extension of type `ty` holding `data`. |
| [`empty_array`](/packages/msgpack/reference/msgpack/MsgpackValue/empty_array) | An empty array. |
| [`empty_map`](/packages/msgpack/reference/msgpack/MsgpackValue/empty_map) | An empty map. |

## Methods

| Name | Description |
|------|-------------|
| [`is_nil`](/packages/msgpack/reference/msgpack/MsgpackValue/is_nil) | Returns `true` for [`nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil). |
| [`is_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/is_bool) | Returns `true` for a boolean. |
| [`is_int`](/packages/msgpack/reference/msgpack/MsgpackValue/is_int) | Returns `true` for an integer. |
| [`is_float`](/packages/msgpack/reference/msgpack/MsgpackValue/is_float) | Returns `true` for a float (float32 or float64). |
| [`is_string`](/packages/msgpack/reference/msgpack/MsgpackValue/is_string) | Returns `true` for a string. |
| [`is_bin`](/packages/msgpack/reference/msgpack/MsgpackValue/is_bin) | Returns `true` for a binary value. |
| [`is_array`](/packages/msgpack/reference/msgpack/MsgpackValue/is_array) | Returns `true` for an array. |
| [`is_map`](/packages/msgpack/reference/msgpack/MsgpackValue/is_map) | Returns `true` for a map. |
| [`is_ext`](/packages/msgpack/reference/msgpack/MsgpackValue/is_ext) | Returns `true` for an extension (including a timestamp). |
| [`array_len`](/packages/msgpack/reference/msgpack/MsgpackValue/array_len) | Number of elements of an array, or 0 when this is not an array. |
| [`map_len`](/packages/msgpack/reference/msgpack/MsgpackValue/map_len) | Number of entries of a map, or 0 when this is not a map. |
| [`bin_len`](/packages/msgpack/reference/msgpack/MsgpackValue/bin_len) | Length in bytes of a binary or extension payload, or 0 for any other value. |
| [`ext_type`](/packages/msgpack/reference/msgpack/MsgpackValue/ext_type) | The type code of an extension (`-1` for a timestamp), or 0 when this is not an extension. |
| [`bytes`](/packages/msgpack/reference/msgpack/MsgpackValue/bytes) | A copy of the payload of a binary or extension value, or an empty [`Vec`](/docs/reference/prelude/Vec) for any other value. |
| [`child`](/packages/msgpack/reference/msgpack/MsgpackValue/child) | Element `n` (0-based) of an array, or the value of entry `n` of a map. |
| [`key_at`](/packages/msgpack/reference/msgpack/MsgpackValue/key_at) | The key of entry `n` (0-based) of a map, as a value (keys need not be strings). |
| [`has`](/packages/msgpack/reference/msgpack/MsgpackValue/has) | Returns `true` when this map has an entry whose key is the string `key`. |
| [`get`](/packages/msgpack/reference/msgpack/MsgpackValue/get) | The value of the first entry of this map whose key is the string `key`. |
| [`append`](/packages/msgpack/reference/msgpack/MsgpackValue/append) | Copies `child` onto the end of this array. |
| [`put`](/packages/msgpack/reference/msgpack/MsgpackValue/put) | Copies `key` and `val` onto the end of this map as a new entry. |
| [`encode_buf`](/packages/msgpack/reference/msgpack/MsgpackValue/encode_buf) | The encoding of this value, as [`Msgpack::encode`](/packages/msgpack/reference/msgpack/Msgpack/encode) returns it. |

## Examples

```coil
use msgpack::{Msgpack, MsgpackValue};
use tests::assert;
let tags = MsgpackValue::empty_array();
let _ = tags.append(MsgpackValue::from_string("vm"));
let doc = MsgpackValue::empty_map();
let _ = doc.put(MsgpackValue::from_string("tags"), tags);
let _ = doc.put(MsgpackValue::from_string("stars"), MsgpackValue::from_int(7));

let m = Msgpack::standard();
let back = match m.encode(doc) {
    Result::Ok(bytes) => m.decode(bytes).unwrap_or(MsgpackValue::nil()),
    Result::Err(_) => MsgpackValue::nil(),
};
assert!(back.is_map() && back.map_len() == 2);
assert!(back.key_at(0).s == "tags");
assert!(back.get("tags").child(0).s == "vm");
assert!(back.get("stars").i == 7);
```

## See also

- [`MsgpackValue::bytes`](/packages/msgpack/reference/msgpack/MsgpackValue/bytes)
- [`MsgpackValue::child`](/packages/msgpack/reference/msgpack/MsgpackValue/child)
- [`MsgpackValue::key_at`](/packages/msgpack/reference/msgpack/MsgpackValue/key_at)
- [`MsgpackValue::get`](/packages/msgpack/reference/msgpack/MsgpackValue/get)
- [`MsgpackValue::has`](/packages/msgpack/reference/msgpack/MsgpackValue/has)
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil)
- [`MsgpackValue::empty_array`](/packages/msgpack/reference/msgpack/MsgpackValue/empty_array)
- [`MsgpackValue::empty_map`](/packages/msgpack/reference/msgpack/MsgpackValue/empty_map)
- [`MsgpackValue::append`](/packages/msgpack/reference/msgpack/MsgpackValue/append)
- [`MsgpackValue::put`](/packages/msgpack/reference/msgpack/MsgpackValue/put)
- [`MsgpackValue::is_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/is_bool)
- [`MsgpackValue::is_int`](/packages/msgpack/reference/msgpack/MsgpackValue/is_int)
- [`MsgpackValue::ext_type`](/packages/msgpack/reference/msgpack/MsgpackValue/ext_type)
- [`MsgpackValue::is_float`](/packages/msgpack/reference/msgpack/MsgpackValue/is_float)
- [`MsgpackValue::is_string`](/packages/msgpack/reference/msgpack/MsgpackValue/is_string)
