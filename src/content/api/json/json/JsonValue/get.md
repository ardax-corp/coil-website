---
slug: "json/json/JsonValue/get"
package: "json"
title: "JsonValue::get"
description: "Member key of an object (the first one when keys repeat). None when absent or when this is not an object."
module: "json"
kind: "method"
name: "get"
parent: "JsonValue"
signature: "pub fn get(string key) -> Option<JsonValue>"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L183"
order: 15
---

Member `key` of an object (the first one when keys repeat). `None` when absent or when this is not an object.

Called on a `JsonValue` value as `value.get(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |

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
