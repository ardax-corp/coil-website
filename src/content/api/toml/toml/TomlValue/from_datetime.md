---
slug: "toml/toml/TomlValue/from_datetime"
package: "toml"
title: "TomlValue::from_datetime"
description: "A date-time value with text s, written out unquoted as given."
module: "toml"
kind: "static method"
name: "from_datetime"
parent: "TomlValue"
signature: "pub static fn from_datetime(string s) -> TomlValue"
import: "use toml::{TomlValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/c03123838096b7fe8af6151ae8306728d56239db/src/toml.coil#L320"
order: 3
---

A date-time value with text `s`, written out unquoted as given.

`s` is not checked: pass a valid TOML offset date-time, local
date-time, local date or local time (`1979-05-27T07:32:00Z`,
`1979-05-27`, `07:32:00`).

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`TomlValue`

## See also

- [`TomlValue`](/packages/toml/reference/toml/TomlValue): A TOML value: string, integer, float, boolean, date-time, array or table.
- [`TomlValue::from_string`](/packages/toml/reference/toml/TomlValue/from_string): A TOML string.
- [`TomlValue::from_int`](/packages/toml/reference/toml/TomlValue/from_int): A TOML integer.
- [`TomlValue::from_bool`](/packages/toml/reference/toml/TomlValue/from_bool): A TOML boolean.
- [`TomlValue::from_float`](/packages/toml/reference/toml/TomlValue/from_float): A TOML float.
- [`TomlValue::empty_table`](/packages/toml/reference/toml/TomlValue/empty_table): An empty table, such as the result of decoding an empty document.
- [`TomlValue::is_string`](/packages/toml/reference/toml/TomlValue/is_string): Returns `true` for a string.
- [`TomlValue::is_int`](/packages/toml/reference/toml/TomlValue/is_int): Returns `true` for an integer.
