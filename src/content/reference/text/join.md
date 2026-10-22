---
slug: "text/join"
title: "join"
description: "Returns the parts concatenated with sep between each pair."
module: "text"
kind: "fn"
name: "join"
signature: "fn join(Vec<string> parts, string sep) -> string"
import: "use text::{join};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/text.hy#L329"
order: 14
---

Returns the `parts` concatenated with `sep` between each pair.

## Parameters

| Name | Type |
|------|------|
| `parts` | `Vec<string>` |
| `sep` | `string` |

## Returns

`string`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures parts.len() > 0 || result == ""
ensures parts.len() != 1 || result == parts[0]
```

## Examples

```coil
use text::{join};
use tests::assert;
let parts: Vec<string> = ["usr", "local", "bin"];
assert!(join(parts, "/") == "usr/local/bin");
```

## See also

- [`byte_len`](/docs/reference/text/byte_len): Returns the length of s in bytes; the same as s.len().
- [`slice`](/docs/reference/text/slice): Returns the part of s from byte offset start up to (not including) end.
- [`trim_start`](/docs/reference/text/trim_start): Returns s without leading ASCII whitespace (space, tab, CR, LF).
- [`trim_end`](/docs/reference/text/trim_end): Returns s without trailing ASCII whitespace (space, tab, CR, LF).
- [`trim`](/docs/reference/text/trim): Returns s without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`contains`](/docs/reference/text/contains): Returns true when needle occurs in hay.
- [`starts_with`](/docs/reference/text/starts_with): Returns true when s begins with prefix.
- [`ends_with`](/docs/reference/text/ends_with): Returns true when s ends with suffix.
