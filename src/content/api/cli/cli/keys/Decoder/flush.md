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
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/keys.hy#L641"
order: 3
---

After a quiet time: whatever is pending as events. A lone Esc is `Esc`; an unfinished sequence is `Unknown`.

Called on a `Decoder` value as `value.flush(…)`.

## Returns

`Vec<Event>`

## See also

- [`Decoder`](/packages/cli/reference/cli/keys/Decoder): Incremental decoder.
- [`Decoder::feed`](/packages/cli/reference/cli/keys/Decoder/feed): Append bytes read from the terminal; decode them with `next` or `drain`.
- [`Decoder::pending`](/packages/cli/reference/cli/keys/Decoder/pending): Bytes fed but not decoded yet.
- [`Decoder::next`](/packages/cli/reference/cli/keys/Decoder/next): The next complete event, or `None` when more bytes are needed.
- [`Decoder::drain`](/packages/cli/reference/cli/keys/Decoder/drain): Every complete event decoded so far.
