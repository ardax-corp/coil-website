---
slug: "csv/csv/Csv/stringify"
package: "csv"
title: "Csv::stringify"
description: "Encodes rows as RFC 4180 CSV text. Same as the free stringify."
module: "csv"
kind: "static method"
name: "stringify"
parent: "Csv"
signature: "pub static fn stringify(Vec<Vec<string>> rows) -> string"
import: "use csv::{Csv};"
origin: "package"
source: "https://github.com/ardax-corp/coil-csv/blob/b4835729f4ce8afe1f85fcca3f1c178bb2a045f6/src/csv.coil#L331"
order: 1
---

Encodes rows as RFC 4180 CSV text. Same as the free [`stringify`](/packages/csv/reference/csv/stringify).

See [`stringify`](/packages/csv/reference/csv/stringify) for the quoting rules.

## Parameters

| Name | Type |
|------|------|
| `rows` | `Vec<Vec<string>>` |

## Returns

`string`

## Examples

```coil
use csv::{Csv};
use tests::assert;
let rows: Vec<Vec<string>> = [["a", "b"], ["1", "2"]];
assert!(Csv::stringify(rows) == "a,b\r\n1,2");
```

## See also

- [`csv::stringify`](/packages/csv/reference/csv/stringify)
- [`Csv`](/packages/csv/reference/csv/Csv): The RFC 4180 codec, as static methods.
- [`Csv::parse`](/packages/csv/reference/csv/Csv/parse): Parses RFC 4180 CSV text into rows of fields.
