---
slug: "crypto/crypto/x25519_generate"
package: "crypto"
title: "x25519_generate"
description: "Generates a fresh X25519 key-agreement pair as (secret, public), 32 bytes each."
module: "crypto"
kind: "fn"
name: "x25519_generate"
signature: "fn x25519_generate() -> Result<(Vec<byte>, Vec<byte>), CryptoError>"
import: "use crypto::{x25519_generate};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.coil#L690"
order: 20
---

Generates a fresh X25519 key-agreement pair as `(secret, public)`, 32 bytes each.

## Returns

`Result<(Vec<byte>, Vec<byte>), CryptoError>`

## Errors

Returns [`CryptoError::Other`](/packages/crypto/reference/crypto/CryptoError#variant-other) when the OS random source fails.

## Examples

```coil
use crypto::{x25519_generate, x25519_shared_secret};
use tests::assert;
let (a_secret, a_public) = match x25519_generate() {
    Result::Ok(pair) => pair,
    Result::Err(_) => panic "keygen failed",
};
let (b_secret, b_public) = match x25519_generate() {
    Result::Ok(pair) => pair,
    Result::Err(_) => panic "keygen failed",
};
let a_shared = x25519_shared_secret(a_secret, b_public).unwrap_or(Vec::new());
let b_shared = x25519_shared_secret(b_secret, a_public).unwrap_or(Vec::new());
assert!(a_shared.len() == 32 && a_shared == b_shared);
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
