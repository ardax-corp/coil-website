---
slug: "cli/cli/keys/Decoder/feed"
package: "cli"
title: "Decoder::feed"
description: "Append bytes read from the terminal; decode them with next or drain."
module: "cli::keys"
kind: "method"
name: "feed"
parent: "Decoder"
signature: "pub fn feed(Vec<byte> bytes)"
import: "use cli::keys::{Decoder};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/keys.hy#L523"
order: 0
---

Append bytes read from the terminal; decode them with [`next`](/packages/cli/reference/cli/keys/Decoder/next) or [`drain`](/packages/cli/reference/cli/keys/Decoder/drain).

Called on a `Decoder` value as `value.feed(…)`.

## Parameters

| Name | Type |
|------|------|
| `bytes` | `Vec<byte>` |

## See also

- [`Decoder::next`](/packages/cli/reference/cli/keys/Decoder/next)
- [`Decoder::drain`](/packages/cli/reference/cli/keys/Decoder/drain)
- [`Decoder`](/packages/cli/reference/cli/keys/Decoder): Incremental decoder.
- [`Decoder::pending`](/packages/cli/reference/cli/keys/Decoder/pending): Bytes fed but not decoded yet.
- [`Decoder::flush`](/packages/cli/reference/cli/keys/Decoder/flush): After a quiet time: whatever is pending as events.
