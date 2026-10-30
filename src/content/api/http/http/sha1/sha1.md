---
slug: "http/http/sha1/sha1"
package: "http"
title: "sha1"
description: "SHA-1 digest (20 bytes, big-endian)."
module: "http::sha1"
kind: "fn"
name: "sha1"
signature: "fn sha1(Vec<byte> msg) -> Vec<byte>"
import: "use http::sha1::{sha1};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/sha1.hy#L187"
order: 0
---

SHA-1 digest (20 bytes, big-endian).

## Parameters

| Name | Type |
|------|------|
| `msg` | `Vec<byte>` |

## Returns

`Vec<byte>`
