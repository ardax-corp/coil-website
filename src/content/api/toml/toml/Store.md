---
slug: "toml/toml/Store"
package: "toml"
title: "Store"
description: "Class Store."
module: "toml"
kind: "class"
name: "Store"
signature: "class Store"
import: "use toml::{Store};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/9123082b0a6374c00503b61dd222a68283b706f1/src/toml.hy#L25"
order: 3
---

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `tags` | `Vec<int>` |  |
| `flags` | `Vec<bool>` |  |
| `ints` | `Vec<int>` |  |
| `floats` | `Vec<float>` |  |
| `strs` | `Vec<string>` |  |
| `keys` | `Vec<string>` |  |
| `first` | `Vec<int>` |  |
| `next` | `Vec<int>` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/toml/reference/toml/Store/new) |  |

## Methods

| Name | Description |
|------|-------------|
| [`add`](/packages/toml/reference/toml/Store/add) |  |
| [`attach`](/packages/toml/reference/toml/Store/attach) |  |
| [`count_children`](/packages/toml/reference/toml/Store/count_children) |  |
| [`find_child`](/packages/toml/reference/toml/Store/find_child) |  |
| [`nth_child`](/packages/toml/reference/toml/Store/nth_child) |  |
| [`last_child`](/packages/toml/reference/toml/Store/last_child) |  |

## See also

- [`TomlValue`](/packages/toml/reference/toml/TomlValue): Strict TOML value.
- [`Toml`](/packages/toml/reference/toml/Toml): TOML 1.0 codec.
