---
slug: "json/json/JsonValue/object_len"
package: "json"
title: "JsonValue::object_len"
description: "Number of members of an object, duplicates included. Use only when is_object(): on any other value the result is meaningless."
module: "json"
kind: "method"
name: "object_len"
parent: "JsonValue"
signature: "pub fn object_len() -> int"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/e19bb6df6e254766aac3717a85a724f108eb2006/src/json.hy#L292"
order: 13
---

Number of members of an object, duplicates included. Use only when [`is_object()`](/packages/json/reference/json/JsonValue/is_object): on any other value the result is meaningless.

Called on a `JsonValue` value as `value.object_len(…)`.

## Returns

`int`

## See also

- [`JsonValue::is_object`](/packages/json/reference/json/JsonValue/is_object)
- [`JsonValue`](/packages/json/reference/json/JsonValue): A JSON value: null, bool, int, float, string, array or object.
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null): The JSON `null` value.
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool): A JSON boolean (`true` or `false`).
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int): A JSON integer.
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float): A JSON float.
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string): A JSON string.
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null): Returns `true` for `null`.
