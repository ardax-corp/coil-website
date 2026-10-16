---
title: "`ord` and `char`"
description: "Auto-imported: ord(string) -> Result<byte, string> (exactly one character with codepoint ≤ 255) and char(byte) -> Result<string, string> (exactly one UTF-8 code unit).…"
---

# `ord` and `char`

Auto-imported: `ord(string) -> Result<byte, string>` (exactly one character with codepoint ≤ 255) and `char(byte) -> Result<string, string>` (the character whose codepoint is that byte, U+0000 to U+00FF; every `byte` succeeds). An int literal argument coerces to `byte` (`char(97)`), and a literal outside `0..=255` is a compile error (E0102). String literals of one such character coerce to `byte` in annotations (e.g. `let c: byte = "A";`).

---

## Related

- [Types](/docs/references/types)
