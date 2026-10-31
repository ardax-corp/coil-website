---
slug: "url/url/Url/parse"
package: "url"
title: "Url::parse"
description: "Parses an absolute URI or a relative reference. Same as the free parse."
module: "url"
kind: "static method"
name: "parse"
parent: "Url"
signature: "pub static fn parse(string s) -> Result<Url, UrlError>"
import: "use url::{Url};"
origin: "package"
source: "https://github.com/ardax-corp/coil-url/blob/d4b1c98a905332959a4b642692ca2cf5afcec1f9/src/url.hy#L798"
order: 0
---

Parses an absolute URI or a relative reference. Same as the free [`parse`](/packages/url/reference/url/parse).

See [`parse`](/packages/url/reference/url/parse) for what is accepted and the errors.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<Url, UrlError>`

## Examples

```coil
use url::{Url};
use tests::assert;
let u = match Url::parse("ws://localhost:9000/chat") {
    Result::Ok(u) => u,
    Result::Err(_) => panic "bad url",
};
assert!(u.host == "localhost" && u.port == 9000);
assert!(Url::parse("http://").is_err());
```

## See also

- [`url::parse`](/packages/url/reference/url/parse)
- [`Url`](/packages/url/reference/url/Url): A parsed RFC 3986 URI or relative reference.
- [`Url::to_string`](/packages/url/reference/url/Url/to_string): Writes the URL back out as text (RFC 3986 §5.3 recomposition).
- [`Url::string`](/packages/url/reference/url/Url/string): Same as `to_string`.
- [`Url::query_get`](/packages/url/reference/url/Url/query_get): Returns the value of the first `key=value` pair in the query, percent-decoded.
- [`Url::query_set`](/packages/url/reference/url/Url/query_set): Returns a copy of this URL with `key` set to `value` in the query.
- [`Url::join`](/packages/url/reference/url/Url/join): Resolves `reference` against this URL as a base (RFC 3986 §5.2).
