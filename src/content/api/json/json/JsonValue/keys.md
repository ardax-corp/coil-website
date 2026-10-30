---
slug: "json/json/JsonValue/keys"
package: "json"
title: "JsonValue::keys"
description: "Member names of an object in document order (empty otherwise)."
module: "json"
kind: "method"
name: "keys"
parent: "JsonValue"
signature: "pub fn keys() -> Vec<string>"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L215"
order: 17
---

Member names of an object in document order (empty otherwise).

Called on a `JsonValue` value as `value.keys(…)`.

## Returns

`Vec<string>`

## See also

- [`JsonValue`](/packages/json/reference/json/JsonValue): Strict JSON value.
- [`JsonValue::wrap`](/packages/json/reference/json/JsonValue/wrap)
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null)
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool)
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int)
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float)
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string)
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null)
