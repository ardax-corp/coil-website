---
slug: "json/json/JsonValue/as_float"
package: "json"
title: "JsonValue::as_float"
description: "The float, or None when this is not a float (an int such as 1 is not converted)."
module: "json"
kind: "method"
name: "as_float"
parent: "JsonValue"
signature: "pub fn as_float() -> Option<float>"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/e19bb6df6e254766aac3717a85a724f108eb2006/src/json.hy#L406"
order: 19
---

The float, or `None` when this is not a float (an int such as `1` is not converted).

Called on a `JsonValue` value as `value.as_float(…)`.

## Returns

`Option<float>`

## See also

- [`JsonValue`](/packages/json/reference/json/JsonValue): A JSON value: null, bool, int, float, string, array or object.
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null): The JSON `null` value.
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool): A JSON boolean (`true` or `false`).
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int): A JSON integer.
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float): A JSON float.
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string): A JSON string.
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null): Returns `true` for `null`.
- [`JsonValue::is_bool`](/packages/json/reference/json/JsonValue/is_bool): Returns `true` for `true` or `false`.
