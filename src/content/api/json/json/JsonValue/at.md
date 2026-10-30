---
slug: "json/json/JsonValue/at"
package: "json"
title: "JsonValue::at"
description: "Element i of an array. None when out of range or not an array."
module: "json"
kind: "method"
name: "at"
parent: "JsonValue"
signature: "pub fn at(int i) -> Option<JsonValue>"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L198"
order: 16
---

Element `i` of an array. `None` when out of range or not an array.

Called on a `JsonValue` value as `value.at(…)`.

## Parameters

| Name | Type |
|------|------|
| `i` | `int` |

## Returns

`Option<JsonValue>`

## See also

- [`JsonValue`](/packages/json/reference/json/JsonValue): Strict JSON value.
- [`JsonValue::wrap`](/packages/json/reference/json/JsonValue/wrap)
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null)
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool)
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int)
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float)
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string)
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null)
