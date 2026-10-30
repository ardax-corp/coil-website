---
slug: "cli/cli/keys/Decoder/pending"
package: "cli"
title: "Decoder::pending"
description: "Bytes fed but not decoded yet."
module: "cli::keys"
kind: "method"
name: "pending"
parent: "Decoder"
signature: "pub fn pending() -> int"
import: "use cli::keys::{Decoder};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L438"
order: 1
---

Bytes fed but not decoded yet.

Called on a `Decoder` value as `value.pending(…)`.

## Returns

`int`

## See also

- [`Decoder`](/packages/cli/reference/cli/keys/Decoder): Incremental decoder.
- [`Decoder::feed`](/packages/cli/reference/cli/keys/Decoder/feed)
- [`Decoder::next`](/packages/cli/reference/cli/keys/Decoder/next): The next complete event, or `None` when more bytes are needed.
- [`Decoder::flush`](/packages/cli/reference/cli/keys/Decoder/flush): After a quiet time: whatever is pending as events.
- [`Decoder::drain`](/packages/cli/reference/cli/keys/Decoder/drain): Every complete event decoded so far.
