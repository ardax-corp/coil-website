---
slug: "toml/toml/TomlError"
package: "toml"
title: "TomlError"
description: "Decode/encode failure. line and column are 1-based (column counts bytes in the line)."
module: "toml"
kind: "enum"
name: "TomlError"
signature: "enum TomlError"
import: "use toml::{TomlError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/9123082b0a6374c00503b61dd222a68283b706f1/src/toml.hy#L116"
order: 0
---

Decode/encode failure. `line` and `column` are 1-based (column counts bytes in the line).

## Variants

### `Invalid { line: int, column: int }` {#variant-invalid}

### `Utf8 { line: int, column: int }` {#variant-utf8}

### `Number { line: int, column: int }` {#variant-number}
