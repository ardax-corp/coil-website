---
slug: "io/net/udp/index"
title: "io::net::udp"
description: "The io::net::udp module."
module: "io::net::udp"
kind: "module"
name: "io::net::udp"
origin: "builtin"
auto: false
order: 6
---

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use io::net::udp::{bind, connect};
```

## Functions

| Name | Description |
|------|-------------|
| [`bind`](/docs/reference/io/net/udp/bind) | Opens a UDP socket bound to `host` and `port`. |
| [`connect`](/docs/reference/io/net/udp/connect) | Opens a UDP socket whose default peer is `host` on `port`. |
| [`local_port`](/docs/reference/io/net/udp/local_port) | Returns the local port a UDP socket is bound to. |
| [`recv_from`](/docs/reference/io/net/udp/recv_from) | Receives one datagram into the front of `buf` without waiting. |
| [`send_to`](/docs/reference/io/net/udp/send_to) | Sends `buf` as one datagram to `host` on `port` and returns how many bytes were sent. |
