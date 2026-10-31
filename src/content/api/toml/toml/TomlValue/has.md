---
slug: "toml/toml/TomlValue/has"
package: "toml"
title: "TomlValue::has"
description: "Returns true when this table has key."
module: "toml"
kind: "method"
name: "has"
parent: "TomlValue"
signature: "pub fn has(string key) -> bool"
import: "use toml::{TomlValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/ceb0ab800e13abbb0ec43cfc61e9ae1d326d5ccc/src/toml.hy#L455"
order: 17
---

Returns `true` when this table has `key`.

Called on a `TomlValue` value as `value.has(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |

## Returns

`bool`

## See also

- [`TomlValue`](/packages/toml/reference/toml/TomlValue): A TOML value: string, integer, float, boolean, date-time, array or table.
- [`TomlValue::from_string`](/packages/toml/reference/toml/TomlValue/from_string): A TOML string.
- [`TomlValue::from_int`](/packages/toml/reference/toml/TomlValue/from_int): A TOML integer.
- [`TomlValue::from_bool`](/packages/toml/reference/toml/TomlValue/from_bool): A TOML boolean.
- [`TomlValue::from_datetime`](/packages/toml/reference/toml/TomlValue/from_datetime): A date-time value with text `s`, written out unquoted as given.
- [`TomlValue::from_float`](/packages/toml/reference/toml/TomlValue/from_float): A TOML float.
- [`TomlValue::empty_table`](/packages/toml/reference/toml/TomlValue/empty_table): An empty table, such as the result of decoding an empty document.
- [`TomlValue::is_string`](/packages/toml/reference/toml/TomlValue/is_string): Returns `true` for a string.
