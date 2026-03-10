// Downloads images from cache.json, saves to images-articles/ with slugified titles
// Utilizes github lfs to store images in the repo without bloating it

const https = require("https");
const fs = require("fs");
const path = require("path");

const items = JSON.parse(fs.readFileSync("cache.txt", "utf8"));
const outDir = "images-articles";
fs.mkdirSync(outDir);

items.forEach(({ title, image }) => {
  const ext = path.extname(image);

  // only keep letters and numbers, replace the rest with dashes
  const filename = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + ext;
  const dest = path.join(outDir, filename);
  https.get(image, (res) => res.pipe(fs.createWriteStream(dest)));
});