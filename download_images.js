
// Downloads images from cache.txt, saves to images-articles/ with slugified titles
// Utilizes github lfs to store image references in the repo and not the entire file

const https = require("https");
const fs = require("fs");
const path = require("path");

const items = JSON.parse(fs.readFileSync("cache.txt", "utf8"));
const outDir = "images-articles";

fs.mkdirSync('images-articles', { recursive: true });

items.forEach(({ title, image }) => {
  const ext = path.extname(image);

  // only keep letters and numbers, replace the rest with dashes
  const filename = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + ext;
  const dest = path.join(outDir, filename);
  https.get(image, (res) => res.pipe(fs.createWriteStream(dest)));
});
