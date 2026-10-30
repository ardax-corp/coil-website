---
slug: "cli/cli/keys/Decoder"
package: "cli"
title: "Decoder"
description: "Incremental decoder. feed bytes, then call next until it returns None; after a quiet time with bytes still pending call flush."
module: "cli::keys"
kind: "class"
name: "Decoder"
signature: "class Decoder"
import: "use cli::keys::{Decoder};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L386"
order: 2
---

Incremental decoder. [`feed`](/packages/cli/reference/cli/keys/Decoder/feed) bytes, then call [`next`](/packages/cli/reference/cli/keys/Decoder/next) until it returns `None`; after a quiet time with bytes still pending call [`flush`](/packages/cli/reference/cli/keys/Decoder/flush).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `expect_cursor` | `bool` | Treat `CSI row ; col R` as a cursor report instead of F3. Set it while a `query_cursor()` answer is pending. |

## Methods

| Name | Description |
|------|-------------|
| [`feed`](/packages/cli/reference/cli/keys/Decoder/feed) |  |
| [`pending`](/packages/cli/reference/cli/keys/Decoder/pending) | Bytes fed but not decoded yet. |
| [`next`](/packages/cli/reference/cli/keys/Decoder/next) | The next complete event, or `None` when more bytes are needed. |
| [`flush`](/packages/cli/reference/cli/keys/Decoder/flush) | After a quiet time: whatever is pending as events. |
| [`drain`](/packages/cli/reference/cli/keys/Decoder/drain) | Every complete event decoded so far. |

## See also

- [`Decoder::feed`](/packages/cli/reference/cli/keys/Decoder/feed)
- [`Decoder::next`](/packages/cli/reference/cli/keys/Decoder/next)
- [`Decoder::flush`](/packages/cli/reference/cli/keys/Decoder/flush)
- [`KeyEvent`](/packages/cli/reference/cli/keys/KeyEvent)
- [`MouseEvent`](/packages/cli/reference/cli/keys/MouseEvent): A mouse report; `col` and `row` are 1-based.
