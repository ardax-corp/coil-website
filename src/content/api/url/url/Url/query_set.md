---
slug: "url/url/Url/query_set"
package: "url"
title: "Url::query_set"
description: "Returns a copy of this URL with key set to value in the query."
module: "url"
kind: "method"
name: "query_set"
parent: "Url"
signature: "pub fn query_set(string key, string value) -> Url"
import: "use url::{Url};"
origin: "package"
source: "https://github.com/ardax-corp/coil-url/blob/d4b1c98a905332959a4b642692ca2cf5afcec1f9/src/url.hy#L923"
order: 4
---

Returns a copy of this URL with `key` set to `value` in the query.

`key` and `value` are percent-encoded. Every existing pair with that key
is replaced; when there is none, the pair is appended (or becomes the
whole query). Other pairs keep their order and spelling. `self` is not
changed.

Called on a `Url` value as `value.query_set(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |
| `value` | `string` |

## Returns

`Url`

## Examples

```coil
use url::{parse};
use tests::assert;
let u = match parse("http://example.com/p?a=1&b=2") {
    Result::Ok(u) => u,
    Result::Err(_) => panic "bad url",
};
assert!(u.query_set("a", "x y").to_string() == "http://example.com/p?a=x%20y&b=2");
assert!(u.query_set("c", "3").to_string() == "http://example.com/p?a=1&b=2&c=3");
assert!(u.query == "a=1&b=2");
```

## See also

- [`Url`](/packages/url/reference/url/Url): A parsed RFC 3986 URI or relative reference.
- [`Url::parse`](/packages/url/reference/url/Url/parse): Parses an absolute URI or a relative reference.
- [`Url::to_string`](/packages/url/reference/url/Url/to_string): Writes the URL back out as text (RFC 3986 §5.3 recomposition).
- [`Url::string`](/packages/url/reference/url/Url/string): Same as `to_string`.
- [`Url::query_get`](/packages/url/reference/url/Url/query_get): Returns the value of the first `key=value` pair in the query, percent-decoded.
- [`Url::join`](/packages/url/reference/url/Url/join): Resolves `reference` against this URL as a base (RFC 3986 §5.2).
