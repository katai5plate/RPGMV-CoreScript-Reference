const fs = require("fs");
const prettier = require("prettier");

const markdowns = [
  "./docs/index.md",
  ...fs.readdirSync("./docs/jsdoc").map((path) => `./docs/jsdoc/${path}`),
];

markdowns.forEach((path) => {
  const file = fs.readFileSync(path, { encoding: "utf-8" });
  const beautified = prettier.format(file, { parser: "markdown" });
  fs.writeFileSync(path, beautified);
});
