// Programs offered in the playground's example picker. Each is taken from
// a tutorial chapter at build time (the first ```coil block after the named
// heading), so the picker shows code the example checker already runs.

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { parseInfo } from "../examples.mjs";

const TUTORIAL = join(process.cwd(), "src/content/docs/manual/tutorial");

const PICKS: { id: string; label: string; chapter: string; heading: string; stdin?: string }[] = [
  { id: "fizzbuzz", label: "FizzBuzz", chapter: "01", heading: "Putting it together: FizzBuzz" },
  { id: "classes", label: "Classes and methods", chapter: "04", heading: "Methods" },
  { id: "match", label: "Enums and match", chapter: "05", heading: "match" },
  { id: "errors", label: "Errors with Result", chapter: "06", heading: "Result" },
  { id: "traits", label: "Traits", chapter: "07", heading: "Defining a trait" },
  { id: "partial", label: "Partial application", chapter: "08", heading: "Partial application" },
  { id: "tests", label: "Test cases", chapter: "11", heading: "Test cases" },
  { id: "generators", label: "Generator pipelines", chapter: "12", heading: "Pipelines" },
  { id: "channels", label: "Tasks and channels", chapter: "13", heading: "Channels" },
  { id: "threads", label: "Threads", chapter: "14", heading: "spawn and join" },
];

export const HELLO = `use io::sync::{println};

fn main() {
    println("Hello from Coil!")?;
}
`;

// Packages, the way a spool project declares them (see PLAYGROUND_PACKAGES).
const PACKAGES_TOML = `[package]
name = "inventory"
version = "0.1.0"

[dependencies]
stdlib = { git = "https://github.com/ardax-corp/coil-stdlib.git" }
csv = { git = "https://github.com/ardax-corp/coil-csv.git" }
json = { git = "https://github.com/ardax-corp/coil-json.git" }
`;

const PACKAGES_MAIN = `use io::sync::{println};
use string::{format};
use csv::{parse};
use json::{Json, JsonValue};

// Read a CSV table, then look a value up in a JSON document.
fn main() {
    let rows = parse("item,count\\napples,3\\npears,5").ok() ?? Vec::new();
    for row in rows {
        println(format("%v: %v", row[0], row[1]))?;
    }
    match Json::strict().decode_str("{\\"total\\": 8}") {
        Result::Ok(doc) => {
            let total = doc.get("total") ?? JsonValue::null();
            println(format("total from JSON: %v", total.as_int() ?? 0))?;
        },
        Result::Err(e) => {
            println(format("not valid JSON: %v", e))?;
        },
    }
}
`;

export type Example = { id: string; label: string; chapter: string; files: Record<string, string> };

export function playgroundExamples(): Example[] {
  const files = readdirSync(TUTORIAL);
  const out: Example[] = [
    { id: "hello", label: "Hello, world", chapter: "", files: { "main.hy": HELLO } },
    { id: "packages", label: "Using packages (csv, json)", chapter: "", files: { "coil.toml": PACKAGES_TOML, "main.hy": PACKAGES_MAIN } },
  ];
  for (const pick of PICKS) {
    const name = files.find((f) => f.startsWith(`${pick.chapter}-`))!;
    const text = readFileSync(join(TUTORIAL, name), "utf8");
    const at = text.search(new RegExp(`^#+ ${pick.heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`, "m"));
    if (at < 0) throw new Error(`playground example ${pick.id}: no heading "${pick.heading}" in ${name}`);
    const re = /^```coil([^\n]*)\n([\s\S]*?)\n```/gm;
    re.lastIndex = at;
    let m;
    while ((m = re.exec(text)) && parseInfo(m[1]).mode !== "run");
    if (!m) throw new Error(`playground example ${pick.id}: no runnable block after "${pick.heading}"`);
    out.push({
      id: pick.id,
      label: pick.label,
      chapter: `/docs/manual/tutorial/${name.replace(/\.md$/, "")}`,
      files: { "main.hy": `${m[2]}\n` },
    });
  }
  return out;
}
