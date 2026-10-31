---
slug: "tls/tls/error/TlsError"
package: "tls"
title: "TlsError"
description: "The error of every tls call: a TLS failure of its own, or the stream's IoError."
module: "tls::error"
kind: "enum"
name: "TlsError"
signature: "enum TlsError"
import: "use tls::error::{TlsError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tls/blob/989c3660eb5b3de4a0ebd68a395be45bc626a332/src/tls/error.hy#L33"
order: 0
---

The error of every [`tls`](/packages/tls/reference/tls) call: a TLS failure of its own, or the stream's `IoError`.

It derives [`Show`](/docs/reference/prelude/ops/Show) and [`Eq`](/docs/reference/prelude/ops/Eq). A TLS stream's own `read` and `write` keep
returning `IoError` (`IoError::Protocol` on a TLS failure).

## Variants

### `Certificate` {#variant-certificate}

The peer's certificate was rejected (untrusted, wrong name, missing).

### `Handshake` {#variant-handshake}

The TLS handshake failed for any other reason, or the peer sent an alert.

### `Io(IoError)` {#variant-io}

The underlying stream failed, or an argument was rejected
(`IoError::InvalidInput`: a bad host name or PEM, a stream that is not
a socket).

## Examples

```coil
use io::{IoError};
use tls::error::{TlsError};
use tests::assert;
fn describe(TlsError e) -> string {
    return match e {
        TlsError::Certificate => "certificate rejected",
        TlsError::Handshake => "handshake failed",
        TlsError::Io(IoError::TimedOut) => "timed out",
        TlsError::Io(_) => "connection failed",
    };
}

fn main() {
    assert!(describe(TlsError::Io(IoError::TimedOut)) == "timed out");
    assert!(TlsError::Handshake != TlsError::Certificate);
}
```

## See also

- [`tls`](/packages/tls/reference/tls)
- [`Show`](/docs/reference/prelude/ops/Show)
- [`Eq`](/docs/reference/prelude/ops/Eq)
