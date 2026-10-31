---
slug: "csv/csv/Csv"
package: "csv"
title: "Csv"
description: "The RFC 4180 codec, as static methods."
module: "csv"
kind: "class"
name: "Csv"
signature: "class Csv"
import: "use csv::{Csv};"
origin: "package"
source: "https://github.com/ardax-corp/coil-csv/blob/b4835729f4ce8afe1f85fcca3f1c178bb2a045f6/src/csv.hy#L78"
order: 1
---

The RFC 4180 codec, as static methods.

[`Csv::parse`](/packages/csv/reference/csv/Csv/parse) and [`Csv::stringify`](/packages/csv/reference/csv/Csv/stringify) are the same functions as the free
[`parse`](/packages/csv/reference/csv/Csv/parse) and [`stringify`](/packages/csv/reference/csv/Csv/stringify); use whichever reads better. There is no instance to
create.

## Associated functions

| Name | Description |
|------|-------------|
| [`parse`](/packages/csv/reference/csv/Csv/parse) | Parses RFC 4180 CSV text into rows of fields. |
| [`stringify`](/packages/csv/reference/csv/Csv/stringify) | Encodes rows as RFC 4180 CSV text. |

## Examples

```coil
use csv::{Csv};
use tests::assert;
let rows = Csv::parse("x,y").unwrap_or(Vec::new());
assert!(rows.len() == 1 && rows[0][1] == "y");
assert!(Csv::stringify(rows) == "x,y");
```

## See also

- [`Csv::parse`](/packages/csv/reference/csv/Csv/parse)
- [`Csv::stringify`](/packages/csv/reference/csv/Csv/stringify)
