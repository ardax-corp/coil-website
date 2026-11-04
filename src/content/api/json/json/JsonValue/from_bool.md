---
slug: "json/json/JsonValue/from_bool"
package: "json"
title: "JsonValue::from_bool"
description: "A JSON boolean (true or false)."
module: "json"
kind: "static method"
name: "from_bool"
parent: "JsonValue"
signature: "pub static fn from_bool(bool flag) -> JsonValue"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/7656cabca9b22bca27c2968e9781a6eb6b45132a/src/json.coil#L279"
order: 1
---

A JSON boolean (`true` or `false`).

## Parameters

| Name | Type |
|------|------|
| `flag` | `bool` |

## Returns

`JsonValue`

## See also

- [`JsonValue`](/packages/json/reference/json/JsonValue): A JSON value: null, bool, int, float, string, array or object.
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null): The JSON `null` value.
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int): A JSON integer.
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float): A JSON float.
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string): A JSON string.
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null): Returns `true` for `null`.
- [`JsonValue::is_bool`](/packages/json/reference/json/JsonValue/is_bool): Returns `true` for `true` or `false`.
- [`JsonValue::is_int`](/packages/json/reference/json/JsonValue/is_int): Returns `true` for an integer (a number with no fraction or exponent that fits in an `int`).
