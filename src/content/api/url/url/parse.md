---
slug: "url/url/parse"
package: "url"
title: "parse"
description: "Parses an absolute URI (https://host/path) or a relative reference (../a?b)."
module: "url"
kind: "fn"
name: "parse"
signature: "fn parse(string s) -> Result<Url, UrlError>"
import: "use url::{parse};"
origin: "package"
source: "https://github.com/ardax-corp/coil-url/blob/d4b1c98a905332959a4b642692ca2cf5afcec1f9/src/url.hy#L1108"
order: 4
---

Parses an absolute URI (`https://host/path`) or a relative reference (`../a?b`).

A reference without a scheme gets `scheme == ""`. Empty input is an empty
relative reference. The scheme and, for `http`, `https`, `ws` and `wss`, the
host are lowercased; everything else is kept as written. Any scheme parses
(`mailto:`, `git:`); `file:///path` has an empty host.

Returns [`UrlError::Invalid`](/packages/url/reference/url/UrlError#variant-invalid) for whitespace or control characters, a `%` not
followed by two hex digits, a non-numeric port or one above 65535, an
unclosed `[` IPv6 host, an empty host for `http`/`https`/`ws`/`wss`, or a
`:` in the first segment of a relative path (`a:b` is read as a scheme, so
write `./a:b`).

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<Url, UrlError>`

## Examples

```coil
use url::{parse};
use tests::assert;
let u = match parse("https://example.com/a/b?q=1#f") {
    Result::Ok(u) => u,
    Result::Err(_) => panic "bad url",
};
assert!(u.host == "example.com" && u.path == "/a/b");
assert!(u.query_get("q") == "1");

let rel = match parse("../c?x") {
    Result::Ok(u) => u,
    Result::Err(_) => panic "bad url",
};
assert!(rel.scheme == "" && rel.path == "../c" && rel.has_query);

assert!(parse("http://").is_err());
assert!(parse("http://h/a b").is_err());
```

## See also

- [`url::UrlError`](/packages/url/reference/url/UrlError)
- [`percent_encode`](/packages/url/reference/url/percent_encode): Percent-encodes every byte of `s` that is not an RFC 3986 unreserved character.
- [`percent_decode`](/packages/url/reference/url/percent_decode): Decodes the `%HH` sequences in `s`; other bytes are kept as they are.
- [`join`](/packages/url/reference/url/join): Resolves `reference` against `base` (RFC 3986 §5.2), the way a browser follows a link.
