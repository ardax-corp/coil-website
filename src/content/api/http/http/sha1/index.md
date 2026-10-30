---
slug: "http/http/sha1/index"
package: "http"
title: "http::sha1"
description: "SHA-1 (RFC 3174) for the WebSocket handshake only."
module: "http::sha1"
kind: "module"
name: "http::sha1"
origin: "package"
auto: false
order: 9
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::sha1::{sha1};
```

## Functions

| Name | Description |
|------|-------------|
| [`sha1`](/packages/http/reference/http/sha1/sha1) | SHA-1 digest (20 bytes, big-endian). |
