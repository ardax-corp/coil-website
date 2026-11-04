---
slug: "json/json/JsonValue/is_int"
package: "json"
title: "JsonValue::is_int"
description: "Returns true for an integer (a number with no fraction or exponent that fits in an int)."
module: "json"
kind: "method"
name: "is_int"
parent: "JsonValue"
signature: "pub fn is_int() -> bool"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/7656cabca9b22bca27c2968e9781a6eb6b45132a/src/json.coil#L341"
order: 7
---

Returns `true` for an integer (a number with no fraction or exponent that fits in an [`int`](/docs/reference/types/int)).

Called on a `JsonValue` value as `value.is_int(…)`.

## Returns

`bool`

## See also

- [`int`](/docs/reference/types/int)
- [`JsonValue`](/packages/json/reference/json/JsonValue): A JSON value: null, bool, int, float, string, array or object.
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null): The JSON `null` value.
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool): A JSON boolean (`true` or `false`).
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int): A JSON integer.
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float): A JSON float.
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string): A JSON string.
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null): Returns `true` for `null`.
