---
slug: "url/url/percent_decode"
package: "url"
title: "percent_decode"
description: "Decodes the %HH sequences in s; other bytes are kept as they are."
module: "url"
kind: "fn"
name: "percent_decode"
signature: "fn percent_decode(string s) -> Result<string, UrlError>"
import: "use url::{percent_decode};"
origin: "package"
source: "https://github.com/ardax-corp/coil-url/blob/d4b1c98a905332959a4b642692ca2cf5afcec1f9/src/url.hy#L253"
order: 3
---

Decodes the `%HH` sequences in `s`; other bytes are kept as they are.

`+` is not turned into a space. Returns [`UrlError::Invalid`](/packages/url/reference/url/UrlError#variant-invalid) when a `%` is
not followed by two hex digits (`"truncated percent"`, `"bad percent"`) or
when the decoded bytes are not valid UTF-8 (`"utf8"`).

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<string, UrlError>`

## Examples

```coil
use url::{percent_decode, percent_encode};
use tests::assert;
assert!(percent_decode("a%20b").unwrap_or("") == "a b");
assert!(percent_decode("caf%C3%A9").unwrap_or("") == "caf\u{e9}");
assert!(percent_decode("100%").is_err());
assert!(percent_decode(percent_encode("x=1&y")).unwrap_or("") == "x=1&y");
```

## See also

- [`url::UrlError`](/packages/url/reference/url/UrlError)
- [`percent_encode`](/packages/url/reference/url/percent_encode): Percent-encodes every byte of `s` that is not an RFC 3986 unreserved character.
- [`parse`](/packages/url/reference/url/parse): Parses an absolute URI (`https://host/path`) or a relative reference (`../a?b`).
- [`join`](/packages/url/reference/url/join): Resolves `reference` against `base` (RFC 3986 §5.2), the way a browser follows a link.
