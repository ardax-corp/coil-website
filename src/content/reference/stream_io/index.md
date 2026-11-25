---
slug: "stream_io/index"
title: "stream_io"
description: "The stream_io module."
module: "stream_io"
kind: "module"
name: "stream_io"
origin: "embedded"
auto: false
order: 24
---

Written in Coil and shipped inside the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use stream_io::{Read, Write};
```

## Traits

| Name | Description |
|------|-------------|
| [`Read`](/docs/reference/stream_io/Read) | Types that bytes can be read from without waiting. |
| [`Write`](/docs/reference/stream_io/Write) | Types that bytes can be written to without waiting. |
| [`Close`](/docs/reference/stream_io/Close) | Types that hold a resource to release. |
