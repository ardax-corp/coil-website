---
slug: "csv/csv/Csv/parse"
package: "csv"
title: "Csv::parse"
description: "Parses RFC 4180 CSV text into rows of fields. Same as the free parse."
module: "csv"
kind: "static method"
name: "parse"
parent: "Csv"
signature: "pub static fn parse(string s) -> Result<Vec<Vec<string>>, CsvError>"
import: "use csv::{Csv};"
origin: "package"
source: "https://github.com/ardax-corp/coil-csv/blob/7c76e18041b796df58eec952b149ecc0fa15040c/src/csv.hy#L314"
order: 0
---

Parses RFC 4180 CSV text into rows of fields. Same as the free [`parse`](/packages/csv/reference/csv/parse).

See [`parse`](/packages/csv/reference/csv/parse) for the accepted syntax and the errors.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<Vec<Vec<string>>, CsvError>`

## Examples

```coil
use csv::{Csv};
use tests::assert;
let rows = Csv::parse("name,qty\r\napple,3\r\n").unwrap_or(Vec::new());
assert!(rows.len() == 2);
assert!(rows[1][0] == "apple" && rows[1][1] == "3");
```

## See also

- [`csv::parse`](/packages/csv/reference/csv/parse)
- [`Csv`](/packages/csv/reference/csv/Csv): The RFC 4180 codec, as static methods.
- [`Csv::stringify`](/packages/csv/reference/csv/Csv/stringify): Encodes rows as RFC 4180 CSV text.
