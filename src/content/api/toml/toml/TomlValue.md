---
slug: "toml/toml/TomlValue"
package: "toml"
title: "TomlValue"
description: "Strict TOML value. Tables/arrays are ordered children (keys[child] / child nodes)."
module: "toml"
kind: "class"
name: "TomlValue"
signature: "class TomlValue"
import: "use toml::{TomlValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/9123082b0a6374c00503b61dd222a68283b706f1/src/toml.hy#L123"
order: 1
---

Strict TOML value. Tables/arrays are ordered children (`keys[child]` / child nodes).

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
| [`wrap`](/packages/toml/reference/toml/TomlValue/wrap) |  |
| [`from_string`](/packages/toml/reference/toml/TomlValue/from_string) |  |
| [`from_int`](/packages/toml/reference/toml/TomlValue/from_int) |  |
| [`from_bool`](/packages/toml/reference/toml/TomlValue/from_bool) |  |
| [`from_datetime`](/packages/toml/reference/toml/TomlValue/from_datetime) |  |
| [`from_float`](/packages/toml/reference/toml/TomlValue/from_float) |  |
| [`empty_table`](/packages/toml/reference/toml/TomlValue/empty_table) |  |

## Methods

| Name | Description |
|------|-------------|
| [`is_string`](/packages/toml/reference/toml/TomlValue/is_string) |  |
| [`is_int`](/packages/toml/reference/toml/TomlValue/is_int) |  |
| [`is_float`](/packages/toml/reference/toml/TomlValue/is_float) |  |
| [`is_bool`](/packages/toml/reference/toml/TomlValue/is_bool) |  |
| [`is_datetime`](/packages/toml/reference/toml/TomlValue/is_datetime) |  |
| [`is_array`](/packages/toml/reference/toml/TomlValue/is_array) |  |
| [`is_table`](/packages/toml/reference/toml/TomlValue/is_table) |  |
| [`array_len`](/packages/toml/reference/toml/TomlValue/array_len) |  |
| [`table_len`](/packages/toml/reference/toml/TomlValue/table_len) |  |
| [`child`](/packages/toml/reference/toml/TomlValue/child) |  |
| [`key_at`](/packages/toml/reference/toml/TomlValue/key_at) |  |
| [`has`](/packages/toml/reference/toml/TomlValue/has) |  |
| [`get`](/packages/toml/reference/toml/TomlValue/get) |  |
| [`emit`](/packages/toml/reference/toml/TomlValue/emit) |  |

## See also

- [`Toml`](/packages/toml/reference/toml/Toml): TOML 1.0 codec.
- [`Store`](/packages/toml/reference/toml/Store)
