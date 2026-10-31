---
slug: "toml/toml/TomlValue/get"
package: "toml"
title: "TomlValue::get"
description: "The value of key in this table."
module: "toml"
kind: "method"
name: "get"
parent: "TomlValue"
signature: "pub fn get(string key) -> TomlValue"
import: "use toml::{TomlValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/c03123838096b7fe8af6151ae8306728d56239db/src/toml.hy#L474"
order: 18
---

The value of `key` in this table.

When the key is absent this returns the table itself, so check [`has`](/packages/toml/reference/toml/TomlValue/has)
first when the key may be missing. Dotted keys are nested tables:
`a.b = 1` is `get("a").get("b")`.

Called on a `TomlValue` value as `value.get(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |

## Returns

`TomlValue`

## Examples

```coil
use toml::{Toml, TomlValue};
use tests::assert;
let v = Toml::v1().decode_str("server.port = 8080\n").unwrap_or(TomlValue::empty_table());
assert!(v.has("server") && !v.has("port"));
assert!(v.get("server").get("port").i == 8080);
```

## See also

- [`TomlValue::has`](/packages/toml/reference/toml/TomlValue/has)
- [`TomlValue`](/packages/toml/reference/toml/TomlValue): A TOML value: string, integer, float, boolean, date-time, array or table.
- [`TomlValue::from_string`](/packages/toml/reference/toml/TomlValue/from_string): A TOML string.
- [`TomlValue::from_int`](/packages/toml/reference/toml/TomlValue/from_int): A TOML integer.
- [`TomlValue::from_bool`](/packages/toml/reference/toml/TomlValue/from_bool): A TOML boolean.
- [`TomlValue::from_datetime`](/packages/toml/reference/toml/TomlValue/from_datetime): A date-time value with text `s`, written out unquoted as given.
- [`TomlValue::from_float`](/packages/toml/reference/toml/TomlValue/from_float): A TOML float.
- [`TomlValue::empty_table`](/packages/toml/reference/toml/TomlValue/empty_table): An empty table, such as the result of decoding an empty document.
