---
slug: "crypto/crypto/chacha20_poly1305_encrypt"
package: "crypto"
title: "chacha20_poly1305_encrypt"
description: "Encrypts and authenticates plaintext with ChaCha20-Poly1305."
module: "crypto"
kind: "fn"
name: "chacha20_poly1305_encrypt"
signature: "fn chacha20_poly1305_encrypt(Vec<byte> key, Vec<byte> nonce, Vec<byte> plaintext, Vec<byte> aad) -> Result<Vec<byte>, CryptoError>"
import: "use crypto::{chacha20_poly1305_encrypt};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.hy#L539"
order: 13
---

Encrypts and authenticates `plaintext` with ChaCha20-Poly1305.

`key` is 32 bytes and `nonce` 12 bytes; never reuse a nonce with the same
key. `aad` is extra data that is authenticated but not encrypted (it may
be empty) and must be passed again to decrypt. The result is the
ciphertext followed by the 16-byte tag, so it is `plaintext.len() + 16`
bytes long.

## Parameters

| Name | Type |
|------|------|
| `key` | `Vec<byte>` |
| `nonce` | `Vec<byte>` |
| `plaintext` | `Vec<byte>` |
| `aad` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, CryptoError>`

## Errors

Returns [`CryptoError::InvalidLength`](/packages/crypto/reference/crypto/CryptoError#variant-invalidlength) for a key or nonce of the wrong size.

## Examples

```coil
use crypto::{chacha20_poly1305_encrypt, chacha20_poly1305_decrypt, random_bytes};
use string::{to_bytes};
use tests::assert;
let key = random_bytes(32).unwrap_or(Vec::new());
let nonce: Vec<byte> = [0 as byte, 1 as byte, 2 as byte, 3 as byte, 4 as byte, 5 as byte,
    6 as byte, 7 as byte, 8 as byte, 9 as byte, 10 as byte, 11 as byte];
let aad = to_bytes("header");
let sealed = chacha20_poly1305_encrypt(key, nonce, to_bytes("attack at dawn"), aad).unwrap_or(Vec::new());
assert!(sealed.len() == 14 + 16);
let opened = chacha20_poly1305_decrypt(key, nonce, sealed, aad).unwrap_or(Vec::new());
assert!(opened == to_bytes("attack at dawn"));
assert!(chacha20_poly1305_decrypt(key, nonce, sealed, to_bytes("other")).is_err());
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
