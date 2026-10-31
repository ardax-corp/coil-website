---
slug: "csv/csv/index"
package: "csv"
title: "csv"
description: "Parse and write CSV (RFC 4180): quoted fields, \"\" escapes and errors with line and column."
module: "csv"
kind: "module"
name: "csv"
origin: "package"
auto: false
order: 0
---

Part of the [csv](/packages/csv) package ([coil-csv](https://github.com/ardax-corp/coil-csv)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/csv)).

Import what you use (`use path::*` is not allowed):

```coil
use csv::{CsvError, Csv};
```

## Types

| Name | Description |
|------|-------------|
| [`CsvError`](/packages/csv/reference/csv/CsvError) | Why [`parse`](/packages/csv/reference/csv/parse) rejected its input. |
| [`Csv`](/packages/csv/reference/csv/Csv) | The RFC 4180 codec, as static methods. |

## Functions

| Name | Description |
|------|-------------|
| [`parse`](/packages/csv/reference/csv/parse) | Parses RFC 4180 CSV text into rows of fields. |
| [`stringify`](/packages/csv/reference/csv/stringify) | Encodes rows as RFC 4180 CSV text. |
