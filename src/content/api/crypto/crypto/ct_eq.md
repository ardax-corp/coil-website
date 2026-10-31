---
slug: "crypto/crypto/ct_eq"
package: "crypto"
title: "ct_eq"
description: "Compares a and b in constant time and returns true when they are equal."
module: "crypto"
kind: "fn"
name: "ct_eq"
signature: "fn ct_eq(Vec<byte> a, Vec<byte> b) -> bool"
import: "use crypto::{ct_eq};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.hy#L775"
order: 24
---

Compares `a` and `b` in constant time and returns `true` when they are equal.

Use it instead of `==` for secrets such as MAC tags or tokens, so the
time taken does not reveal where the first difference is. Inputs of
different lengths are unequal.

## Parameters

| Name | Type |
|------|------|
| `a` | `Vec<byte>` |
| `b` | `Vec<byte>` |

## Returns

`bool`

## Examples

```coil
use crypto::{ct_eq};
use string::{to_bytes};
use tests::assert;
assert!(ct_eq(to_bytes("token"), to_bytes("token")));
assert!(!ct_eq(to_bytes("token"), to_bytes("tokens")));
```

## See also

- [`sha256`](/packages/crypto/reference/crypto/sha256): Returns the 32-byte SHA-256 digest of `data`.
- [`sha512`](/packages/crypto/reference/crypto/sha512): Returns the 64-byte SHA-512 digest of `data`.
- [`blake3`](/packages/crypto/reference/crypto/blake3): Returns the 32-byte BLAKE3 digest of `data`.
- [`init`](/packages/crypto/reference/crypto/init): Starts an incremental `Hasher` for algorithm `alg`.
- [`update`](/packages/crypto/reference/crypto/update): Feeds `data` into `h`; the function form of `Hasher.update`.
- [`finalize`](/packages/crypto/reference/crypto/finalize): Returns the digest of `h`; the function form of `Hasher.finalize`.
- [`hmac_sha256`](/packages/crypto/reference/crypto/hmac_sha256): Returns the 32-byte HMAC-SHA256 tag of `data` under `key`.
- [`hmac_sha512`](/packages/crypto/reference/crypto/hmac_sha512): Returns the 64-byte HMAC-SHA512 tag of `data` under `key`.
