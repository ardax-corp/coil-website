---
slug: "crypto/crypto/Hasher"
package: "crypto"
title: "Hasher"
description: "An incremental hash of SHA-256, SHA-512 or BLAKE3."
module: "crypto"
kind: "class"
name: "Hasher"
signature: "class Hasher"
import: "use crypto::{Hasher};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.coil#L96"
order: 1
---

An incremental hash of SHA-256, SHA-512 or BLAKE3.

Make one with [`init`](/packages/crypto/reference/crypto/init), feed it with [`update`](/packages/crypto/reference/crypto/Hasher/update) as many times as needed and
read the digest once with [`finalize`](/packages/crypto/reference/crypto/Hasher/finalize). The digest equals the one-shot
[`sha256`](/packages/crypto/reference/crypto/sha256) / [`sha512`](/packages/crypto/reference/crypto/sha512) / [`blake3`](/packages/crypto/reference/crypto/blake3) of all the data concatenated. The state
lives in the native library and is freed when the `Hasher` is dropped.

## Methods

| Name | Description |
|------|-------------|
| [`update`](/packages/crypto/reference/crypto/Hasher/update) | Feeds `data` into the hash. |
| [`finalize`](/packages/crypto/reference/crypto/Hasher/finalize) | Returns the digest of everything fed so far: 32 bytes for SHA-256 and BLAKE3, 64 for SHA-512. |

## Examples

```coil
use crypto::{init, sha256, Hasher};
use string::{to_bytes};
use tests::assert;
let h = match init(0) {
    Result::Ok(h) => h,
    Result::Err(_) => panic "init failed",
};
assert!(h.update(to_bytes("ab")).is_ok());
assert!(h.update(to_bytes("c")).is_ok());
let incremental = h.finalize().unwrap_or(Vec::new());
assert!(incremental == sha256(to_bytes("abc")).unwrap_or(Vec::new()));
assert!(h.finalize().is_err());
```

## See also

- [`crypto::init`](/packages/crypto/reference/crypto/init)
- [`Hasher::update`](/packages/crypto/reference/crypto/Hasher/update)
- [`Hasher::finalize`](/packages/crypto/reference/crypto/Hasher/finalize)
- [`crypto::sha256`](/packages/crypto/reference/crypto/sha256)
- [`crypto::sha512`](/packages/crypto/reference/crypto/sha512)
- [`crypto::blake3`](/packages/crypto/reference/crypto/blake3)
