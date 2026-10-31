---
slug: "stdlib/net/index"
package: "stdlib"
title: "net"
description: "Connection loops over io::net::tcp: serve accepts connections and handles each one in a task."
module: "net"
kind: "module"
name: "net"
origin: "stdlib"
auto: false
order: 20
---

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use net::{serve};
```

## Functions

| Name | Description |
|------|-------------|
| [`serve`](/packages/stdlib/reference/net/serve) | Accepts connections on `listener` and runs `handler` on each one in its own task, with at most `max` running at once (at least 1). |
