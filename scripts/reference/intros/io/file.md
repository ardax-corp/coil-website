---
description: "Read and write whole files in one call."
---
Each function opens the file, does the whole job and closes it. Reading needs `--allow-read` and writing `--allow-write`. For large files or streaming, open a [`Stream`](/docs/reference/io/Stream) with [`io::open`](/docs/reference/io/open) and use [`io::sync`](/docs/reference/io/sync).
