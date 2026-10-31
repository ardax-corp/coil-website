---
slug: "toml/toml/TomlValue/array_len"
package: "toml"
title: "TomlValue::array_len"
description: "Number of elements of an array. Use only when is_array()."
module: "toml"
kind: "method"
name: "array_len"
parent: "TomlValue"
signature: "pub fn array_len() -> int"
import: "use toml::{TomlValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/c03123838096b7fe8af6151ae8306728d56239db/src/toml.hy#L402"
order: 13
---

Number of elements of an array. Use only when [`is_array()`](/packages/toml/reference/toml/TomlValue/is_array).

Called on a `TomlValue` value as `value.array_len(…)`.

## Returns

`int`

## See also

- [`TomlValue::is_array`](/packages/toml/reference/toml/TomlValue/is_array)
- [`TomlValue`](/packages/toml/reference/toml/TomlValue): A TOML value: string, integer, float, boolean, date-time, array or table.
- [`TomlValue::from_string`](/packages/toml/reference/toml/TomlValue/from_string): A TOML string.
- [`TomlValue::from_int`](/packages/toml/reference/toml/TomlValue/from_int): A TOML integer.
- [`TomlValue::from_bool`](/packages/toml/reference/toml/TomlValue/from_bool): A TOML boolean.
- [`TomlValue::from_datetime`](/packages/toml/reference/toml/TomlValue/from_datetime): A date-time value with text `s`, written out unquoted as given.
- [`TomlValue::from_float`](/packages/toml/reference/toml/TomlValue/from_float): A TOML float.
- [`TomlValue::empty_table`](/packages/toml/reference/toml/TomlValue/empty_table): An empty table, such as the result of decoding an empty document.
