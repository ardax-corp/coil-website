---
slug: "toml/toml/TomlValue/from_float"
package: "toml"
title: "TomlValue::from_float"
description: "A TOML float. Infinities and NaN are recorded in i and flag and encode as inf, -inf and nan."
module: "toml"
kind: "static method"
name: "from_float"
parent: "TomlValue"
signature: "pub static fn from_float(float x) -> TomlValue"
import: "use toml::{TomlValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/ceb0ab800e13abbb0ec43cfc61e9ae1d326d5ccc/src/toml.hy#L338"
order: 4
---

A TOML float. Infinities and NaN are recorded in `i` and `flag` and encode as `inf`, `-inf` and `nan`.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`TomlValue`

## Examples

```coil
use toml::{Toml, TomlValue};
use tests::assert;
let v = TomlValue::from_float(-1.0 / 0.0);
assert!(v.i == 1 && v.flag);
assert!(Toml::v1().encode_str(v).unwrap_or("") == "-inf");
```

## See also

- [`TomlValue`](/packages/toml/reference/toml/TomlValue): A TOML value: string, integer, float, boolean, date-time, array or table.
- [`TomlValue::from_string`](/packages/toml/reference/toml/TomlValue/from_string): A TOML string.
- [`TomlValue::from_int`](/packages/toml/reference/toml/TomlValue/from_int): A TOML integer.
- [`TomlValue::from_bool`](/packages/toml/reference/toml/TomlValue/from_bool): A TOML boolean.
- [`TomlValue::from_datetime`](/packages/toml/reference/toml/TomlValue/from_datetime): A date-time value with text `s`, written out unquoted as given.
- [`TomlValue::empty_table`](/packages/toml/reference/toml/TomlValue/empty_table): An empty table, such as the result of decoding an empty document.
- [`TomlValue::is_string`](/packages/toml/reference/toml/TomlValue/is_string): Returns `true` for a string.
- [`TomlValue::is_int`](/packages/toml/reference/toml/TomlValue/is_int): Returns `true` for an integer.
