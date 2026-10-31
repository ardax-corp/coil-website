---
slug: "csv/csv/CsvError"
package: "csv"
title: "CsvError"
description: "Why parse rejected its input."
module: "csv"
kind: "enum"
name: "CsvError"
signature: "enum CsvError"
import: "use csv::{CsvError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-csv/blob/b4835729f4ce8afe1f85fcca3f1c178bb2a045f6/src/csv.hy#L25"
order: 0
---

Why [`parse`](/packages/csv/reference/csv/parse) rejected its input.

`line` and `column` are 1-based. `column` counts bytes from the start of the
line, not characters, so a field after multi-byte text sits further right
than it looks.

## Variants

### `Invalid { line: int, column: int, message: string }` {#variant-invalid}

Malformed CSV: an unterminated quoted field, a quote inside an unquoted
field, or text after a closing quote. `message` says which.

### `Utf8 { line: int, column: int }` {#variant-utf8}

A field whose bytes are not valid UTF-8, at the field's first byte.

## Examples

```coil
use csv::{parse, CsvError};
use tests::assert;
let ok = match parse("a,b\n\"open") {
    Result::Ok(_) => false,
    Result::Err(e) => match e {
        CsvError::Invalid { line, column, message } => line == 2 && column == 1 && message == "unterminated quoted field",
        default => false,
    },
};
assert!(ok);
```

## See also

- [`csv::parse`](/packages/csv/reference/csv/parse)
