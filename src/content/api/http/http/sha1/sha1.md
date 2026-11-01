---
slug: "http/http/sha1/sha1"
package: "http"
title: "sha1"
description: "The SHA-1 digest of msg (RFC 3174): 20 bytes, big-endian."
module: "http::sha1"
kind: "fn"
name: "sha1"
signature: "fn sha1(Vec<byte> msg) -> Vec<byte>"
import: "use http::sha1::{sha1};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/sha1.coil#L203"
order: 0
---

The SHA-1 digest of `msg` (RFC 3174): 20 bytes, big-endian.

Here only for the WebSocket handshake (`ws_accept_key`); SHA-1 is not
collision resistant, so do not use it for security.

## Parameters

| Name | Type |
|------|------|
| `msg` | `Vec<byte>` |

## Returns

`Vec<byte>`

## Examples

```coil
use tests::assert;
use http::sha1::sha1;
use encoding::encode;
use string::to_bytes;

let d = sha1(to_bytes("abc"));
assert!(d.len() == 20);
assert!(encode(d) == "qZk+NkcGgWq6PiVxeFDCbJzQ2J0=");
```
