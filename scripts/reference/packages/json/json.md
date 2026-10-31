---
description: "Strict RFC 8259 JSON encode and decode, plus a JSONC parse mode."
---
Decode with `Json::strict()` (or `Json::jsonc()` for comments and trailing commas) and walk the result as a `JsonValue`; errors are a `JsonError` with line and column.
