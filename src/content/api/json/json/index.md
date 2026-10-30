---
slug: "json/json/index"
package: "json"
title: "json"
description: "Strict RFC 8259 JSON encode and decode, plus a JSONC parse mode."
module: "json"
kind: "module"
name: "json"
origin: "package"
auto: false
order: 0
---

Decode with [`Json::strict()`](/packages/json/reference/json/Json/strict) (or [`Json::jsonc()`](/packages/json/reference/json/Json/jsonc) for comments and trailing commas) and walk the result as a [`JsonValue`](/packages/json/reference/json/JsonValue); errors are a [`JsonError`](/packages/json/reference/json/JsonError) with line and column.

Part of the [json](/packages/json) package ([coil-json](https://github.com/ardax-corp/coil-json)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/json)).

Import what you use (`use path::*` is not allowed):

```coil
use json::{JsonValue, JsonError};
```

## Types

| Name | Description |
|------|-------------|
| [`JsonValue`](/packages/json/reference/json/JsonValue) | Strict JSON value. |
| [`JsonError`](/packages/json/reference/json/JsonError) | Decode/encode failure. |
| [`Parser`](/packages/json/reference/json/Parser) |  |
| [`Json`](/packages/json/reference/json/Json) | RFC 8259 codec. |
| [`Store`](/packages/json/reference/json/Store) |  |
