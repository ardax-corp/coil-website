---
slug: "url/url/Url/to_string"
package: "url"
title: "Url::to_string"
description: "Writes the URL back out as text (RFC 3986 §5.3 recomposition)."
module: "url"
kind: "method"
name: "to_string"
parent: "Url"
signature: "pub fn to_string() -> string"
import: "use url::{Url};"
origin: "package"
source: "https://github.com/ardax-corp/coil-url/blob/d2ec39b8a7dffe7cd3de7c96632ba99fd696d829/src/url.coil#L821"
order: 1
---

Writes the URL back out as text (RFC 3986 §5.3 recomposition).

Components are written as stored, so parsing and writing back gives the
input again, apart from the lowercased scheme and host and a dropped
empty or `:0` port. Port `0` is left out, and a host with a `:` (IPv6)
is wrapped in `[` `]`.

Called on a `Url` value as `value.to_string(…)`.

## Returns

`string`

## Examples

```coil
use url::{parse};
use tests::assert;
let u = match parse("HTTP://[::1]:8080/x?") {
    Result::Ok(u) => u,
    Result::Err(_) => panic "bad url",
};
assert!(u.to_string() == "http://[::1]:8080/x?");
```

## See also

- [`Url`](/packages/url/reference/url/Url): A parsed RFC 3986 URI or relative reference.
- [`Url::parse`](/packages/url/reference/url/Url/parse): Parses an absolute URI or a relative reference.
- [`Url::string`](/packages/url/reference/url/Url/string): Same as `to_string`.
- [`Url::query_get`](/packages/url/reference/url/Url/query_get): Returns the value of the first `key=value` pair in the query, percent-decoded.
- [`Url::query_set`](/packages/url/reference/url/Url/query_set): Returns a copy of this URL with `key` set to `value` in the query.
- [`Url::join`](/packages/url/reference/url/Url/join): Resolves `reference` against this URL as a base (RFC 3986 §5.2).
