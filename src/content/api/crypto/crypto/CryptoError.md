---
slug: "crypto/crypto/CryptoError"
package: "crypto"
title: "CryptoError"
description: "Why a crypto call failed."
module: "crypto"
kind: "enum"
name: "CryptoError"
signature: "enum CryptoError"
import: "use crypto::{CryptoError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/122607a9b54b7743796616c5e54c2e58cee15f38/src/crypto.hy#L57"
order: 0
---

Why a crypto call failed.

Every fallible function in this package returns [`Result<_, CryptoError>`](/docs/reference/prelude/Result).
Verification functions ([`hmac_verify_sha256`](/packages/crypto/reference/crypto/hmac_verify_sha256), [`ed25519_verify`](/packages/crypto/reference/crypto/ed25519_verify),
[`argon2id_verify`](/packages/crypto/reference/crypto/argon2id_verify)) report a mismatch as [`AuthenticationFailed`](/packages/crypto/reference/crypto/CryptoError#variant-authenticationfailed), never as
`Ok(false)`.

## Variants

### `InvalidInput` {#variant-invalidinput}

An argument the native rejected: a value out of range (such as
[`random_bytes`](/packages/crypto/reference/crypto/random_bytes) above 1 MiB), a malformed key or a malformed PHC hash.

### `InvalidLength` {#variant-invalidlength}

A key, nonce, tag, signature or salt of the wrong size.

### `AuthenticationFailed` {#variant-authenticationfailed}

A tag, signature or password did not verify, or ciphertext was tampered with.

### `UnsupportedAlgorithm` {#variant-unsupportedalgorithm}

[`init`](/packages/crypto/reference/crypto/init) was given an algorithm tag other than `0`, `1` or `2`.

### `AlreadyFinalized` {#variant-alreadyfinalized}

[`update`](/packages/crypto/reference/crypto/update) or [`finalize`](/packages/crypto/reference/crypto/finalize) on a [`Hasher`](/packages/crypto/reference/crypto/Hasher) that was already finalized.

### `Other` {#variant-other}

Any other failure, such as the OS random source failing.

## Examples

```coil
use crypto::{chacha20_poly1305_decrypt, CryptoError};
use tests::assert;
let short_key: Vec<byte> = [1 as byte, 2 as byte];
let nonce: Vec<byte> = [0 as byte, 0 as byte, 0 as byte, 0 as byte, 0 as byte, 0 as byte,
    0 as byte, 0 as byte, 0 as byte, 0 as byte, 0 as byte, 0 as byte];
let empty: Vec<byte> = [];
let wrong_size = match chacha20_poly1305_decrypt(short_key, nonce, empty, empty) {
    Result::Ok(_) => false,
    Result::Err(e) => match e {
        CryptoError::InvalidLength => true,
        default => false,
    },
};
assert!(wrong_size);
```

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`crypto::hmac_verify_sha256`](/packages/crypto/reference/crypto/hmac_verify_sha256)
- [`crypto::ed25519_verify`](/packages/crypto/reference/crypto/ed25519_verify)
- [`crypto::argon2id_verify`](/packages/crypto/reference/crypto/argon2id_verify)
- [`crypto::random_bytes`](/packages/crypto/reference/crypto/random_bytes)
- [`crypto::init`](/packages/crypto/reference/crypto/init)
- [`crypto::update`](/packages/crypto/reference/crypto/update)
- [`crypto::finalize`](/packages/crypto/reference/crypto/finalize)
- [`crypto::Hasher`](/packages/crypto/reference/crypto/Hasher)
