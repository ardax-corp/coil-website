---
slug: "crypto/crypto/random_u64"
package: "crypto"
title: "random_u64"
description: "Returns 64 random bits from the operating system's cryptographically secure random source."
module: "crypto"
kind: "fn"
name: "random_u64"
signature: "fn random_u64() -> Result<int, CryptoError>"
import: "use crypto::{random_u64};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.hy#L494"
order: 12
---

Returns 64 random bits from the operating system's cryptographically secure random source.

Coil [`int`](/docs/reference/types/int) is a signed 64-bit integer, so about half of the results are
negative.

## Returns

`Result<int, CryptoError>`

## Errors

Returns [`CryptoError::Other`](/packages/crypto/reference/crypto/CryptoError#variant-other) when the OS random source fails.

## Examples

```coil
use crypto::{random_u64};
use tests::assert;
let roll = random_u64().unwrap_or(0) & 255;
assert!(roll >= 0 && roll < 256);
```

## See also

- [`int`](/docs/reference/types/int)
- [`crypto::CryptoError`](/packages/crypto/reference/crypto/CryptoError)
- [`sha256`](/packages/crypto/reference/crypto/sha256): Returns the 32-byte SHA-256 digest of `data`.
- [`sha512`](/packages/crypto/reference/crypto/sha512): Returns the 64-byte SHA-512 digest of `data`.
- [`blake3`](/packages/crypto/reference/crypto/blake3): Returns the 32-byte BLAKE3 digest of `data`.
- [`init`](/packages/crypto/reference/crypto/init): Starts an incremental `Hasher` for algorithm `alg`.
- [`update`](/packages/crypto/reference/crypto/update): Feeds `data` into `h`; the function form of `Hasher.update`.
- [`finalize`](/packages/crypto/reference/crypto/finalize): Returns the digest of `h`; the function form of `Hasher.finalize`.
