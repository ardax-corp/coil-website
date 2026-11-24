---
slug: "http/http/conn/Conn/protocol"
package: "http"
title: "Conn::protocol"
description: "The ALPN protocol the peers agreed on (\"h2\"), or \"\" for none and for plain TCP."
module: "http::conn"
kind: "method"
name: "protocol"
parent: "Conn"
signature: "fn protocol(S s) -> string"
import: "use http::conn::{Conn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/ff451cfa7e0dc940487a1ab88a8e84412cc71127/src/http/conn.coil#L39"
order: 0
---

The ALPN protocol the peers agreed on (`"h2"`), or `""` for none and for plain TCP.

## Parameters

| Name | Type |
|------|------|
| `s` | `S` |

## Returns

`string`

## See also

- [`Conn`](/packages/http/reference/http/conn/Conn): A connection HTTP runs over: a plain TCP `Stream` or a `TlsStream`.
