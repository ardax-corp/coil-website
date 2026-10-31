---
slug: "http/http/pool/index"
package: "http"
title: "http::pool"
description: "The http::pool module."
module: "http::pool"
kind: "module"
name: "http::pool"
origin: "package"
auto: false
order: 7
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::pool::{ConnPool};
```

## Types

| Name | Description |
|------|-------------|
| [`ConnPool`](/packages/http/reference/http/pool/ConnPool) | Idle HTTP/1.1 connections, keyed by scheme, host and port, for keep-alive. |
