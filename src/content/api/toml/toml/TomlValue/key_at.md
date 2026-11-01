---
slug: "toml/toml/TomlValue/key_at"
package: "toml"
title: "TomlValue::key_at"
description: "The nth key (0-based) of a table, in document order, or \"\" when n is out of range."
module: "toml"
kind: "method"
name: "key_at"
parent: "TomlValue"
signature: "pub fn key_at(int n) -> string"
import: "use toml::{TomlValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/c03123838096b7fe8af6151ae8306728d56239db/src/toml.coil#L446"
order: 16
---

The `n`th key (0-based) of a table, in document order, or `""` when `n` is out of range.

Called on a `TomlValue` value as `value.key_at(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`string`

## Examples

```coil
use toml::{Toml, TomlValue};
use tests::assert;
let v = Toml::v1().decode_str("b = 1\na = 2\n").unwrap_or(TomlValue::empty_table());
assert!(v.key_at(0) == "b" && v.key_at(1) == "a" && v.key_at(2) == "");
```

## See also

- [`TomlValue`](/packages/toml/reference/toml/TomlValue): A TOML value: string, integer, float, boolean, date-time, array or table.
- [`TomlValue::from_string`](/packages/toml/reference/toml/TomlValue/from_string): A TOML string.
- [`TomlValue::from_int`](/packages/toml/reference/toml/TomlValue/from_int): A TOML integer.
- [`TomlValue::from_bool`](/packages/toml/reference/toml/TomlValue/from_bool): A TOML boolean.
- [`TomlValue::from_datetime`](/packages/toml/reference/toml/TomlValue/from_datetime): A date-time value with text `s`, written out unquoted as given.
- [`TomlValue::from_float`](/packages/toml/reference/toml/TomlValue/from_float): A TOML float.
- [`TomlValue::empty_table`](/packages/toml/reference/toml/TomlValue/empty_table): An empty table, such as the result of decoding an empty document.
- [`TomlValue::is_string`](/packages/toml/reference/toml/TomlValue/is_string): Returns `true` for a string.
