---
slug: "io/net/udp/index"
title: "io::net::udp"
description: "UDP sockets: bind, send_to, recv_from."
module: "io::net::udp"
kind: "module"
name: "io::net::udp"
origin: "builtin"
auto: false
order: 6
---

A UDP socket is a [`Stream`](/docs/reference/io/Stream) bound with [`bind`](/docs/reference/io/net/udp/bind).
[`connect`](/docs/reference/io/net/udp/connect) fixes a default peer for `write`; [`send_to`](/docs/reference/io/net/udp/send_to) and [`recv_from`](/docs/reference/io/net/udp/recv_from) name the
peer on each datagram.

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
