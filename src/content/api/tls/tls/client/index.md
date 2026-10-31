---
slug: "tls/tls/client/index"
package: "tls"
title: "tls::client"
description: "Client-side TLS: options and enable / disable on a connected Stream."
module: "tls::client"
kind: "module"
name: "tls::client"
origin: "package"
auto: false
order: 1
---

Part of the [tls](/packages/tls) package ([coil-tls](https://github.com/ardax-corp/coil-tls)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tls)).

Import what you use (`use path::*` is not allowed):

```coil
use tls::client::{ClientOpts, enable};
```

## Types

| Name | Description |
|------|-------------|
| [`ClientOpts`](/packages/tls/reference/tls/client/ClientOpts) | How [`enable`](/packages/tls/reference/tls/client/enable) sets up a client session: certificate checks, extra trusted roots, the handshake deadline and the ALPN protocols to offer. |

## Functions

| Name | Description |
|------|-------------|
| [`enable`](/packages/tls/reference/tls/client/enable) | Runs a TLS client handshake on the connected TCP stream `s` and returns the same `Stream`, now encrypted. |
| [`disable`](/packages/tls/reference/tls/client/disable) | Sends TLS `close_notify` to the peer and returns `s`. |
