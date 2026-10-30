---
slug: "io/net/index"
title: "io::net"
description: "TCP and UDP sockets."
module: "io::net"
kind: "module"
name: "io::net"
origin: "builtin"
auto: false
order: 20
---

Sockets are ordinary [`Stream`](/docs/reference/io/Stream)s: read and write
them with the [`io`](/docs/reference/io) functions or the [`io::sync`](/packages/stdlib/reference/io/sync)
helpers. Every network call needs `--allow-net` (optionally limited to hosts);
see [Permissions](/docs/language/permissions).

Built into the compiler.

## Modules

| Module | Description |
|--------|-------------|
| [`io::net::tcp`](/docs/reference/io/net/tcp) | TCP clients and servers: connect, listen, accept. |
| [`io::net::udp`](/docs/reference/io/net/udp) | UDP sockets: bind, send_to, recv_from. |
