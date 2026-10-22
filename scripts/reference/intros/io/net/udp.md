---
description: "UDP sockets: bind, send_to, recv_from."
---
A UDP socket is a [`Stream`](/docs/reference/io/Stream) bound with `bind`.
`connect` fixes a default peer for `write`; `send_to` and `recv_from` name the
peer on each datagram.
