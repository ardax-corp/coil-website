// Turns the code blocks that define a tutorial challenge into the challenge
// widget's data (the editor itself is src/lib/playground/challenges.mjs):
//
//   ```coil challenge=c06-1      starter code the reader edits
//   ```coil check=c06-1          hidden test cases, run with `coil test`;
//                                the reader's code is the module `solution`
//                                (`use solution::{parse_point};`)
//   ```text expect=c06-2         hidden expected output of the program
//   ```text expect=c06-3 stream=stderr   …of its standard error
//   ```text expect=c06-3 match=prefix    output that starts with the text
//
// A challenge without a check or expectation can be run, then marked done.
// scripts/check-challenges.mjs runs the reference solutions against them.

import { parseInfo } from "./examples.mjs";

const el = (tagName, properties, children = []) => ({
  type: "challengeData",
  data: { hName: tagName, hProperties: properties },
  children,
});
const hidden = (part, value, extra = {}) =>
  el("textarea", { hidden: true, ariaHidden: "true", tabIndex: -1, dataPart: part, ...extra }, [{ type: "text", value }]);

function each(node, fn, parent) {
  if (!node.children) return;
  for (const child of [...node.children]) {
    fn(child, node);
    each(child, fn, node);
  }
}

export function remarkChallenges() {
  return (tree, file) => {
    const parts = new Map();
    const add = (id, part) => (parts.get(id) ?? parts.set(id, []).get(id)).push(part);
    each(tree, (node, parent) => {
      if (node.type !== "code") return;
      const info = parseInfo(node.meta);
      if (node.lang === "coil" && info.check) add(info.check, hidden("check", node.value));
      else if (node.lang === "text" && info.attrs.expect) {
        add(info.attrs.expect, hidden("expect", node.value, { dataStream: info.attrs.stream ?? "stdout", dataMatch: info.attrs.match ?? "all" }));
      } else return;
      parent.children.splice(parent.children.indexOf(node), 1);
    });
    each(tree, (node, parent) => {
      if (node.type !== "code" || node.lang !== "coil") return;
      const id = parseInfo(node.meta).challenge;
      if (!id) return;
      const widget = el("div", { className: ["challenge"], dataChallenge: id }, [hidden("starter", node.value), ...(parts.get(id) ?? [])]);
      parts.delete(id);
      parent.children[parent.children.indexOf(node)] = widget;
    });
    for (const id of parts.keys()) file.fail(`challenge ${id}: a check or expect block without its \`challenge=${id}\` block`);
  };
}
