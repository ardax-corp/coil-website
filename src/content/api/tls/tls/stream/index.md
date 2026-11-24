---
slug: "tls/tls/stream/index"
package: "tls"
title: "tls::stream"
description: "The tls::stream module."
module: "tls::stream"
kind: "module"
name: "tls::stream"
origin: "package"
auto: false
order: 4
---

Part of the [tls](/packages/tls) package ([coil-tls](https://github.com/ardax-corp/coil-tls)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tls)).

Import what you use (`use path::*` is not allowed):

```coil
use tls::stream::{TlsStream};
```

## Types

| Name | Description |
|------|-------------|
| [`TlsStream`](/packages/tls/reference/tls/stream/TlsStream) | A TLS session over a connected TCP stream. |
