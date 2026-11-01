---
slug: "crypto/crypto/argon2id_hash"
package: "crypto"
title: "argon2id_hash"
description: "Hashes password with Argon2id and returns the PHC string ($argon2id$v=19$m=19456,t=2,p=1$...) to store."
module: "crypto"
kind: "fn"
name: "argon2id_hash"
signature: "fn argon2id_hash(Vec<byte> password, Vec<byte> salt) -> Result<string, CryptoError>"
import: "use crypto::{argon2id_hash};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.coil#L734"
order: 22
---

Hashes `password` with Argon2id and returns the PHC string (`$argon2id$v=19$m=19456,t=2,p=1$...`) to store.

Parameters are fixed: 19 MiB of memory, 2 iterations, parallelism 1.
`salt` is 1 to 64 bytes; use 16 random bytes from `random_bytes(16)`
(shorter salts are zero-padded to 16).

## Parameters

| Name | Type |
|------|------|
| `password` | `Vec<byte>` |
| `salt` | `Vec<byte>` |

## Returns

`Result<string, CryptoError>`

## Errors

Returns [`CryptoError::InvalidLength`](/packages/crypto/reference/crypto/CryptoError#variant-invalidlength) for an empty salt or one longer than
64 bytes.

## Examples

```coil
use crypto::{argon2id_hash, argon2id_verify, random_bytes};
use string::{to_bytes};
use text::{Searchable};
use tests::assert;
let salt = random_bytes(16).unwrap_or(Vec::new());
let stored = argon2id_hash(to_bytes("hunter2"), salt).unwrap_or("");
assert!(stored.starts_with("$argon2id$"));
assert!(argon2id_verify(to_bytes("hunter2"), stored).is_ok());
assert!(argon2id_verify(to_bytes("hunter3"), stored).is_err());
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
