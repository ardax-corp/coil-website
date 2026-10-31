---
slug: "tls/tls/error/index"
package: "tls"
title: "tls::error"
description: "TlsError, the error every TLS call returns."
module: "tls::error"
kind: "module"
name: "tls::error"
origin: "package"
auto: false
order: 2
---

Part of the [tls](/packages/tls) package ([coil-tls](https://github.com/ardax-corp/coil-tls)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tls)).

Import what you use (`use path::*` is not allowed):

```coil
use tls::error::{TlsError};
```

## Types

| Name | Description |
|------|-------------|
| [`TlsError`](/packages/tls/reference/tls/error/TlsError) | The error of every [`tls`](/packages/tls/reference/tls) call: a TLS failure of its own, or the stream's `IoError`. |
