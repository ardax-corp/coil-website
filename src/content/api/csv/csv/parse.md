---
slug: "csv/csv/parse"
package: "csv"
title: "parse"
description: "Parses RFC 4180 CSV text into rows of fields."
module: "csv"
kind: "fn"
name: "parse"
signature: "fn parse(string s) -> Result<Vec<Vec<string>>, CsvError>"
import: "use csv::{parse};"
origin: "package"
source: "https://github.com/ardax-corp/coil-csv/blob/b4835729f4ce8afe1f85fcca3f1c178bb2a045f6/src/csv.coil#L383"
order: 2
---

Parses RFC 4180 CSV text into rows of fields.

Fields are separated by `,` and records by `\n` or `\r\n` (a lone `\r`
also ends a record). A field wrapped in `"` may hold commas, line breaks and
`""` (one literal quote). One trailing line break is ignored, empty input
gives no rows, and an empty line in the middle is a row with one empty
field. Rows may have different lengths; nothing checks them against the
first row, and there is no header handling (the header is just `rows[0]`).

Returns [`CsvError::Invalid`](/packages/csv/reference/csv/CsvError#variant-invalid) for an unterminated quoted field, a `"` inside
an unquoted field, or anything but `,` or a line break after a closing
quote. It never panics on bad input.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<Vec<Vec<string>>, CsvError>`

## Examples

```coil
use csv::{parse};
use tests::assert;
let rows = parse("name,note\nada,\"likes \"\"math\"\", a lot\"\n").unwrap_or(Vec::new());
assert!(rows.len() == 2);
assert!(rows[0][0] == "name");
assert!(rows[1][1] == "likes \"math\", a lot");

assert!(parse("").is_ok());
assert!(parse("a\"b").is_err());
```

## See also

- [`csv::CsvError`](/packages/csv/reference/csv/CsvError)
- [`stringify`](/packages/csv/reference/csv/stringify): Encodes rows as RFC 4180 CSV text.
