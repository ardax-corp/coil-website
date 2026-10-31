---
slug: "json/json/JsonValue"
package: "json"
title: "JsonValue"
description: "A JSON value: null, bool, int, float, string, array or object."
module: "json"
kind: "class"
name: "JsonValue"
signature: "class JsonValue"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/70900ca2e6f10b5a31c57279c1d2e24ce37a0cc1/src/json.hy#L109"
order: 0
---

A JSON value: null, bool, int, float, string, array or object.

`JsonValue` is a handle on one node of a decoded tree (or of a scalar built
with [`null`](/packages/json/reference/json/JsonValue/null) / `from_*`), not an enum. Ask its type with the `is_*`
predicates, read scalars with [`as_str`](/packages/json/reference/json/JsonValue/as_str) / [`as_int`](/packages/json/reference/json/JsonValue/as_int) / [`as_float`](/packages/json/reference/json/JsonValue/as_float) /
[`as_bool`](/packages/json/reference/json/JsonValue/as_bool), and walk containers with [`get`](/packages/json/reference/json/JsonValue/get), [`at`](/packages/json/reference/json/JsonValue/at) and [`keys`](/packages/json/reference/json/JsonValue/keys).

Objects keep their members in document order, and duplicate keys are kept
([`get`](/packages/json/reference/json/JsonValue/get) returns the first). A number token with no `.`, `e` or `E` that fits
in an [`int`](/docs/reference/types/int) decodes as an int; every other number is a float.

Arrays and objects come only from [`Json::decode`](/packages/json/reference/json/Json/decode); there is no builder for
them.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `flag` | `bool` | The boolean payload. Meaningful only when [`is_bool()`](/packages/json/reference/json/JsonValue/is_bool); prefer [`as_bool`](/packages/json/reference/json/JsonValue/as_bool). |
| `i` | `int` | The integer payload. Meaningful only when [`is_int()`](/packages/json/reference/json/JsonValue/is_int); prefer [`as_int`](/packages/json/reference/json/JsonValue/as_int). |
| `f` | `float` | The float payload. Meaningful only when [`is_float()`](/packages/json/reference/json/JsonValue/is_float); prefer [`as_float`](/packages/json/reference/json/JsonValue/as_float). |
| `s` | `string` | The string payload. Meaningful only when [`is_string()`](/packages/json/reference/json/JsonValue/is_string); prefer [`as_str`](/packages/json/reference/json/JsonValue/as_str). |

## Associated functions

| Name | Description |
|------|-------------|
| [`null`](/packages/json/reference/json/JsonValue/null) | The JSON [`null`](/packages/json/reference/json/JsonValue/null) value. |
| [`from_bool`](/packages/json/reference/json/JsonValue/from_bool) | A JSON boolean (`true` or `false`). |
| [`from_int`](/packages/json/reference/json/JsonValue/from_int) | A JSON integer. |
| [`from_float`](/packages/json/reference/json/JsonValue/from_float) | A JSON float. |
| [`from_string`](/packages/json/reference/json/JsonValue/from_string) | A JSON string. |

## Methods

| Name | Description |
|------|-------------|
| [`is_null`](/packages/json/reference/json/JsonValue/is_null) | Returns `true` for [`null`](/packages/json/reference/json/JsonValue/null). |
| [`is_bool`](/packages/json/reference/json/JsonValue/is_bool) | Returns `true` for `true` or `false`. |
| [`is_int`](/packages/json/reference/json/JsonValue/is_int) | Returns `true` for an integer (a number with no fraction or exponent that fits in an [`int`](/docs/reference/types/int)). |
| [`is_float`](/packages/json/reference/json/JsonValue/is_float) | Returns `true` for a float (any number that is not an int). |
| [`is_string`](/packages/json/reference/json/JsonValue/is_string) | Returns `true` for a string. |
| [`is_array`](/packages/json/reference/json/JsonValue/is_array) | Returns `true` for an array. |
| [`is_object`](/packages/json/reference/json/JsonValue/is_object) | Returns `true` for an object. |
| [`array_len`](/packages/json/reference/json/JsonValue/array_len) | Number of elements of an array. |
| [`object_len`](/packages/json/reference/json/JsonValue/object_len) | Number of members of an object, duplicates included. |
| [`get`](/packages/json/reference/json/JsonValue/get) | Member `key` of an object (the first one when keys repeat). |
| [`at`](/packages/json/reference/json/JsonValue/at) | Element `i` (0-based) of an array. |
| [`keys`](/packages/json/reference/json/JsonValue/keys) | Member names of an object in document order, duplicates included. |
| [`as_str`](/packages/json/reference/json/JsonValue/as_str) | The string, or `None` when this is not a string. |
| [`as_int`](/packages/json/reference/json/JsonValue/as_int) | The integer, or `None` when this is not an int (a float such as `1.0` is not converted). |
| [`as_float`](/packages/json/reference/json/JsonValue/as_float) | The float, or `None` when this is not a float (an int such as `1` is not converted). |
| [`as_bool`](/packages/json/reference/json/JsonValue/as_bool) | The boolean, or `None` when this is not a bool. |
| [`emit`](/packages/json/reference/json/JsonValue/emit) | Appends the compact encoding of this value to `out`. |
| [`encode_buf`](/packages/json/reference/json/JsonValue/encode_buf) | The compact encoding of this value, as [`Json::encode`](/packages/json/reference/json/Json/encode) returns it. |

## Examples

```coil
use json::{Json, JsonValue};
use tests::assert;
let v = Json::strict()
    .decode_str("{\"name\":\"coil\",\"tags\":[\"vm\",\"lang\"],\"stars\":7}")
    .unwrap_or(JsonValue::null());
assert!(v.is_object());
assert!(v.keys().len() == 3);
assert!(v.get("stars").map_or(0, fn (JsonValue n) => n.as_int().unwrap_or(0)) == 7);
let tags = v.get("tags").unwrap_or(JsonValue::null());
assert!(tags.array_len() == 2);
assert!(tags.at(1).map_or("", fn (JsonValue t) => t.as_str().unwrap_or("")) == "lang");
```

## See also

- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null)
- [`JsonValue::as_str`](/packages/json/reference/json/JsonValue/as_str)
- [`JsonValue::as_int`](/packages/json/reference/json/JsonValue/as_int)
- [`JsonValue::as_float`](/packages/json/reference/json/JsonValue/as_float)
- [`JsonValue::as_bool`](/packages/json/reference/json/JsonValue/as_bool)
- [`JsonValue::get`](/packages/json/reference/json/JsonValue/get)
- [`JsonValue::at`](/packages/json/reference/json/JsonValue/at)
- [`JsonValue::keys`](/packages/json/reference/json/JsonValue/keys)
- [`int`](/docs/reference/types/int)
- [`Json::decode`](/packages/json/reference/json/Json/decode)
- [`JsonValue::is_bool`](/packages/json/reference/json/JsonValue/is_bool)
- [`JsonValue::is_int`](/packages/json/reference/json/JsonValue/is_int)
- [`JsonValue::is_float`](/packages/json/reference/json/JsonValue/is_float)
- [`JsonValue::is_string`](/packages/json/reference/json/JsonValue/is_string)
