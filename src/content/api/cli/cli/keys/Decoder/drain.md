---
slug: "cli/cli/keys/Decoder/drain"
package: "cli"
title: "Decoder::drain"
description: "Every complete event decoded so far."
module: "cli::keys"
kind: "method"
name: "drain"
parent: "Decoder"
signature: "pub fn drain() -> Vec<Event>"
import: "use cli::keys::{Decoder};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L566"
order: 4
---

Every complete event decoded so far.

Called on a `Decoder` value as `value.drain(…)`.

## Returns

`Vec<Event>`

## See also

- [`Decoder`](/packages/cli/reference/cli/keys/Decoder): Incremental decoder.
- [`Decoder::feed`](/packages/cli/reference/cli/keys/Decoder/feed)
- [`Decoder::pending`](/packages/cli/reference/cli/keys/Decoder/pending): Bytes fed but not decoded yet.
- [`Decoder::next`](/packages/cli/reference/cli/keys/Decoder/next): The next complete event, or `None` when more bytes are needed.
- [`Decoder::flush`](/packages/cli/reference/cli/keys/Decoder/flush): After a quiet time: whatever is pending as events.
