---
slug: "tls/tls/index"
package: "tls"
title: "tls"
description: "TLS for net streams: turn a connected or listening Stream into an encrypted one."
module: "tls"
kind: "module"
name: "tls"
origin: "package"
auto: false
order: 0
---

Part of the [tls](/packages/tls) package ([coil-tls](https://github.com/ardax-corp/coil-tls)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tls)).

Import what you use (`use path::*` is not allowed):

```coil
use tls::{alpn_protocol};
```

## Modules

| Module | Description |
|--------|-------------|
| [`tls::client`](/packages/tls/reference/tls/client) | Client-side TLS: options and enable / disable on a connected Stream. |
| [`tls::error`](/packages/tls/reference/tls/error) | TlsError, the error every TLS call returns. |
| [`tls::server`](/packages/tls/reference/tls/server) | Server-side TLS: certificate options and enable / disable on an accepted Stream. |

## Functions

| Name | Description |
|------|-------------|
| [`alpn_protocol`](/packages/tls/reference/tls/alpn_protocol) | The ALPN protocol negotiated on the TLS stream `s` (for example `"h2"`), or `""` when the peers agreed on none. |
