---
slug: "toml/toml/TomlValue/has"
package: "toml"
title: "TomlValue::has"
description: "Method TomlValue::has."
module: "toml"
kind: "method"
name: "has"
parent: "TomlValue"
signature: "pub fn has(string key) -> bool"
import: "use toml::{TomlValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/9123082b0a6374c00503b61dd222a68283b706f1/src/toml.hy#L258"
order: 18
---

*No documentation yet.*

Called on a `TomlValue` value as `value.has(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |

## Returns

`bool`

## See also

- [`TomlValue`](/packages/toml/reference/toml/TomlValue): Strict TOML value.
- [`TomlValue::wrap`](/packages/toml/reference/toml/TomlValue/wrap)
- [`TomlValue::from_string`](/packages/toml/reference/toml/TomlValue/from_string)
- [`TomlValue::from_int`](/packages/toml/reference/toml/TomlValue/from_int)
- [`TomlValue::from_bool`](/packages/toml/reference/toml/TomlValue/from_bool)
- [`TomlValue::from_datetime`](/packages/toml/reference/toml/TomlValue/from_datetime)
- [`TomlValue::from_float`](/packages/toml/reference/toml/TomlValue/from_float)
- [`TomlValue::empty_table`](/packages/toml/reference/toml/TomlValue/empty_table)
