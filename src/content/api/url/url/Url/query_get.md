---
slug: "url/url/Url/query_get"
package: "url"
title: "Url::query_get"
description: "Returns the value of the first key=value pair in the query, percent-decoded."
module: "url"
kind: "method"
name: "query_get"
parent: "Url"
signature: "pub fn query_get(string key) -> string"
import: "use url::{Url};"
origin: "package"
source: "https://github.com/ardax-corp/coil-url/blob/d4b1c98a905332959a4b642692ca2cf5afcec1f9/src/url.hy#L875"
order: 3
---

Returns the value of the first `key=value` pair in the query, percent-decoded.

The query is split on `&` and each pair on its first `=`; keys are
percent-decoded before they are compared with `key`. Returns `""` when
the key is missing, has no `=`, or does not decode. Use `has_query` and
the raw `query` field to tell those cases apart.

Called on a `Url` value as `value.query_get(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |

## Returns

`string`

## Examples

```coil
use url::{parse};
use tests::assert;
let u = match parse("https://example.com/search?q=hello%20world&page=2&page=3") {
    Result::Ok(u) => u,
    Result::Err(_) => panic "bad url",
};
assert!(u.query_get("q") == "hello world");
assert!(u.query_get("page") == "2");
assert!(u.query_get("lang") == "");
```

## See also

- [`Url`](/packages/url/reference/url/Url): A parsed RFC 3986 URI or relative reference.
- [`Url::parse`](/packages/url/reference/url/Url/parse): Parses an absolute URI or a relative reference.
- [`Url::to_string`](/packages/url/reference/url/Url/to_string): Writes the URL back out as text (RFC 3986 §5.3 recomposition).
- [`Url::string`](/packages/url/reference/url/Url/string): Same as `to_string`.
- [`Url::query_set`](/packages/url/reference/url/Url/query_set): Returns a copy of this URL with `key` set to `value` in the query.
- [`Url::join`](/packages/url/reference/url/Url/join): Resolves `reference` against this URL as a base (RFC 3986 §5.2).
