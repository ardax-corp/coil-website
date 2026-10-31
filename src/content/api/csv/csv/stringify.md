---
slug: "csv/csv/stringify"
package: "csv"
title: "stringify"
description: "Encodes rows as RFC 4180 CSV text."
module: "csv"
kind: "fn"
name: "stringify"
signature: "fn stringify(Vec<Vec<string>> rows) -> string"
import: "use csv::{stringify};"
origin: "package"
source: "https://github.com/ardax-corp/coil-csv/blob/7c76e18041b796df58eec952b149ecc0fa15040c/src/csv.hy#L406"
order: 3
---

Encodes rows as RFC 4180 CSV text.

Fields are joined with `,` and records with `\r\n`, with no line break
after the last record. A field that holds `,`, `"`, `\r` or `\n` is wrapped
in quotes, with each `"` doubled; other fields are written as they are.
`parse(stringify(rows))` gives `rows` back, except that a single row with
one empty field encodes to `""` and parses back to no rows.

## Parameters

| Name | Type |
|------|------|
| `rows` | `Vec<Vec<string>>` |

## Returns

`string`

## Examples

```coil
use csv::{parse, stringify};
use tests::assert;
let rows: Vec<Vec<string>> = [["id", "text"], ["1", "a, \"b\""]];
let text = stringify(rows);
assert!(text == "id,text\r\n1,\"a, \"\"b\"\"\"");
let back = parse(text).unwrap_or(Vec::new());
assert!(back[1][1] == "a, \"b\"");
```

## See also

- [`parse`](/packages/csv/reference/csv/parse): Parses RFC 4180 CSV text into rows of fields.
