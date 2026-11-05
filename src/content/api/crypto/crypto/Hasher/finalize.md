---
slug: "crypto/crypto/Hasher/finalize"
package: "crypto"
title: "Hasher::finalize"
description: "Returns the digest of everything fed so far: 32 bytes for SHA-256 and BLAKE3, 64 for SHA-512."
module: "crypto"
kind: "method"
name: "finalize"
parent: "Hasher"
signature: "pub fn finalize() -> Result<Vec<byte>, CryptoError>"
import: "use crypto::{Hasher};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/0f059437ce1964f08ad14012792b3c7852d57b79/src/crypto.coil#L353"
order: 1
---

Returns the digest of everything fed so far: 32 bytes for SHA-256 and BLAKE3, 64 for SHA-512.

A hasher finalizes once.

Called on a `Hasher` value as `value.finalize(…)`.

## Returns

`Result<Vec<byte>, CryptoError>`

## Errors

Returns [`CryptoError::AlreadyFinalized`](/packages/crypto/reference/crypto/CryptoError#variant-alreadyfinalized) when called a second time.

## See also

- [`crypto::CryptoError`](/packages/crypto/reference/crypto/CryptoError)
- [`Hasher`](/packages/crypto/reference/crypto/Hasher): An incremental hash of SHA-256, SHA-512 or BLAKE3.
- [`Hasher::update`](/packages/crypto/reference/crypto/Hasher/update): Feeds `data` into the hash.
