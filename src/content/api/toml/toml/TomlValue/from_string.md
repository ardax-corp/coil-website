---
slug: "toml/toml/TomlValue/from_string"
package: "toml"
title: "TomlValue::from_string"
description: "A TOML string. Encoding writes a basic string with escapes as needed."
module: "toml"
kind: "static method"
name: "from_string"
parent: "TomlValue"
signature: "pub static fn from_string(string s) -> TomlValue"
import: "use toml::{TomlValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/c03123838096b7fe8af6151ae8306728d56239db/src/toml.hy#L295"
order: 0
---

A TOML string. Encoding writes a basic string with escapes as needed.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`TomlValue`

## Examples

```coil
use toml::{Toml, TomlValue};
use tests::assert;
let v = TomlValue::from_string("hi");
assert!(v.is_string() && v.s == "hi");
assert!(Toml::v1().encode_str(v).unwrap_or("") == "\"hi\"");
```

## See also

- [`TomlValue`](/packages/toml/reference/toml/TomlValue): A TOML value: string, integer, float, boolean, date-time, array or table.
- [`TomlValue::from_int`](/packages/toml/reference/toml/TomlValue/from_int): A TOML integer.
- [`TomlValue::from_bool`](/packages/toml/reference/toml/TomlValue/from_bool): A TOML boolean.
- [`TomlValue::from_datetime`](/packages/toml/reference/toml/TomlValue/from_datetime): A date-time value with text `s`, written out unquoted as given.
- [`TomlValue::from_float`](/packages/toml/reference/toml/TomlValue/from_float): A TOML float.
- [`TomlValue::empty_table`](/packages/toml/reference/toml/TomlValue/empty_table): An empty table, such as the result of decoding an empty document.
- [`TomlValue::is_string`](/packages/toml/reference/toml/TomlValue/is_string): Returns `true` for a string.
- [`TomlValue::is_int`](/packages/toml/reference/toml/TomlValue/is_int): Returns `true` for an integer.
