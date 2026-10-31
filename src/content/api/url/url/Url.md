---
slug: "url/url/Url"
package: "url"
title: "Url"
description: "A parsed RFC 3986 URI or relative reference."
module: "url"
kind: "class"
name: "Url"
signature: "class Url"
import: "use url::{Url};"
origin: "package"
source: "https://github.com/ardax-corp/coil-url/blob/d4b1c98a905332959a4b642692ca2cf5afcec1f9/src/url.hy#L49"
order: 1
---

A parsed RFC 3986 URI or relative reference.

Each component is kept as written, still percent-encoded, except that the
scheme is lowercased and so is the host for `http`, `https`, `ws` and
`wss`. A missing component is `""` (port `0`); the `has_*` flags tell a
missing query, fragment or authority apart from an empty one. Methods that
change a `Url` return a new one and leave the original as it was.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `scheme` | `string` | The scheme, lowercased (`"https"`), or `""` for a relative reference. |
| `userinfo` | `string` | The part before `@` in the authority (`"user:pass"`), or `""`. |
| `host` | `string` | The host, without brackets for an IPv6 literal (`"::1"`), or `""`. |
| `port` | `int` | The port, or `0` when none is given. An explicit `:0` also reads as `0`. |
| `path` | `string` | The path as written, still percent-encoded. May be `""`. |
| `query` | `string` | The text after `?`, without the `?`, still percent-encoded. |
| `fragment` | `string` | The text after `#`, without the `#`, still percent-encoded. |
| `has_authority` | `bool` | `true` when the input had `//` and an authority (even an empty one, as in `file:///x`). |
| `has_query` | `bool` | `true` when the input had a `?`, even with nothing after it. |
| `has_fragment` | `bool` | `true` when the input had a `#`, even with nothing after it. |

## Associated functions

| Name | Description |
|------|-------------|
| [`parse`](/packages/url/reference/url/Url/parse) | Parses an absolute URI or a relative reference. |

## Methods

| Name | Description |
|------|-------------|
| [`to_string`](/packages/url/reference/url/Url/to_string) | Writes the URL back out as text (RFC 3986 §5.3 recomposition). |
| [`string`](/packages/url/reference/url/Url/string) | Same as [`to_string`](/packages/url/reference/url/Url/to_string). |
| [`query_get`](/packages/url/reference/url/Url/query_get) | Returns the value of the first `key=value` pair in the query, percent-decoded. |
| [`query_set`](/packages/url/reference/url/Url/query_set) | Returns a copy of this URL with `key` set to `value` in the query. |
| [`join`](/packages/url/reference/url/Url/join) | Resolves `reference` against this URL as a base (RFC 3986 §5.2). |

## Examples

```coil
use url::{parse};
use tests::assert;
let u = match parse("HTTPS://ada@Example.com:8443/a/b?x=1#top") {
    Result::Ok(u) => u,
    Result::Err(_) => panic "bad url",
};
assert!(u.scheme == "https" && u.userinfo == "ada" && u.host == "example.com");
assert!(u.port == 8443 && u.path == "/a/b" && u.query == "x=1" && u.fragment == "top");
assert!(u.to_string() == "https://ada@example.com:8443/a/b?x=1#top");
```
