---
slug: "json/json/JsonValue/at"
package: "json"
title: "JsonValue::at"
description: "Element i (0-based) of an array."
module: "json"
kind: "method"
name: "at"
parent: "JsonValue"
signature: "pub fn at(int i) -> Option<JsonValue>"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/e19bb6df6e254766aac3717a85a724f108eb2006/src/json.coil#L336"
order: 15
---

Element `i` (0-based) of an array.

Returns `None` when `i` is out of range or this is not an array.

Called on a `JsonValue` value as `value.at(…)`.

## Parameters

| Name | Type |
|------|------|
| `i` | `int` |

## Returns

`Option<JsonValue>`

## Examples

```coil
use json::{Json, JsonValue};
use tests::assert;
let v = Json::strict().decode_str("[true,false]").unwrap_or(JsonValue::null());
assert!(v.at(0).map_or(false, fn (JsonValue x) => x.as_bool().unwrap_or(false)));
assert!(v.at(2).is_none());
```

## See also

- [`JsonValue`](/packages/json/reference/json/JsonValue): A JSON value: null, bool, int, float, string, array or object.
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null): The JSON `null` value.
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool): A JSON boolean (`true` or `false`).
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int): A JSON integer.
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float): A JSON float.
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string): A JSON string.
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null): Returns `true` for `null`.
- [`JsonValue::is_bool`](/packages/json/reference/json/JsonValue/is_bool): Returns `true` for `true` or `false`.
