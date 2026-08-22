import fs from 'node:fs/promises';
import path from 'node:path';

// read the cache.txt and create a JS Obect using JSON.parse
const inputPath = path.join(process.cwd(), "_public-vite", "cache.txt");
const items = JSON.parse( await fs.readFile(inputPath, "utf8"));
let ok = true;

// fetch the images in the object and save them to _public-vite/_images-lfs
for (const { title, image } of items) {
  try {
    const filename = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + path.extname(image);
    const outputPath = path.join(process.cwd(), "_public-vite", "_images-lfs", filename);   
    const res = await fetch(image);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await fs.writeFile(outputPath, res.body);
  } catch (err) {
    ok = false;
    console.error(`Error at: "${title}": ${err.message}`);
  }
}
if (ok) console.log("success");

