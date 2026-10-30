---
slug: "json/json/JsonError"
package: "json"
title: "JsonError"
description: "Decode/encode failure. line and column are 1-based (column counts bytes in the line)."
module: "json"
kind: "enum"
name: "JsonError"
signature: "enum JsonError"
import: "use json::{JsonError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L87"
order: 1
---

Decode/encode failure. `line` and `column` are 1-based (column counts bytes in the line).

## Variants

### `Invalid { line: int, column: int }` {#variant-invalid}

### `Utf8 { line: int, column: int }` {#variant-utf8}

### `Number { line: int, column: int }` {#variant-number}
