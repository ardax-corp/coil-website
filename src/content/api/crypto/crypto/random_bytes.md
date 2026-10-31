---
slug: "crypto/crypto/random_bytes"
package: "crypto"
title: "random_bytes"
description: "Returns n bytes from the operating system's cryptographically secure random source."
module: "crypto"
kind: "fn"
name: "random_bytes"
signature: "fn random_bytes(int n) -> Result<Vec<byte>, CryptoError>"
import: "use crypto::{random_bytes};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.coil#L461"
order: 11
---

Returns `n` bytes from the operating system's cryptographically secure random source.

`n` may be `0` (an empty vector).

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`Result<Vec<byte>, CryptoError>`

## Errors

Returns [`CryptoError::InvalidInput`](/packages/crypto/reference/crypto/CryptoError#variant-invalidinput) when `n` is negative or above 1 MiB
(1048576), and [`CryptoError::Other`](/packages/crypto/reference/crypto/CryptoError#variant-other) when the OS random source fails.

## Examples

```coil
use crypto::{random_bytes};
use tests::assert;
let key = random_bytes(32).unwrap_or(Vec::new());
assert!(key.len() == 32);
assert!(random_bytes(2000000).is_err());
```

## See also

- [`crypto::CryptoError`](/packages/crypto/reference/crypto/CryptoError)
- [`sha256`](/packages/crypto/reference/crypto/sha256): Returns the 32-byte SHA-256 digest of `data`.
- [`sha512`](/packages/crypto/reference/crypto/sha512): Returns the 64-byte SHA-512 digest of `data`.
- [`blake3`](/packages/crypto/reference/crypto/blake3): Returns the 32-byte BLAKE3 digest of `data`.
- [`init`](/packages/crypto/reference/crypto/init): Starts an incremental `Hasher` for algorithm `alg`.
- [`update`](/packages/crypto/reference/crypto/update): Feeds `data` into `h`; the function form of `Hasher.update`.
- [`finalize`](/packages/crypto/reference/crypto/finalize): Returns the digest of `h`; the function form of `Hasher.finalize`.
- [`hmac_sha256`](/packages/crypto/reference/crypto/hmac_sha256): Returns the 32-byte HMAC-SHA256 tag of `data` under `key`.
