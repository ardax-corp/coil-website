---
slug: "crypto/crypto/blake3"
package: "crypto"
title: "blake3"
description: "Returns the 32-byte BLAKE3 digest of data."
module: "crypto"
kind: "fn"
name: "blake3"
signature: "fn blake3(Vec<byte> data) -> Result<Vec<byte>, CryptoError>"
import: "use crypto::{blake3};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.coil#L285"
order: 4
---

Returns the 32-byte BLAKE3 digest of `data`.

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, CryptoError>`

## Examples

```coil
use crypto::{blake3};
use bytes::{to_hex};
use tests::assert;
let empty: Vec<byte> = [];
let digest = blake3(empty).unwrap_or(Vec::new());
assert!(to_hex(digest) == "af1349b9f5f9a1a6a0404dea36dcc9499bcb25c9adc112b7cc9a93cae41f3262");
```

## See also

- [`sha256`](/packages/crypto/reference/crypto/sha256): Returns the 32-byte SHA-256 digest of `data`.
- [`sha512`](/packages/crypto/reference/crypto/sha512): Returns the 64-byte SHA-512 digest of `data`.
- [`init`](/packages/crypto/reference/crypto/init): Starts an incremental `Hasher` for algorithm `alg`.
- [`update`](/packages/crypto/reference/crypto/update): Feeds `data` into `h`; the function form of `Hasher.update`.
- [`finalize`](/packages/crypto/reference/crypto/finalize): Returns the digest of `h`; the function form of `Hasher.finalize`.
- [`hmac_sha256`](/packages/crypto/reference/crypto/hmac_sha256): Returns the 32-byte HMAC-SHA256 tag of `data` under `key`.
- [`hmac_sha512`](/packages/crypto/reference/crypto/hmac_sha512): Returns the 64-byte HMAC-SHA512 tag of `data` under `key`.
- [`hmac_verify_sha256`](/packages/crypto/reference/crypto/hmac_verify_sha256): Checks in constant time that `tag` is the HMAC-SHA256 of `data` under `key`.
