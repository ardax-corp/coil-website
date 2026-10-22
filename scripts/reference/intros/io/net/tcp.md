---
description: "TCP clients and servers: connect, listen, accept."
---
`connect` and `connect_timeout` try every address the host name resolves to
under one deadline; `listen` uses the first. A timeout of `0` or less waits
forever. Prefer an explicit IP such as `127.0.0.1` for servers when the
address family matters.
