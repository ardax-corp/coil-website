---
slug: "json/json/JsonValue/is_null"
package: "json"
title: "JsonValue::is_null"
description: "Returns true for null."
module: "json"
kind: "method"
name: "is_null"
parent: "JsonValue"
signature: "pub fn is_null() -> bool"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/70900ca2e6f10b5a31c57279c1d2e24ce37a0cc1/src/json.hy#L249"
order: 5
---

Returns `true` for [`null`](/packages/json/reference/json/JsonValue/null).

Called on a `JsonValue` value as `value.is_null(…)`.

## Returns

`bool`

## See also

- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null)
- [`JsonValue`](/packages/json/reference/json/JsonValue): A JSON value: null, bool, int, float, string, array or object.
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool): A JSON boolean (`true` or `false`).
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int): A JSON integer.
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float): A JSON float.
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string): A JSON string.
- [`JsonValue::is_bool`](/packages/json/reference/json/JsonValue/is_bool): Returns `true` for `true` or `false`.
- [`JsonValue::is_int`](/packages/json/reference/json/JsonValue/is_int): Returns `true` for an integer (a number with no fraction or exponent that fits in an `int`).
