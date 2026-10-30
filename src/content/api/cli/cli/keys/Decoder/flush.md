---
slug: "cli/cli/keys/Decoder/flush"
package: "cli"
title: "Decoder::flush"
description: "After a quiet time: whatever is pending as events. A lone Esc is Esc; an unfinished sequence is Unknown."
module: "cli::keys"
kind: "method"
name: "flush"
parent: "Decoder"
signature: "pub fn flush() -> Vec<Event>"
import: "use cli::keys::{Decoder};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L549"
order: 3
---

After a quiet time: whatever is pending as events. A lone Esc is `Esc`; an unfinished sequence is `Unknown`.

Called on a `Decoder` value as `value.flush(…)`.

## Returns

`Vec<Event>`

## See also

- [`Decoder`](/packages/cli/reference/cli/keys/Decoder): Incremental decoder.
- [`Decoder::feed`](/packages/cli/reference/cli/keys/Decoder/feed)
- [`Decoder::pending`](/packages/cli/reference/cli/keys/Decoder/pending): Bytes fed but not decoded yet.
- [`Decoder::next`](/packages/cli/reference/cli/keys/Decoder/next): The next complete event, or `None` when more bytes are needed.
- [`Decoder::drain`](/packages/cli/reference/cli/keys/Decoder/drain): Every complete event decoded so far.
