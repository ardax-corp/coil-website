---
slug: "json/json/Store"
package: "json"
title: "Store"
description: "Class Store."
module: "json"
kind: "class"
name: "Store"
signature: "class Store"
import: "use json::{Store};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L6"
order: 4
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
| [`with_capacity`](/packages/json/reference/json/Store/with_capacity) |  |
| [`new`](/packages/json/reference/json/Store/new) |  |

## Methods

| Name | Description |
|------|-------------|
| [`add`](/packages/json/reference/json/Store/add) |  |
| [`attach`](/packages/json/reference/json/Store/attach) |  |
| [`count_children`](/packages/json/reference/json/Store/count_children) |  |

## See also

- [`JsonValue`](/packages/json/reference/json/JsonValue): Strict JSON value.
- [`Parser`](/packages/json/reference/json/Parser)
- [`Json`](/packages/json/reference/json/Json): RFC 8259 codec.
