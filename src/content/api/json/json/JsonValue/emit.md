---
slug: "json/json/JsonValue/emit"
package: "json"
title: "JsonValue::emit"
description: "Appends the compact encoding of this value to out."
module: "json"
kind: "method"
name: "emit"
parent: "JsonValue"
signature: "pub fn emit(Vec<byte> out) -> Result<(), JsonError>"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/e19bb6df6e254766aac3717a85a724f108eb2006/src/json.hy#L648"
order: 21
---

Appends the compact encoding of this value to `out`.

Fails with [`JsonError::Number`](/packages/json/reference/json/JsonError#variant-number) on a non-finite float; `out` may then
hold a partial encoding.

Called on a `JsonValue` value as `value.emit(…)`.

## Parameters

| Name | Type |
|------|------|
| `out` | `Vec<byte>` |

## Returns

`Result<(), JsonError>`

## See also

- [`json::JsonError`](/packages/json/reference/json/JsonError)
- [`JsonValue`](/packages/json/reference/json/JsonValue): A JSON value: null, bool, int, float, string, array or object.
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null): The JSON `null` value.
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool): A JSON boolean (`true` or `false`).
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int): A JSON integer.
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float): A JSON float.
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string): A JSON string.
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null): Returns `true` for `null`.
