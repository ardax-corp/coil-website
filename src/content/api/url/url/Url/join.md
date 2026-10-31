---
slug: "url/url/Url/join"
package: "url"
title: "Url::join"
description: "Resolves reference against this URL as a base (RFC 3986 §5.2). Same as the free join."
module: "url"
kind: "method"
name: "join"
parent: "Url"
signature: "pub fn join(string reference) -> Result<Url, UrlError>"
import: "use url::{Url};"
origin: "package"
source: "https://github.com/ardax-corp/coil-url/blob/d4b1c98a905332959a4b642692ca2cf5afcec1f9/src/url.hy#L1002"
order: 5
---

Resolves `reference` against this URL as a base (RFC 3986 §5.2). Same as the free [`join`](/packages/url/reference/url/join).

See [`join`](/packages/url/reference/url/join) for the rules and the errors.

Called on a `Url` value as `value.join(…)`.

## Parameters

| Name | Type |
|------|------|
| `reference` | `string` |

## Returns

`Result<Url, UrlError>`

## Examples

```coil
use url::{parse};
use tests::assert;
let u = match parse("https://example.com/docs/guide/intro") {
    Result::Ok(u) => u,
    Result::Err(_) => panic "bad url",
};
let next = match u.join("../api") {
    Result::Ok(v) => v,
    Result::Err(_) => panic "bad reference",
};
assert!(next.to_string() == "https://example.com/docs/api");
```

## See also

- [`url::join`](/packages/url/reference/url/join)
- [`Url`](/packages/url/reference/url/Url): A parsed RFC 3986 URI or relative reference.
- [`Url::parse`](/packages/url/reference/url/Url/parse): Parses an absolute URI or a relative reference.
- [`Url::to_string`](/packages/url/reference/url/Url/to_string): Writes the URL back out as text (RFC 3986 §5.3 recomposition).
- [`Url::string`](/packages/url/reference/url/Url/string): Same as `to_string`.
- [`Url::query_get`](/packages/url/reference/url/Url/query_get): Returns the value of the first `key=value` pair in the query, percent-decoded.
- [`Url::query_set`](/packages/url/reference/url/Url/query_set): Returns a copy of this URL with `key` set to `value` in the query.
