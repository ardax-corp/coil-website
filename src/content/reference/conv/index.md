---
slug: "conv/index"
title: "conv"
description: "Parse numbers from text and format integers in decimal, hex or binary."
module: "conv"
kind: "module"
name: "conv"
origin: "stdlib"
auto: false
order: 29
---

Parsing returns a [`Result`](/docs/reference/prelude/Result) with a short error message. For building text from several values, [`string::format`](/docs/reference/string/format) is usually simpler.

Part of [coil-stdlib](/packages/stdlib). spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use conv::{int_to_dec, int_to_hex};
```

## Functions

| Name | Description |
|------|-------------|
| [`int_to_dec`](/docs/reference/conv/int_to_dec) | Formats `n` in decimal; the same as `format("%i", n)`. |
| [`int_to_hex`](/docs/reference/conv/int_to_hex) | Formats `n` in lowercase hexadecimal without a prefix; a negative `n` gets a leading `-`. |
| [`int_to_bin`](/docs/reference/conv/int_to_bin) | Formats `n` in binary without a prefix; a negative `n` gets a leading `-`. |
| [`parse_int_radix`](/docs/reference/conv/parse_int_radix) | Parses an integer written in base `radix`, which must be 10 or 16. |
| [`parse_int`](/docs/reference/conv/parse_int) | Parses a decimal integer, such as `"42"`, `" -7 "` or `"+3"`. |
| [`parse_float`](/docs/reference/conv/parse_float) | Parses a decimal float such as `"3.5"`, `"-0.25"`, `"1e3"` or `"42"`. |
