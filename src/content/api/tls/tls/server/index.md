---
slug: "tls/tls/server/index"
package: "tls"
title: "tls::server"
description: "Server-side TLS: certificate options and enable / disable on an accepted Stream."
module: "tls::server"
kind: "module"
name: "tls::server"
origin: "package"
auto: false
order: 3
---

Part of the [tls](/packages/tls) package ([coil-tls](https://github.com/ardax-corp/coil-tls)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tls)).

Import what you use (`use path::*` is not allowed):

```coil
use tls::server::{ServerOpts, enable};
```

## Types

| Name | Description |
|------|-------------|
| [`ServerOpts`](/packages/tls/reference/tls/server/ServerOpts) | How [`enable`](/packages/tls/reference/tls/server/enable) sets up a server session: the certificate and key to present, the handshake deadline, client certificates and ALPN. |

## Functions

| Name | Description |
|------|-------------|
| [`enable`](/packages/tls/reference/tls/server/enable) | Runs a TLS server handshake on the accepted TCP stream `s` and returns the same `Stream`, now encrypted. |
| [`disable`](/packages/tls/reference/tls/server/disable) | Sends TLS `close_notify` to the client and returns `s`, as [`tls::client::disable`](/packages/tls/reference/tls/client/disable) does. |
