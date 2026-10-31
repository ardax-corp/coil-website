---
slug: "json/json/JsonValue/null"
package: "json"
title: "JsonValue::null"
description: "The JSON null value."
module: "json"
kind: "static method"
name: "null"
parent: "JsonValue"
signature: "pub static fn null() -> JsonValue"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/70900ca2e6f10b5a31c57279c1d2e24ce37a0cc1/src/json.hy#L191"
order: 0
---

The JSON `null` value.

## Returns

`JsonValue`

## Examples

```coil
use json::{Json, JsonValue};
use tests::assert;
let v = JsonValue::null();
assert!(v.is_null());
assert!(Json::strict().encode_str(v).unwrap_or("") == "null");
```

## See also

- [`JsonValue`](/packages/json/reference/json/JsonValue): A JSON value: null, bool, int, float, string, array or object.
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool): A JSON boolean (`true` or `false`).
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int): A JSON integer.
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float): A JSON float.
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string): A JSON string.
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null): Returns `true` for `null`.
- [`JsonValue::is_bool`](/packages/json/reference/json/JsonValue/is_bool): Returns `true` for `true` or `false`.
- [`JsonValue::is_int`](/packages/json/reference/json/JsonValue/is_int): Returns `true` for an integer (a number with no fraction or exponent that fits in an `int`).
