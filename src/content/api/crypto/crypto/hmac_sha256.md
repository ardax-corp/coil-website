---
slug: "crypto/crypto/hmac_sha256"
package: "crypto"
title: "hmac_sha256"
description: "Returns the 32-byte HMAC-SHA256 tag of data under key."
module: "crypto"
kind: "fn"
name: "hmac_sha256"
signature: "fn hmac_sha256(Vec<byte> key, Vec<byte> data) -> Result<Vec<byte>, CryptoError>"
import: "use crypto::{hmac_sha256};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/122607a9b54b7743796616c5e54c2e58cee15f38/src/crypto.hy#L404"
order: 8
---

Returns the 32-byte HMAC-SHA256 tag of `data` under `key`.

`key` may be any length, including empty.

## Parameters

| Name | Type |
|------|------|
| `key` | `Vec<byte>` |
| `data` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, CryptoError>`

## Examples

```coil
use crypto::{hmac_sha256, hmac_verify_sha256};
use string::{to_bytes};
use tests::assert;
let key = to_bytes("secret");
let tag = hmac_sha256(key, to_bytes("message")).unwrap_or(Vec::new());
assert!(tag.len() == 32);
assert!(hmac_verify_sha256(key, to_bytes("message"), tag).is_ok());
assert!(hmac_verify_sha256(key, to_bytes("tampered"), tag).is_err());
```

## See also

- [`sha256`](/packages/crypto/reference/crypto/sha256): Returns the 32-byte SHA-256 digest of `data`.
- [`sha512`](/packages/crypto/reference/crypto/sha512): Returns the 64-byte SHA-512 digest of `data`.
- [`blake3`](/packages/crypto/reference/crypto/blake3): Returns the 32-byte BLAKE3 digest of `data`.
- [`init`](/packages/crypto/reference/crypto/init): Starts an incremental `Hasher` for algorithm `alg`.
- [`update`](/packages/crypto/reference/crypto/update): Feeds `data` into `h`; the function form of `Hasher.update`.
- [`finalize`](/packages/crypto/reference/crypto/finalize): Returns the digest of `h`; the function form of `Hasher.finalize`.
- [`hmac_sha512`](/packages/crypto/reference/crypto/hmac_sha512): Returns the 64-byte HMAC-SHA512 tag of `data` under `key`.
- [`hmac_verify_sha256`](/packages/crypto/reference/crypto/hmac_verify_sha256): Checks in constant time that `tag` is the HMAC-SHA256 of `data` under `key`.
