---
slug: "text/trim"
title: "trim"
description: "Returns s without leading and trailing ASCII whitespace (space, tab, CR, LF)."
module: "text"
kind: "fn"
name: "trim"
signature: "fn trim(string s) -> Result<string, string>"
import: "use text::{trim};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/text.hy#L115"
order: 4
---

Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).

Other Unicode whitespace is kept. The [`Result`](/docs/reference/prelude/Result) never holds an error for valid
input; it exists because trimming works on bytes.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<string, string>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures ok_len(result) >= 0 && ok_len(result) <= s.len()
```

## Examples

```coil
use text::{trim};
use tests::assert;
assert!((trim("\t  key = value \r\n") ?? "") == "key = value");
```

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`byte_len`](/docs/reference/text/byte_len): Returns the length of s in bytes; the same as s.len().
- [`slice`](/docs/reference/text/slice): Returns the part of s from byte offset start up to (not including) end.
- [`trim_start`](/docs/reference/text/trim_start): Returns s without leading ASCII whitespace (space, tab, CR, LF).
- [`trim_end`](/docs/reference/text/trim_end): Returns s without trailing ASCII whitespace (space, tab, CR, LF).
- [`contains`](/docs/reference/text/contains): Returns true when needle occurs in hay.
- [`starts_with`](/docs/reference/text/starts_with): Returns true when s begins with prefix.
- [`ends_with`](/docs/reference/text/ends_with): Returns true when s ends with suffix.
