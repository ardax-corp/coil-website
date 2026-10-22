---
description: "String helpers: trim, split, find, replace, join, pad, case."
---
Offsets are byte offsets, as everywhere in Coil. Functions that cut a string return a `Result`, because a cut inside a multi-byte character is an error. The compiler-provided [`string`](/docs/reference/string) module has `format` and the UTF-8 conversions.
