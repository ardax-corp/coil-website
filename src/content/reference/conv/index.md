---
slug: "conv/index"
title: "conv"
description: "The conv module."
module: "conv"
kind: "module"
name: "conv"
origin: "stdlib"
auto: false
order: 21
---

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use conv::{int_to_dec, int_to_hex};
```

## Functions

| Name | Description |
|------|-------------|
| [`int_to_dec`](/docs/reference/conv/int_to_dec) | Format an integer in base 10. |
| [`int_to_hex`](/docs/reference/conv/int_to_hex) | Format an integer in base 16 (lowercase, no prefix). |
| [`int_to_bin`](/docs/reference/conv/int_to_bin) | Format an integer in base 2 (no prefix). |
| [`parse_int_radix`](/docs/reference/conv/parse_int_radix) | Parse an optionally signed integer in base `radix` (10 or 16). |
| [`parse_int`](/docs/reference/conv/parse_int) | Parse an optionally signed base-10 integer (surrounding ASCII space skipped). |
| [`parse_float`](/docs/reference/conv/parse_float) | Parse an optionally signed decimal float with an optional exponent. |
