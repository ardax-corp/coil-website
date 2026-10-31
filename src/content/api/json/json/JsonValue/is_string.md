---
slug: "json/json/JsonValue/is_string"
package: "json"
title: "JsonValue::is_string"
description: "Returns true for a string."
module: "json"
kind: "method"
name: "is_string"
parent: "JsonValue"
signature: "pub fn is_string() -> bool"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/70900ca2e6f10b5a31c57279c1d2e24ce37a0cc1/src/json.hy#L270"
order: 9
---

Returns `true` for a string.

Called on a `JsonValue` value as `value.is_string(…)`.

## Returns

`bool`

## See also

- [`JsonValue`](/packages/json/reference/json/JsonValue): A JSON value: null, bool, int, float, string, array or object.
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null): The JSON `null` value.
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool): A JSON boolean (`true` or `false`).
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int): A JSON integer.
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float): A JSON float.
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string): A JSON string.
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null): Returns `true` for `null`.
- [`JsonValue::is_bool`](/packages/json/reference/json/JsonValue/is_bool): Returns `true` for `true` or `false`.
