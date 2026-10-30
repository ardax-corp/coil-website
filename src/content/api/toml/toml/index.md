---
slug: "toml/toml/index"
package: "toml"
title: "toml"
description: "TOML 1.0 encode and decode."
module: "toml"
kind: "module"
name: "toml"
origin: "package"
auto: false
order: 0
---

Decode with [`Toml::v1()`](/packages/toml/reference/toml/Toml/v1) and walk the result as a [`TomlValue`](/packages/toml/reference/toml/TomlValue); errors are a [`TomlError`](/packages/toml/reference/toml/TomlError).

Part of the [toml](/packages/toml) package ([coil-toml](https://github.com/ardax-corp/coil-toml)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/toml)).

Import what you use (`use path::*` is not allowed):

```coil
use toml::{TomlError, TomlValue};
```

## Types

| Name | Description |
|------|-------------|
| [`TomlError`](/packages/toml/reference/toml/TomlError) | Decode/encode failure. |
| [`TomlValue`](/packages/toml/reference/toml/TomlValue) | Strict TOML value. |
| [`Toml`](/packages/toml/reference/toml/Toml) | TOML 1.0 codec. |
| [`Store`](/packages/toml/reference/toml/Store) |  |
