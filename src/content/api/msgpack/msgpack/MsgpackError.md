---
slug: "msgpack/msgpack/MsgpackError"
package: "msgpack"
title: "MsgpackError"
description: "Why a decode, encode or build step failed."
module: "msgpack"
kind: "enum"
name: "MsgpackError"
signature: "enum MsgpackError"
import: "use msgpack::{MsgpackError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/717fa0fe98bf14f43b00c42cce89eeb1d7f97684/src/msgpack.hy#L212"
order: 0
---

Why a decode, encode or build step failed.

`offset` is the 0-based byte offset in the input where reading failed.
It is 0 for an encode failure,
a failed `append` / `put`, or empty input. Malformed input is always
reported as an error, never as a panic.

## Variants

### `Invalid { offset: int }` {#variant-invalid}

The input is not MessagePack: a reserved or truncated value, trailing
bytes after the value, or empty input. Also `append` / `put` on a
value that is not an array / map.

### `Utf8 { offset: int }` {#variant-utf8}

A string payload is not valid UTF-8, or an encoded document could not
be read back as a [`string`](/docs/reference/types/string) ([`Msgpack::encode_str`](/packages/msgpack/reference/msgpack/Msgpack/encode_str)).

### `Number { offset: int }` {#variant-number}

On decode, a uint64 above the largest [`int`](/docs/reference/types/int) (i64). On encode, an
extension type code outside -128..=127 or a length too large for the
format.

## Examples

```coil
use msgpack::{Msgpack, MsgpackError};
use tests::assert;
// A fixarray of two elements that holds only one.
let bytes: Vec<byte> = Vec::new();
bytes.push(146 as byte);
bytes.push(1 as byte);
let off = match Msgpack::standard().decode(bytes) {
    Result::Ok(_) => -1,
    Result::Err(e) => match e {
        MsgpackError::Invalid { offset } => offset,
        default => -2,
    },
};
assert!(off == 2);
```

## See also

- [`string`](/docs/reference/types/string)
- [`Msgpack::encode_str`](/packages/msgpack/reference/msgpack/Msgpack/encode_str)
- [`int`](/docs/reference/types/int)
