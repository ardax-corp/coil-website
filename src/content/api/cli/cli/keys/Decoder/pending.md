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
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/keys.hy#L530"
order: 1
---

Bytes fed but not decoded yet.

Called on a `Decoder` value as `value.pending(…)`.

## Returns

`int`

## See also

- [`Decoder`](/packages/cli/reference/cli/keys/Decoder): Incremental decoder.
- [`Decoder::feed`](/packages/cli/reference/cli/keys/Decoder/feed): Append bytes read from the terminal; decode them with `next` or `drain`.
- [`Decoder::next`](/packages/cli/reference/cli/keys/Decoder/next): The next complete event, or `None` when more bytes are needed.
- [`Decoder::flush`](/packages/cli/reference/cli/keys/Decoder/flush): After a quiet time: whatever is pending as events.
- [`Decoder::drain`](/packages/cli/reference/cli/keys/Decoder/drain): Every complete event decoded so far.
