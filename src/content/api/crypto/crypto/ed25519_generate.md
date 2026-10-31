---
slug: "crypto/crypto/ed25519_generate"
package: "crypto"
title: "ed25519_generate"
description: "Generates a fresh Ed25519 signing key pair as (secret, public), 32 bytes each."
module: "crypto"
kind: "fn"
name: "ed25519_generate"
signature: "fn ed25519_generate() -> Result<(Vec<byte>, Vec<byte>), CryptoError>"
import: "use crypto::{ed25519_generate};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.hy#L632"
order: 17
---

Generates a fresh Ed25519 signing key pair as `(secret, public)`, 32 bytes each.

Keep `secret` private; share `public` with verifiers.

## Returns

`Result<(Vec<byte>, Vec<byte>), CryptoError>`

## Errors

Returns [`CryptoError::Other`](/packages/crypto/reference/crypto/CryptoError#variant-other) when the OS random source fails.

## Examples

```coil
use crypto::{ed25519_generate, ed25519_sign, ed25519_verify};
use string::{to_bytes};
use tests::assert;
let (secret, public) = match ed25519_generate() {
    Result::Ok(pair) => pair,
    Result::Err(_) => panic "keygen failed",
};
let msg = to_bytes("release v1");
let sig = ed25519_sign(secret, msg).unwrap_or(Vec::new());
assert!(sig.len() == 64);
assert!(ed25519_verify(public, msg, sig).is_ok());
assert!(ed25519_verify(public, to_bytes("release v2"), sig).is_err());
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
