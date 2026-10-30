---
slug: "cli/cli/keys/Decoder/next"
package: "cli"
title: "Decoder::next"
description: "The next complete event, or None when more bytes are needed."
module: "cli::keys"
kind: "method"
name: "next"
parent: "Decoder"
signature: "pub fn next() -> Option<Event>"
import: "use cli::keys::{Decoder};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L455"
order: 2
---

The next complete event, or `None` when more bytes are needed.

Called on a `Decoder` value as `value.next(…)`.

## Returns

`Option<Event>`

## See also

- [`Decoder`](/packages/cli/reference/cli/keys/Decoder): Incremental decoder.
- [`Decoder::feed`](/packages/cli/reference/cli/keys/Decoder/feed)
- [`Decoder::pending`](/packages/cli/reference/cli/keys/Decoder/pending): Bytes fed but not decoded yet.
- [`Decoder::flush`](/packages/cli/reference/cli/keys/Decoder/flush): After a quiet time: whatever is pending as events.
- [`Decoder::drain`](/packages/cli/reference/cli/keys/Decoder/drain): Every complete event decoded so far.
