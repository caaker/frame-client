const https = require("https");
const fs = require("fs");
const path = require("path");

const items = JSON.parse(fs.readFileSync("cache.txt", "utf8"));
const outDir = "images-articles";
fs.mkdirSync(outDir);

items.forEach(({ title, image }) => {
  const ext = path.extname(image);
  const filename = title.toLowerCase().replace(/\s+/g, "-") + ext;
  const dest = path.join(outDir, filename);
  https.get(image, (res) => res.pipe(fs.createWriteStream(dest)));
});
