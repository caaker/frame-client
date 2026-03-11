const https = require("https");
const fs = require("fs");
const path = require("path");

const inputPath = path.join("_dist", "cache.txt");
const items = JSON.parse(fs.readFileSync(inputPath, "utf8"));

fs.mkdirSync("_dist/images-articles", { recursive: true });

// loop through each json entry
items.forEach(({ title, image }) => {

  // only keep letters and numbers and replace the rest with dashes for the filename
  const filename = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + path.extname(image);
  const outputPath = path.join("_dist/images-articles", filename);
  
  // get the image and save it to the output
  https.get(image, (res) => res.pipe(fs.createWriteStream(outputPath)));
});
