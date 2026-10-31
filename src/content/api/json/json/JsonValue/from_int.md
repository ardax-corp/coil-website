---
slug: "json/json/JsonValue/from_int"
package: "json"
title: "JsonValue::from_int"
description: "A JSON integer."
module: "json"
kind: "static method"
name: "from_int"
parent: "JsonValue"
signature: "pub static fn from_int(int n) -> JsonValue"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/e19bb6df6e254766aac3717a85a724f108eb2006/src/json.hy#L215"
order: 2
---

A JSON integer.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`JsonValue`

## Examples

```coil
use json::{Json, JsonValue};
use tests::assert;
let v = JsonValue::from_int(-7);
assert!(v.as_int().unwrap_or(0) == -7);
assert!(Json::strict().encode_str(v).unwrap_or("") == "-7");
```

## See also

- [`JsonValue`](/packages/json/reference/json/JsonValue): A JSON value: null, bool, int, float, string, array or object.
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null): The JSON `null` value.
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool): A JSON boolean (`true` or `false`).
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float): A JSON float.
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string): A JSON string.
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null): Returns `true` for `null`.
- [`JsonValue::is_bool`](/packages/json/reference/json/JsonValue/is_bool): Returns `true` for `true` or `false`.
- [`JsonValue::is_int`](/packages/json/reference/json/JsonValue/is_int): Returns `true` for an integer (a number with no fraction or exponent that fits in an `int`).
