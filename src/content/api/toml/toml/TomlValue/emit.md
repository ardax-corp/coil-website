---
slug: "toml/toml/TomlValue/emit"
package: "toml"
title: "TomlValue::emit"
description: "Appends the encoding of this value to out, as Toml::encode does."
module: "toml"
kind: "method"
name: "emit"
parent: "TomlValue"
signature: "pub fn emit(Vec<byte> out) -> Result<(), TomlError>"
import: "use toml::{TomlValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/ceb0ab800e13abbb0ec43cfc61e9ae1d326d5ccc/src/toml.hy#L781"
order: 19
---

Appends the encoding of this value to `out`, as [`Toml::encode`](/packages/toml/reference/toml/Toml/encode) does.

Called on a `TomlValue` value as `value.emit(…)`.

## Parameters

| Name | Type |
|------|------|
| `out` | `Vec<byte>` |

## Returns

`Result<(), TomlError>`

## See also

- [`Toml::encode`](/packages/toml/reference/toml/Toml/encode)
- [`TomlValue`](/packages/toml/reference/toml/TomlValue): A TOML value: string, integer, float, boolean, date-time, array or table.
- [`TomlValue::from_string`](/packages/toml/reference/toml/TomlValue/from_string): A TOML string.
- [`TomlValue::from_int`](/packages/toml/reference/toml/TomlValue/from_int): A TOML integer.
- [`TomlValue::from_bool`](/packages/toml/reference/toml/TomlValue/from_bool): A TOML boolean.
- [`TomlValue::from_datetime`](/packages/toml/reference/toml/TomlValue/from_datetime): A date-time value with text `s`, written out unquoted as given.
- [`TomlValue::from_float`](/packages/toml/reference/toml/TomlValue/from_float): A TOML float.
- [`TomlValue::empty_table`](/packages/toml/reference/toml/TomlValue/empty_table): An empty table, such as the result of decoding an empty document.
