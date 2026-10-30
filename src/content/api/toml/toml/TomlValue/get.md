---
slug: "toml/toml/TomlValue/get"
package: "toml"
title: "TomlValue::get"
description: "Method TomlValue::get."
module: "toml"
kind: "method"
name: "get"
parent: "TomlValue"
signature: "pub fn get(string key) -> TomlValue"
import: "use toml::{TomlValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/9123082b0a6374c00503b61dd222a68283b706f1/src/toml.hy#L262"
order: 19
---

*No documentation yet.*

Called on a `TomlValue` value as `value.get(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |

## Returns

`TomlValue`

## See also

- [`TomlValue`](/packages/toml/reference/toml/TomlValue): Strict TOML value.
- [`TomlValue::wrap`](/packages/toml/reference/toml/TomlValue/wrap)
- [`TomlValue::from_string`](/packages/toml/reference/toml/TomlValue/from_string)
- [`TomlValue::from_int`](/packages/toml/reference/toml/TomlValue/from_int)
- [`TomlValue::from_bool`](/packages/toml/reference/toml/TomlValue/from_bool)
- [`TomlValue::from_datetime`](/packages/toml/reference/toml/TomlValue/from_datetime)
- [`TomlValue::from_float`](/packages/toml/reference/toml/TomlValue/from_float)
- [`TomlValue::empty_table`](/packages/toml/reference/toml/TomlValue/empty_table)
