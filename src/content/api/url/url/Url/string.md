---
slug: "url/url/Url/string"
package: "url"
title: "Url::string"
description: "Same as to_string."
module: "url"
kind: "method"
name: "string"
parent: "Url"
signature: "pub fn string() -> string"
import: "use url::{Url};"
origin: "package"
source: "https://github.com/ardax-corp/coil-url/blob/d4b1c98a905332959a4b642692ca2cf5afcec1f9/src/url.hy#L851"
order: 2
---

Same as [`to_string`](/packages/url/reference/url/Url/to_string).

Called on a `Url` value as `value.string(…)`.

## Returns

`string`

## See also

- [`Url::to_string`](/packages/url/reference/url/Url/to_string)
- [`Url`](/packages/url/reference/url/Url): A parsed RFC 3986 URI or relative reference.
- [`Url::parse`](/packages/url/reference/url/Url/parse): Parses an absolute URI or a relative reference.
- [`Url::query_get`](/packages/url/reference/url/Url/query_get): Returns the value of the first `key=value` pair in the query, percent-decoded.
- [`Url::query_set`](/packages/url/reference/url/Url/query_set): Returns a copy of this URL with `key` set to `value` in the query.
- [`Url::join`](/packages/url/reference/url/Url/join): Resolves `reference` against this URL as a base (RFC 3986 §5.2).
