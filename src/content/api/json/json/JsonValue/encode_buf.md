---
slug: "json/json/JsonValue/encode_buf"
package: "json"
title: "JsonValue::encode_buf"
description: "The compact encoding of this value, as Json::encode returns it."
module: "json"
kind: "method"
name: "encode_buf"
parent: "JsonValue"
signature: "pub fn encode_buf() -> Result<Vec<byte>, JsonError>"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/70900ca2e6f10b5a31c57279c1d2e24ce37a0cc1/src/json.hy#L653"
order: 22
---

The compact encoding of this value, as [`Json::encode`](/packages/json/reference/json/Json/encode) returns it.

Called on a `JsonValue` value as `value.encode_buf(…)`.

## Returns

`Result<Vec<byte>, JsonError>`

## See also

- [`Json::encode`](/packages/json/reference/json/Json/encode)
- [`JsonValue`](/packages/json/reference/json/JsonValue): A JSON value: null, bool, int, float, string, array or object.
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null): The JSON `null` value.
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool): A JSON boolean (`true` or `false`).
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int): A JSON integer.
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float): A JSON float.
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string): A JSON string.
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null): Returns `true` for `null`.
