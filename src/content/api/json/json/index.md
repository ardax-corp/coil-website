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
| [`JsonValue`](/packages/json/reference/json/JsonValue) | A JSON value: null, bool, int, float, string, array or object. |
| [`JsonError`](/packages/json/reference/json/JsonError) | Why a decode or encode failed. |
| [`Json`](/packages/json/reference/json/Json) | A JSON codec: one-shot decode of bytes or a string to a [`JsonValue`](/packages/json/reference/json/JsonValue), and compact encode back. |
