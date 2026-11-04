---
slug: "json/json/JsonValue/as_str"
package: "json"
title: "JsonValue::as_str"
description: "The string, or None when this is not a string."
module: "json"
kind: "method"
name: "as_str"
parent: "JsonValue"
signature: "pub fn as_str() -> Option<string>"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/7656cabca9b22bca27c2968e9781a6eb6b45132a/src/json.coil#L466"
order: 17
---

The string, or `None` when this is not a string.

Called on a `JsonValue` value as `value.as_str(…)`.

## Returns

`Option<string>`

## Examples

```coil
use json::{JsonValue};
use tests::assert;
assert!(JsonValue::from_string("hi").as_str().unwrap_or("") == "hi");
assert!(JsonValue::from_int(1).as_str().is_none());
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
