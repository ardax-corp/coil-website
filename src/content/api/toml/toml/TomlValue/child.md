---
slug: "toml/toml/TomlValue/child"
package: "toml"
title: "TomlValue::child"
description: "Element n (0-based) of an array, or the value of the nth key of a table, in document order."
module: "toml"
kind: "method"
name: "child"
parent: "TomlValue"
signature: "pub fn child(int n) -> TomlValue"
import: "use toml::{TomlValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/ceb0ab800e13abbb0ec43cfc61e9ae1d326d5ccc/src/toml.hy#L427"
order: 15
---

Element `n` (0-based) of an array, or the value of the `n`th key of a table, in document order.

When `n` is out of range this returns the value itself, so check
`n` against [`array_len`](/packages/toml/reference/toml/TomlValue/array_len) / [`table_len`](/packages/toml/reference/toml/TomlValue/table_len) first.

Called on a `TomlValue` value as `value.child(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`TomlValue`

## Examples

```coil
use toml::{Toml, TomlValue};
use tests::assert;
let doc = "[[bin]]\nname = \"a\"\n\n[[bin]]\nname = \"b\"\n";
let bins = Toml::v1().decode_str(doc).unwrap_or(TomlValue::empty_table()).get("bin");
assert!(bins.is_array() && bins.array_len() == 2);
assert!(bins.child(1).get("name").s == "b");
```

## See also

- [`TomlValue::array_len`](/packages/toml/reference/toml/TomlValue/array_len)
- [`TomlValue::table_len`](/packages/toml/reference/toml/TomlValue/table_len)
- [`TomlValue`](/packages/toml/reference/toml/TomlValue): A TOML value: string, integer, float, boolean, date-time, array or table.
- [`TomlValue::from_string`](/packages/toml/reference/toml/TomlValue/from_string): A TOML string.
- [`TomlValue::from_int`](/packages/toml/reference/toml/TomlValue/from_int): A TOML integer.
- [`TomlValue::from_bool`](/packages/toml/reference/toml/TomlValue/from_bool): A TOML boolean.
- [`TomlValue::from_datetime`](/packages/toml/reference/toml/TomlValue/from_datetime): A date-time value with text `s`, written out unquoted as given.
- [`TomlValue::from_float`](/packages/toml/reference/toml/TomlValue/from_float): A TOML float.
