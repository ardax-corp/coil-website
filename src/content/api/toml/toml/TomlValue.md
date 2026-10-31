---
slug: "toml/toml/TomlValue"
package: "toml"
title: "TomlValue"
description: "A TOML value: string, integer, float, boolean, date-time, array or table."
module: "toml"
kind: "class"
name: "TomlValue"
signature: "class TomlValue"
import: "use toml::{TomlValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/ceb0ab800e13abbb0ec43cfc61e9ae1d326d5ccc/src/toml.hy#L242"
order: 1
---

A TOML value: string, integer, float, boolean, date-time, array or table.

`TomlValue` is a handle on one node of a decoded tree (or of a scalar built
with `from_*`), not an enum. Ask its type with the `is_*` predicates, read
scalars from the `s`, `i`, `f` and `flag` fields, and walk containers with
[`get`](/packages/toml/reference/toml/TomlValue/get) / [`has`](/packages/toml/reference/toml/TomlValue/has) (tables) and [`child`](/packages/toml/reference/toml/TomlValue/child) / [`key_at`](/packages/toml/reference/toml/TomlValue/key_at) (both).

A decoded document is always a table, in document order; the empty
document is an empty table. An array of tables (`[[name]]`) is an array
whose elements are tables. Dates and times keep their source text in `s`.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `flag` | `bool` | The boolean payload when [`is_bool()`](/packages/toml/reference/toml/TomlValue/is_bool). On a float that is infinite, `true` for `-inf`. |
| `i` | `int` | The integer payload when [`is_int()`](/packages/toml/reference/toml/TomlValue/is_int). On a float, the kind: `0` finite, `1` infinite, `2` NaN (check this rather than `f != f`). |
| `f` | `float` | The float payload when [`is_float()`](/packages/toml/reference/toml/TomlValue/is_float). |
| `s` | `string` | The string payload when [`is_string()`](/packages/toml/reference/toml/TomlValue/is_string), or the date-time text when [`is_datetime()`](/packages/toml/reference/toml/TomlValue/is_datetime). |

## Associated functions

| Name | Description |
|------|-------------|
| [`from_string`](/packages/toml/reference/toml/TomlValue/from_string) | A TOML string. |
| [`from_int`](/packages/toml/reference/toml/TomlValue/from_int) | A TOML integer. |
| [`from_bool`](/packages/toml/reference/toml/TomlValue/from_bool) | A TOML boolean. |
| [`from_datetime`](/packages/toml/reference/toml/TomlValue/from_datetime) | A date-time value with text `s`, written out unquoted as given. |
| [`from_float`](/packages/toml/reference/toml/TomlValue/from_float) | A TOML float. |
| [`empty_table`](/packages/toml/reference/toml/TomlValue/empty_table) | An empty table, such as the result of decoding an empty document. |

## Methods

| Name | Description |
|------|-------------|
| [`is_string`](/packages/toml/reference/toml/TomlValue/is_string) | Returns `true` for a string. |
| [`is_int`](/packages/toml/reference/toml/TomlValue/is_int) | Returns `true` for an integer. |
| [`is_float`](/packages/toml/reference/toml/TomlValue/is_float) | Returns `true` for a float (including `inf` and `nan`). |
| [`is_bool`](/packages/toml/reference/toml/TomlValue/is_bool) | Returns `true` for a boolean. |
| [`is_datetime`](/packages/toml/reference/toml/TomlValue/is_datetime) | Returns `true` for a date, time or date-time. |
| [`is_array`](/packages/toml/reference/toml/TomlValue/is_array) | Returns `true` for an array (including an array of tables). |
| [`is_table`](/packages/toml/reference/toml/TomlValue/is_table) | Returns `true` for a table (including an inline table). |
| [`array_len`](/packages/toml/reference/toml/TomlValue/array_len) | Number of elements of an array. |
| [`table_len`](/packages/toml/reference/toml/TomlValue/table_len) | Number of keys of a table. |
| [`child`](/packages/toml/reference/toml/TomlValue/child) | Element `n` (0-based) of an array, or the value of the `n`th key of a table, in document order. |
| [`key_at`](/packages/toml/reference/toml/TomlValue/key_at) | The `n`th key (0-based) of a table, in document order, or `""` when `n` is out of range. |
| [`has`](/packages/toml/reference/toml/TomlValue/has) | Returns `true` when this table has `key`. |
| [`get`](/packages/toml/reference/toml/TomlValue/get) | The value of `key` in this table. |
| [`emit`](/packages/toml/reference/toml/TomlValue/emit) | Appends the encoding of this value to `out`, as [`Toml::encode`](/packages/toml/reference/toml/Toml/encode) does. |

## Examples

```coil
use toml::{Toml, TomlValue};
use tests::assert;
let doc = "title = \"demo\"\n\n[owner]\nname = \"ada\"\nborn = 1979-05-27\n";
let v = Toml::v1().decode_str(doc).unwrap_or(TomlValue::empty_table());
assert!(v.is_table() && v.table_len() == 2);
assert!(v.get("title").s == "demo");
let owner = v.get("owner");
assert!(owner.get("name").s == "ada");
assert!(owner.get("born").is_datetime() && owner.get("born").s == "1979-05-27");
```

## See also

- [`TomlValue::get`](/packages/toml/reference/toml/TomlValue/get)
- [`TomlValue::has`](/packages/toml/reference/toml/TomlValue/has)
- [`TomlValue::child`](/packages/toml/reference/toml/TomlValue/child)
- [`TomlValue::key_at`](/packages/toml/reference/toml/TomlValue/key_at)
- [`TomlValue::is_bool`](/packages/toml/reference/toml/TomlValue/is_bool)
- [`TomlValue::is_int`](/packages/toml/reference/toml/TomlValue/is_int)
- [`TomlValue::is_float`](/packages/toml/reference/toml/TomlValue/is_float)
- [`TomlValue::is_string`](/packages/toml/reference/toml/TomlValue/is_string)
- [`TomlValue::is_datetime`](/packages/toml/reference/toml/TomlValue/is_datetime)
