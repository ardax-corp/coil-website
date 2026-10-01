// Syntax themes for code blocks. Copper for keywords, verdigris (oxidized
// copper) for types, so highlighted code matches the site palette.

type Palette = {
  bg: string;
  fg: string;
  comment: string;
  keyword: string;
  fn: string;
  type: string;
  string: string;
  number: string;
  operator: string;
  attribute: string;
};

function theme(name: string, type: "light" | "dark", c: Palette) {
  return {
    name,
    type,
    colors: {
      "editor.background": c.bg,
      "editor.foreground": c.fg,
    },
    tokenColors: [
      { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: c.comment, fontStyle: "italic" } },
      {
        scope: ["keyword", "storage.type", "storage.modifier", "keyword.control", "keyword.other"],
        settings: { foreground: c.keyword },
      },
      {
        scope: ["keyword.operator", "punctuation.separator.namespace", "punctuation.accessor"],
        settings: { foreground: c.operator },
      },
      {
        scope: ["keyword.operator.question", "keyword.operator.arrow"],
        settings: { foreground: c.keyword },
      },
      {
        scope: ["entity.name.function", "support.function", "meta.function-call", "entity.name.command"],
        settings: { foreground: c.fn },
      },
      {
        scope: [
          "entity.name.type",
          "entity.name.namespace",
          "support.type",
          "support.class",
          "entity.name.class",
          "storage.type.primitive",
        ],
        settings: { foreground: c.type },
      },
      {
        scope: ["string", "string.quoted", "punctuation.definition.string"],
        settings: { foreground: c.string },
      },
      {
        scope: ["constant.numeric", "constant.language", "constant.other", "constant.character"],
        settings: { foreground: c.number },
      },
      { scope: ["constant.other.placeholder", "constant.character.escape"], settings: { foreground: c.keyword } },
      {
        scope: ["meta.attribute", "entity.name.function.attribute", "punctuation.definition.attribute", "entity.name.tag"],
        settings: { foreground: c.attribute },
      },
      { scope: ["variable.parameter", "variable.other"], settings: { foreground: c.fg } },
      { scope: ["support.type.property-name", "entity.other.attribute-name"], settings: { foreground: c.type } },
    ],
  };
}

export const coilDark = theme("coil-dark", "dark", {
  bg: "#16130f",
  fg: "#e9e2d4",
  comment: "#7d7466",
  keyword: "#eb8a52",
  fn: "#f1cf94",
  type: "#7fc8b6",
  string: "#bfd08a",
  number: "#d9a0d0",
  operator: "#b8aa95",
  attribute: "#ac9ee0",
});

export const coilLight = theme("coil-light", "light", {
  bg: "#f7f3ec",
  fg: "#28231c",
  comment: "#8d8474",
  keyword: "#b14b12",
  fn: "#8a5800",
  type: "#1f7565",
  string: "#53771b",
  number: "#9b3a8d",
  operator: "#6d6050",
  attribute: "#634fb0",
});
