---
slug: "json/json/JsonValue/keys"
package: "json"
title: "JsonValue::keys"
description: "Member names of an object in document order, duplicates included."
module: "json"
kind: "method"
name: "keys"
parent: "JsonValue"
signature: "pub fn keys() -> Vec<string>"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/e19bb6df6e254766aac3717a85a724f108eb2006/src/json.hy#L365"
order: 16
---

Member names of an object in document order, duplicates included.

Returns an empty [`Vec`](/docs/reference/prelude/Vec) when this is not an object.

Called on a `JsonValue` value as `value.keys(…)`.

## Returns

`Vec<string>`

## Examples

```coil
use json::{Json, JsonValue};
use tests::assert;
let v = Json::strict().decode_str("{\"b\":1,\"a\":2}").unwrap_or(JsonValue::null());
let ks = v.keys();
assert!(ks.len() == 2 && ks[0] == "b" && ks[1] == "a");
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`JsonValue`](/packages/json/reference/json/JsonValue): A JSON value: null, bool, int, float, string, array or object.
- [`JsonValue::null`](/packages/json/reference/json/JsonValue/null): The JSON `null` value.
- [`JsonValue::from_bool`](/packages/json/reference/json/JsonValue/from_bool): A JSON boolean (`true` or `false`).
- [`JsonValue::from_int`](/packages/json/reference/json/JsonValue/from_int): A JSON integer.
- [`JsonValue::from_float`](/packages/json/reference/json/JsonValue/from_float): A JSON float.
- [`JsonValue::from_string`](/packages/json/reference/json/JsonValue/from_string): A JSON string.
- [`JsonValue::is_null`](/packages/json/reference/json/JsonValue/is_null): Returns `true` for `null`.
