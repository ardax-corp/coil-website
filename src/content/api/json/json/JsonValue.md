---
slug: "json/json/JsonValue"
package: "json"
title: "JsonValue"
description: "Strict JSON value. Objects are ordered children (keys[child] / child nodes)."
module: "json"
kind: "class"
name: "JsonValue"
signature: "class JsonValue"
import: "use json::{JsonValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L76"
order: 0
---

Strict JSON value. Objects are ordered children (`keys[child]` / child nodes).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `flag` | `bool` |  |
| `i` | `int` |  |
| `f` | `float` |  |
| `s` | `string` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`wrap`](/packages/json/reference/json/JsonValue/wrap) |  |
| [`null`](/packages/json/reference/json/JsonValue/null) |  |
| [`from_bool`](/packages/json/reference/json/JsonValue/from_bool) |  |
| [`from_int`](/packages/json/reference/json/JsonValue/from_int) |  |
| [`from_float`](/packages/json/reference/json/JsonValue/from_float) |  |
| [`from_string`](/packages/json/reference/json/JsonValue/from_string) |  |

## Methods

| Name | Description |
|------|-------------|
| [`is_null`](/packages/json/reference/json/JsonValue/is_null) |  |
| [`is_bool`](/packages/json/reference/json/JsonValue/is_bool) |  |
| [`is_int`](/packages/json/reference/json/JsonValue/is_int) |  |
| [`is_float`](/packages/json/reference/json/JsonValue/is_float) |  |
| [`is_string`](/packages/json/reference/json/JsonValue/is_string) |  |
| [`is_array`](/packages/json/reference/json/JsonValue/is_array) |  |
| [`is_object`](/packages/json/reference/json/JsonValue/is_object) |  |
| [`array_len`](/packages/json/reference/json/JsonValue/array_len) |  |
| [`object_len`](/packages/json/reference/json/JsonValue/object_len) |  |
| [`get`](/packages/json/reference/json/JsonValue/get) | Member `key` of an object (the first one when keys repeat). |
| [`at`](/packages/json/reference/json/JsonValue/at) | Element `i` of an array. |
| [`keys`](/packages/json/reference/json/JsonValue/keys) | Member names of an object in document order (empty otherwise). |
| [`as_str`](/packages/json/reference/json/JsonValue/as_str) |  |
| [`as_int`](/packages/json/reference/json/JsonValue/as_int) |  |
| [`as_float`](/packages/json/reference/json/JsonValue/as_float) |  |
| [`as_bool`](/packages/json/reference/json/JsonValue/as_bool) |  |
| [`emit`](/packages/json/reference/json/JsonValue/emit) |  |
| [`encode_buf`](/packages/json/reference/json/JsonValue/encode_buf) |  |

## See also

- [`Parser`](/packages/json/reference/json/Parser)
- [`Json`](/packages/json/reference/json/Json): RFC 8259 codec.
- [`Store`](/packages/json/reference/json/Store)
