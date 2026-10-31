---
slug: "json/json/JsonValue/from_float"
package: "json"
title: "JsonValue::from_float"
description: "A JSON float."
module: "json"
kind: "static method"
name: "from_float"
parent: "JsonValue"
signature: "pub static fn from_float(float x) -> JsonValue"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/e19bb6df6e254766aac3717a85a724f108eb2006/src/json.coil#L225"
order: 3
---

A JSON float.

Encoding a non-finite float (`inf`, `NaN`) fails with
[`JsonError::Number`](/packages/json/reference/json/JsonError#variant-number), since JSON cannot represent it.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`JsonValue`

## See also

- [`json::JsonError`](/packages/json/reference/json/JsonError)
- [`JsonValue`](/packages/json/reference/json/JsonValue): A JSON value: null, bool, int, float, string, array or object.
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null): The JSON `null` value.
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool): A JSON boolean (`true` or `false`).
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int): A JSON integer.
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string): A JSON string.
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null): Returns `true` for `null`.
- [`JsonValue::is_bool`](/packages/json/reference/json/JsonValue/is_bool): Returns `true` for `true` or `false`.
