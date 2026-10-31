---
slug: "url/url/percent_encode"
package: "url"
title: "percent_encode"
description: "Percent-encodes every byte of s that is not an RFC 3986 unreserved character."
module: "url"
kind: "fn"
name: "percent_encode"
signature: "fn percent_encode(string s) -> string"
import: "use url::{percent_encode};"
origin: "package"
source: "https://github.com/ardax-corp/coil-url/blob/d4b1c98a905332959a4b642692ca2cf5afcec1f9/src/url.hy#L215"
order: 2
---

Percent-encodes every byte of `s` that is not an RFC 3986 unreserved character.

Letters, digits and `-` `.` `_` `~` are kept; every other byte, including
each byte of a multi-byte UTF-8 character, becomes `%HH` with uppercase hex.
A space becomes `%20`, never `+`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`string`

## Examples

```coil
use url::{percent_encode};
use tests::assert;
assert!(percent_encode("a b/c") == "a%20b%2Fc");
assert!(percent_encode("caf\u{e9}") == "caf%C3%A9");
assert!(percent_encode("safe-._~") == "safe-._~");
```

## See also

- [`percent_decode`](/packages/url/reference/url/percent_decode): Decodes the `%HH` sequences in `s`; other bytes are kept as they are.
- [`parse`](/packages/url/reference/url/parse): Parses an absolute URI (`https://host/path`) or a relative reference (`../a?b`).
- [`join`](/packages/url/reference/url/join): Resolves `reference` against `base` (RFC 3986 §5.2), the way a browser follows a link.
