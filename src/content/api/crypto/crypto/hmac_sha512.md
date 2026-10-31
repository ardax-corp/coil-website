---
slug: "crypto/crypto/hmac_sha512"
package: "crypto"
title: "hmac_sha512"
description: "Returns the 64-byte HMAC-SHA512 tag of data under key."
module: "crypto"
kind: "fn"
name: "hmac_sha512"
signature: "fn hmac_sha512(Vec<byte> key, Vec<byte> data) -> Result<Vec<byte>, CryptoError>"
import: "use crypto::{hmac_sha512};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.hy#L422"
order: 9
---

Returns the 64-byte HMAC-SHA512 tag of `data` under `key`.

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
use crypto::{hmac_sha512};
use string::{to_bytes};
use tests::assert;
let tag = hmac_sha512(to_bytes("secret"), to_bytes("message")).unwrap_or(Vec::new());
assert!(tag.len() == 64);
```

## See also

- [`sha256`](/packages/crypto/reference/crypto/sha256): Returns the 32-byte SHA-256 digest of `data`.
- [`sha512`](/packages/crypto/reference/crypto/sha512): Returns the 64-byte SHA-512 digest of `data`.
- [`blake3`](/packages/crypto/reference/crypto/blake3): Returns the 32-byte BLAKE3 digest of `data`.
- [`init`](/packages/crypto/reference/crypto/init): Starts an incremental `Hasher` for algorithm `alg`.
- [`update`](/packages/crypto/reference/crypto/update): Feeds `data` into `h`; the function form of `Hasher.update`.
- [`finalize`](/packages/crypto/reference/crypto/finalize): Returns the digest of `h`; the function form of `Hasher.finalize`.
- [`hmac_sha256`](/packages/crypto/reference/crypto/hmac_sha256): Returns the 32-byte HMAC-SHA256 tag of `data` under `key`.
- [`hmac_verify_sha256`](/packages/crypto/reference/crypto/hmac_verify_sha256): Checks in constant time that `tag` is the HMAC-SHA256 of `data` under `key`.
