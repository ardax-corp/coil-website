---
slug: "url/url/join"
package: "url"
title: "join"
description: "Resolves reference against base (RFC 3986 §5.2), the way a browser follows a link."
module: "url"
kind: "fn"
name: "join"
signature: "fn join(Url base, string reference) -> Result<Url, UrlError>"
import: "use url::{join};"
origin: "package"
source: "https://github.com/ardax-corp/coil-url/blob/d2ec39b8a7dffe7cd3de7c96632ba99fd696d829/src/url.coil#L1147"
order: 5
---

Resolves `reference` against `base` (RFC 3986 §5.2), the way a browser follows a link.

A reference with a scheme replaces the base; one starting with `//`
keeps only the base's scheme; an absolute path keeps the base's authority;
a relative path is merged with the base path's directory. `.` and `..`
segments are removed. An empty reference keeps the base path and query;
the fragment always comes from `reference`. Returns [`UrlError::Invalid`](/packages/url/reference/url/UrlError#variant-invalid) when
`reference` does not parse.

## Parameters

| Name | Type |
|------|------|
| `base` | `Url` |
| `reference` | `string` |

## Returns

`Result<Url, UrlError>`

## Examples

```coil
use url::{parse, join, Url};
use tests::assert;

fn resolve(Url base, string r) -> string {
    return match join(base, r) {
        Result::Ok(v) => v.to_string(),
        Result::Err(_) => "error",
    };
}

fn main() {
    let u = match parse("http://a/b/c/d;p?q") {
        Result::Ok(u) => u,
        Result::Err(_) => panic "bad url",
    };
    assert!(resolve(u, "g") == "http://a/b/c/g");
    assert!(resolve(u, "../g") == "http://a/b/g");
    assert!(resolve(u, "/g") == "http://a/g");
    assert!(resolve(u, "//cdn/g") == "http://cdn/g");
    assert!(resolve(u, "?y") == "http://a/b/c/d;p?y");
    assert!(resolve(u, "#s") == "http://a/b/c/d;p?q#s");
}
```

## See also

- [`url::UrlError`](/packages/url/reference/url/UrlError)
- [`percent_encode`](/packages/url/reference/url/percent_encode): Percent-encodes every byte of `s` that is not an RFC 3986 unreserved character.
- [`percent_decode`](/packages/url/reference/url/percent_decode): Decodes the `%HH` sequences in `s`; other bytes are kept as they are.
- [`parse`](/packages/url/reference/url/parse): Parses an absolute URI (`https://host/path`) or a relative reference (`../a?b`).
