// Decides how to run a set of files: the program with `fn main`, or, when
// there is none, the `test("…")` cases under `coil test`.

import { hasMain, isTestBlock } from "../examples.mjs";

/**
 * Where the standard library sits in the playground's file system. Under
 * .deps/, which `coil test` treats as dependencies: it does not run their
 * doc examples, though the directory is inside the working directory.
 */
export const STDLIB = "/.deps/stdlib";

/**
 * { files } → { files, args, mode } where mode is "run" or "test". `coil test`
 * wants a directory, so test files outside tests/ move into it.
 */
export function planRun(files) {
  const paths = Object.keys(files);
  const entry = paths.find((p) => p === "main.hy" && hasMain(files[p])) ?? paths.find((p) => hasMain(files[p]));
  if (entry) return { files, mode: "run", args: ["--root", STDLIB, "-A", entry] };
  const tests = paths.filter((p) => isTestBlock(files[p]));
  if (!tests.length) return { files, mode: "run", args: ["--root", STDLIB, "-A", paths[0] ?? "main.hy"] };
  const moved = {};
  for (const p of paths) moved[tests.includes(p) && !p.startsWith("tests/") ? `tests/${p.split("/").at(-1)}` : p] = files[p];
  return { files: moved, mode: "test", args: ["test", "--root", STDLIB, "-A", "tests"] };
}
