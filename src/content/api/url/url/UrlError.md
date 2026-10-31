---
slug: "url/url/UrlError"
package: "url"
title: "UrlError"
description: "Why parse, join or percent_decode rejected its input."
module: "url"
kind: "enum"
name: "UrlError"
signature: "enum UrlError"
import: "use url::{UrlError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-url/blob/d4b1c98a905332959a4b642692ca2cf5afcec1f9/src/url.hy#L22"
order: 0
---

Why [`parse`](/packages/url/reference/url/parse), [`join`](/packages/url/reference/url/join) or [`percent_decode`](/packages/url/reference/url/percent_decode) rejected its input.

Bad input is always reported this way, never with a panic.

## Variants

### `Invalid { message: string }` {#variant-invalid}

The input is not a valid URI reference. `message` is a short reason
such as `"empty host"`, `"bad port"`, `"bad percent"` or `"whitespace"`.

## Examples

```coil
use url::{parse, UrlError};
use tests::assert;
let why = match parse("http://example.com:99999/") {
    Result::Ok(_) => "",
    Result::Err(e) => match e {
        UrlError::Invalid { message } => message,
    },
};
assert!(why == "port range");
```

## See also

- [`url::parse`](/packages/url/reference/url/parse)
- [`url::join`](/packages/url/reference/url/join)
- [`url::percent_decode`](/packages/url/reference/url/percent_decode)
