const fs = require("fs/promises");
const path = require("path");
const inputPath = path.join("_public-vite", "cache.txt");
const items = JSON.parse(await fs.readFile(inputPath, "utf8"));

items.forEach(async ({ title, image }) => {
  const filename = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + path.extname(image);
  const outputPath = path.join("_public-vite/images-articles", filename);
  const res = await fetch(image);
  if (res.ok) await fs.writeFile(outputPath, res.body);
});
