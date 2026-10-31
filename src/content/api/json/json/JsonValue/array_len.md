---
slug: "json/json/JsonValue/array_len"
package: "json"
title: "JsonValue::array_len"
description: "Number of elements of an array. Use only when is_array(): on any other value the result is meaningless."
module: "json"
kind: "method"
name: "array_len"
parent: "JsonValue"
signature: "pub fn array_len() -> int"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/70900ca2e6f10b5a31c57279c1d2e24ce37a0cc1/src/json.hy#L286"
order: 12
---

Number of elements of an array. Use only when [`is_array()`](/packages/json/reference/json/JsonValue/is_array): on any other value the result is meaningless.

Called on a `JsonValue` value as `value.array_len(…)`.

## Returns

`int`

## See also

- [`JsonValue::is_array`](/packages/json/reference/json/JsonValue/is_array)
- [`JsonValue`](/packages/json/reference/json/JsonValue): A JSON value: null, bool, int, float, string, array or object.
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null): The JSON `null` value.
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool): A JSON boolean (`true` or `false`).
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int): A JSON integer.
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float): A JSON float.
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string): A JSON string.
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null): Returns `true` for `null`.
