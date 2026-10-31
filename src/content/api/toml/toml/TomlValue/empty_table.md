---
slug: "toml/toml/TomlValue/empty_table"
package: "toml"
title: "TomlValue::empty_table"
description: "An empty table, such as the result of decoding an empty document. It encodes as the empty string."
module: "toml"
kind: "static method"
name: "empty_table"
parent: "TomlValue"
signature: "pub static fn empty_table() -> TomlValue"
import: "use toml::{TomlValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/ceb0ab800e13abbb0ec43cfc61e9ae1d326d5ccc/src/toml.hy#L360"
order: 5
---

An empty table, such as the result of decoding an empty document. It encodes as the empty string.

## Returns

`TomlValue`

## See also

- [`TomlValue`](/packages/toml/reference/toml/TomlValue): A TOML value: string, integer, float, boolean, date-time, array or table.
- [`TomlValue::from_string`](/packages/toml/reference/toml/TomlValue/from_string): A TOML string.
- [`TomlValue::from_int`](/packages/toml/reference/toml/TomlValue/from_int): A TOML integer.
- [`TomlValue::from_bool`](/packages/toml/reference/toml/TomlValue/from_bool): A TOML boolean.
- [`TomlValue::from_datetime`](/packages/toml/reference/toml/TomlValue/from_datetime): A date-time value with text `s`, written out unquoted as given.
- [`TomlValue::from_float`](/packages/toml/reference/toml/TomlValue/from_float): A TOML float.
- [`TomlValue::is_string`](/packages/toml/reference/toml/TomlValue/is_string): Returns `true` for a string.
- [`TomlValue::is_int`](/packages/toml/reference/toml/TomlValue/is_int): Returns `true` for an integer.
