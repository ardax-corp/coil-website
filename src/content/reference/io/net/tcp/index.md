---
slug: "io/net/tcp/index"
title: "io::net::tcp"
description: "TCP clients and servers: connect, listen, accept."
module: "io::net::tcp"
kind: "module"
name: "io::net::tcp"
origin: "builtin"
auto: false
order: 5
---

[`connect`](/docs/reference/io/net/tcp/connect) and [`connect_timeout`](/docs/reference/io/net/tcp/connect_timeout) try every address the host name resolves to
under one deadline; [`listen`](/docs/reference/io/net/tcp/listen) uses the first. A timeout of `0` or less waits
forever. Prefer an explicit IP such as `127.0.0.1` for servers when the
address family matters.

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use io::net::tcp::{accept, connect};
```

## Functions

| Name | Description |
|------|-------------|
| [`accept`](/docs/reference/io/net/tcp/accept) | Accepts one pending connection on `listener` without waiting. |
| [`connect`](/docs/reference/io/net/tcp/connect) | Opens a TCP connection to `host` on `port`. |
| [`connect_timeout`](/docs/reference/io/net/tcp/connect_timeout) | Opens a TCP connection to `host` on `port`, giving up after `ms` milliseconds. |
| [`listen`](/docs/reference/io/net/tcp/listen) | Opens a TCP socket listening on `host` and `port`. |
| [`local_addr`](/docs/reference/io/net/tcp/local_addr) | Returns the local `(host, port)` of a TCP listener or connected TCP stream. |
| [`peer_addr`](/docs/reference/io/net/tcp/peer_addr) | Returns the remote `(host, port)` of a connected TCP stream. |
| [`set_nodelay`](/docs/reference/io/net/tcp/set_nodelay) | Turns `TCP_NODELAY` on or off for a TCP stream. |
| [`shutdown`](/docs/reference/io/net/tcp/shutdown) | Shuts down the reading half, the writing half, or both halves of a TCP stream. |
