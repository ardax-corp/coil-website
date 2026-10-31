---
slug: "crypto/crypto/init"
package: "crypto"
title: "init"
description: "Starts an incremental Hasher for algorithm alg."
module: "crypto"
kind: "fn"
name: "init"
signature: "fn init(int alg) -> Result<Hasher, CryptoError>"
import: "use crypto::{init};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/122607a9b54b7743796616c5e54c2e58cee15f38/src/crypto.hy#L312"
order: 5
---

Starts an incremental [`Hasher`](/packages/crypto/reference/crypto/Hasher) for algorithm `alg`.

`alg` is `0` for SHA-256, `1` for SHA-512 and `2` for BLAKE3.

## Parameters

| Name | Type |
|------|------|
| `alg` | `int` |

## Returns

`Result<Hasher, CryptoError>`

## Errors

Returns [`CryptoError::UnsupportedAlgorithm`](/packages/crypto/reference/crypto/CryptoError#variant-unsupportedalgorithm) for any other `alg`.

## Examples

```coil
use crypto::{init, update, finalize, blake3};
use string::{to_bytes};
use tests::assert;
let h = match init(2) {
    Result::Ok(h) => h,
    Result::Err(_) => panic "init failed",
};
assert!(update(h, to_bytes("hello")).is_ok());
assert!(finalize(h).unwrap_or(Vec::new()) == blake3(to_bytes("hello")).unwrap_or(Vec::new()));
assert!(init(9).is_err());
```

## See also

- [`crypto::Hasher`](/packages/crypto/reference/crypto/Hasher)
- [`crypto::CryptoError`](/packages/crypto/reference/crypto/CryptoError)
- [`sha256`](/packages/crypto/reference/crypto/sha256): Returns the 32-byte SHA-256 digest of `data`.
- [`sha512`](/packages/crypto/reference/crypto/sha512): Returns the 64-byte SHA-512 digest of `data`.
- [`blake3`](/packages/crypto/reference/crypto/blake3): Returns the 32-byte BLAKE3 digest of `data`.
- [`update`](/packages/crypto/reference/crypto/update): Feeds `data` into `h`; the function form of `Hasher.update`.
- [`finalize`](/packages/crypto/reference/crypto/finalize): Returns the digest of `h`; the function form of `Hasher.finalize`.
- [`hmac_sha256`](/packages/crypto/reference/crypto/hmac_sha256): Returns the 32-byte HMAC-SHA256 tag of `data` under `key`.
