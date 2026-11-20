---
slug: "string/StringError"
title: "StringError"
description: "The error of from_bytes and slice_bytes."
module: "string"
kind: "enum"
name: "StringError"
signature: "enum StringError"
import: "use string::{StringError};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/9c93ed17ff191a9c4e7d41030d8a6da8342de21a/compiler/src/builtin_docs/string.coil#L6"
order: 0
---

The error of [`from_bytes`](/docs/reference/string/from_bytes) and [`slice_bytes`](/docs/reference/string/slice_bytes).

It implements [`Show`](/docs/reference/prelude/ops/Show), so `format("%v", e)` gives the variant name.

## Variants

### `InvalidUtf8` {#variant-invalidutf8}

The bytes are not valid UTF-8.

### `NotCharBoundary` {#variant-notcharboundary}

A byte offset falls inside a multi-byte character.

## See also

- [`string::from_bytes`](/docs/reference/string/from_bytes)
- [`string::slice_bytes`](/docs/reference/string/slice_bytes)
- [`Show`](/docs/reference/prelude/ops/Show)
