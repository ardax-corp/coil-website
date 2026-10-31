---
description: "TCP and UDP sockets."
---
Sockets are ordinary [`Stream`](/docs/reference/io/Stream)s: read and write
them with the `io` functions or the [`io::sync`](/packages/stdlib/reference/io/sync)
helpers. Every network call needs `--allow-net` (optionally limited to hosts);
see [Permissions](/docs/language/permissions).
