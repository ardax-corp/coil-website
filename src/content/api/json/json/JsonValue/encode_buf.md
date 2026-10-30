---
slug: "json/json/JsonValue/encode_buf"
package: "json"
title: "JsonValue::encode_buf"
description: "Method JsonValue::encode_buf."
module: "json"
kind: "method"
name: "encode_buf"
parent: "JsonValue"
signature: "pub fn encode_buf() -> Result<Vec<byte>, JsonError>"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L483"
order: 23
---

*No documentation yet.*

Called on a `JsonValue` value as `value.encode_buf(…)`.

## Returns

`Result<Vec<byte>, JsonError>`

## See also

- [`JsonValue`](/packages/json/reference/json/JsonValue): Strict JSON value.
- [`JsonValue::wrap`](/packages/json/reference/json/JsonValue/wrap)
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null)
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool)
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int)
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float)
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string)
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null)
