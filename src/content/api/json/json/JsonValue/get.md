---
slug: "json/json/JsonValue/get"
package: "json"
title: "JsonValue::get"
description: "Member key of an object (the first one when keys repeat)."
module: "json"
kind: "method"
name: "get"
parent: "JsonValue"
signature: "pub fn get(string key) -> Option<JsonValue>"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/70900ca2e6f10b5a31c57279c1d2e24ce37a0cc1/src/json.hy#L309"
order: 14
---

Member `key` of an object (the first one when keys repeat).

Returns `None` when the key is absent or this is not an object.

Called on a `JsonValue` value as `value.get(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |

## Returns

`Option<JsonValue>`

## Examples

```coil
use json::{Json, JsonValue};
use tests::assert;
let v = Json::strict().decode_str("{\"a\":1,\"a\":2}").unwrap_or(JsonValue::null());
assert!(v.get("a").map_or(0, fn (JsonValue x) => x.as_int().unwrap_or(0)) == 1);
assert!(v.get("b").is_none());
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
