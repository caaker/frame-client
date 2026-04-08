// requires node 22+
import fs from 'node:fs/promises';
import path from 'node:path';

const inputPath = path.join("_public-vite", "cache.txt");
const items = JSON.parse( await fs.readFile(inputPath, "utf8"));

for (const { title, image } of items) {
  try {
    const filename = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + path.extname(image);
    const outputPath = path.join("_images-lfs", filename);   
    const res = await fetch(image);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await fs.writeFile(outputPath, res.body);
  } catch (err) {
    console.error(`Error at: "${title}": ${err.message}`);
  }
}
