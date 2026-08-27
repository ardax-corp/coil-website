import { defineConfig } from "astro/config";

export default defineConfig({
  markdown: {
    shikiConfig: {
      langAlias: {
        coil: "plaintext",
      },
    },
  },
});
