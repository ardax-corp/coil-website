---
slug: "msgpack/msgpack/MsgpackError"
package: "msgpack"
title: "MsgpackError"
description: "Decode/encode failure. offset is the 0-based byte offset in the input (0 for an encode failure or an empty input)."
module: "msgpack"
kind: "enum"
name: "MsgpackError"
signature: "enum MsgpackError"
import: "use msgpack::{MsgpackError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L185"
order: 1
---

Decode/encode failure. `offset` is the 0-based byte offset in the input (0 for an encode failure or an empty input).

## Variants

### `Invalid { offset: int }` {#variant-invalid}

### `Utf8 { offset: int }` {#variant-utf8}

### `Number { offset: int }` {#variant-number}
