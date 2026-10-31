// Turns the code blocks that define a tutorial challenge into the challenge
// widget's data (the editor itself is src/lib/playground/challenges.mjs):
//
//   ```coil challenge=c06-1      starter code the reader edits (main.coil)
//   ```coil challenge=c09-1 file=src/fizz.coil   one file of a project; the
//                                widget sits where the first block was
//   ```text challenge=c10-1 file=poem.txt      a data file the program reads
//   ```text challenge=c10-2 stdin              what the program reads from
//                                standard input
//   args=Ada,Grace on any of them: arguments after `--`
//
//   ```coil check=c06-1          hidden test cases, run with `coil test`;
//                                the reader's main.coil is the module
//                                `solution` (`use solution::{parse_point};`)
//   ```text expect=c06-2         hidden expected output of the program
//   ```text expect=c06-3 stream=stderr   …of its standard error
//   ```text expect=c06-3 match=prefix    output that starts with the text
//   ```text expect=c11-1 match=contains  output that contains the text
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
    const args = new Map();
    each(tree, (node, parent) => {
      if (node.type !== "code") return;
      const info = parseInfo(node.meta);
      if (node.lang === "coil" && info.check) add(info.check, hidden("check", node.value));
      else if (node.lang === "text" && info.attrs.expect) {
        add(
          info.attrs.expect,
          hidden("expect", node.value, { dataStream: info.attrs.stream ?? "stdout", dataMatch: info.attrs.match ?? "all" }),
        );
      } else return;
      parent.children.splice(parent.children.indexOf(node), 1);
    });
    const widgets = new Map();
    each(tree, (node, parent) => {
      if (node.type !== "code") return;
      const info = parseInfo(node.meta);
      const id = info.challenge;
      if (!id) return;
      if (info.attrs.args) args.set(id, info.attrs.args);
      const data =
        info.mode === "stdin"
          ? hidden("stdin", node.value)
          : hidden("starter", node.value, { dataFile: info.file ?? "main.coil" });
      const at = parent.children.indexOf(node);
      if (widgets.has(id)) {
        widgets.get(id).children.push(data);
        parent.children.splice(at, 1);
        return;
      }
      const widget = el("div", { className: ["challenge"], dataChallenge: id }, [data]);
      widgets.set(id, widget);
      parent.children[at] = widget;
    });
    for (const [id, widget] of widgets) {
      widget.children.push(...(parts.get(id) ?? []));
      if (args.has(id)) widget.data.hProperties.dataArgs = args.get(id);
      parts.delete(id);
    }
    for (const id of parts.keys()) file.fail(`challenge ${id}: a check or expect block without its \`challenge=${id}\` block`);
  };
}
