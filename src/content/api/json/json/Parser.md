---
slug: "json/json/Parser"
package: "json"
title: "Parser"
description: "Class Parser."
module: "json"
kind: "class"
name: "Parser"
signature: "class Parser"
import: "use json::{Parser};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L93"
order: 2
---

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `line` | `int` |  |
| `col` | `int` |  |
| `store` | `Store` |  |

## Methods

| Name | Description |
|------|-------------|
| [`at_end`](/packages/json/reference/json/Parser/at_end) |  |
| [`mark_at`](/packages/json/reference/json/Parser/mark_at) | Fill `line` and `column` from a byte offset. |
| [`mark`](/packages/json/reference/json/Parser/mark) |  |
| [`skip_ws`](/packages/json/reference/json/Parser/skip_ws) |  |
| [`parse_value`](/packages/json/reference/json/Parser/parse_value) |  |

## See also

- [`JsonValue`](/packages/json/reference/json/JsonValue): Strict JSON value.
- [`Json`](/packages/json/reference/json/Json): RFC 8259 codec.
- [`Store`](/packages/json/reference/json/Store)
