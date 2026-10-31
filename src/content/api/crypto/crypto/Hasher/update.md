---
slug: "crypto/crypto/Hasher/update"
package: "crypto"
title: "Hasher::update"
description: "Feeds data into the hash."
module: "crypto"
kind: "method"
name: "update"
parent: "Hasher"
signature: "pub fn update(Vec<byte> data) -> Result<(), CryptoError>"
import: "use crypto::{Hasher};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.coil#L338"
order: 0
---

Feeds `data` into the hash.

Called on a `Hasher` value as `value.update(…)`.

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`Result<(), CryptoError>`

## Errors

Returns [`CryptoError::AlreadyFinalized`](/packages/crypto/reference/crypto/CryptoError#variant-alreadyfinalized) after [`finalize`](/packages/crypto/reference/crypto/Hasher/finalize).

## See also

- [`crypto::CryptoError`](/packages/crypto/reference/crypto/CryptoError)
- [`Hasher::finalize`](/packages/crypto/reference/crypto/Hasher/finalize)
- [`Hasher`](/packages/crypto/reference/crypto/Hasher): An incremental hash of SHA-256, SHA-512 or BLAKE3.
