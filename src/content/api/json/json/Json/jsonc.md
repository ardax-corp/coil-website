---
slug: "json/json/Json/jsonc"
package: "json"
title: "Json::jsonc"
description: "The JSONC codec: decode also accepts // and /* */ comments and trailing commas in arrays and objects. Encode is still strict RFC 8259."
module: "json"
kind: "static method"
name: "jsonc"
parent: "Json"
signature: "pub static fn jsonc() -> Json"
import: "use json::{Json};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/70900ca2e6f10b5a31c57279c1d2e24ce37a0cc1/src/json.hy#L1410"
order: 1
---

The JSONC codec: decode also accepts `//` and `/* */` comments and trailing commas in arrays and objects. Encode is still strict RFC 8259.

## Returns

`Json`

## Examples

```coil
use json::{Json, JsonValue};
use tests::assert;
let v = Json::jsonc()
    .decode_str("{\n  /* port */ \"port\": 8080, // default\n}")
    .unwrap_or(JsonValue::null());
assert!(v.get("port").is_some());
```

## See also

- [`Json`](/packages/json/reference/json/Json): A JSON codec: one-shot decode of bytes or a string to a `JsonValue`, and compact encode back.
- [`Json::strict`](/packages/json/reference/json/Json/strict): The strict RFC 8259 codec.
- [`Json::encode`](/packages/json/reference/json/Json/encode): Encodes `value` as compact UTF-8 JSON bytes.
- [`Json::decode`](/packages/json/reference/json/Json/decode): Decodes one JSON document from `bytes`.
- [`Json::encode_str`](/packages/json/reference/json/Json/encode_str): Encodes `value` as a compact JSON `string`: `encode`, then the bytes read as UTF-8.
- [`Json::decode_str`](/packages/json/reference/json/Json/decode_str): Decodes one JSON document from a string; same as `decode` on its bytes.
