---
slug: "json/json/JsonValue/from_string"
package: "json"
title: "JsonValue::from_string"
description: "A JSON string. Encoding escapes quotes, backslashes and control characters."
module: "json"
kind: "static method"
name: "from_string"
parent: "JsonValue"
signature: "pub static fn from_string(string s) -> JsonValue"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/e19bb6df6e254766aac3717a85a724f108eb2006/src/json.coil#L242"
order: 4
---

A JSON string. Encoding escapes quotes, backslashes and control characters.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`JsonValue`

## Examples

```coil
use json::{Json, JsonValue};
use tests::assert;
let v = JsonValue::from_string("say \"hi\"");
assert!(Json::strict().encode_str(v).unwrap_or("") == "\"say \\\"hi\\\"\"");
```

## See also

- [`JsonValue`](/packages/json/reference/json/JsonValue): A JSON value: null, bool, int, float, string, array or object.
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null): The JSON `null` value.
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool): A JSON boolean (`true` or `false`).
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int): A JSON integer.
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float): A JSON float.
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null): Returns `true` for `null`.
- [`JsonValue::is_bool`](/packages/json/reference/json/JsonValue/is_bool): Returns `true` for `true` or `false`.
- [`JsonValue::is_int`](/packages/json/reference/json/JsonValue/is_int): Returns `true` for an integer (a number with no fraction or exponent that fits in an `int`).
