// Genera le versioni ottimizzate delle foto: `npm run images`
// - hero ad alta risoluzione dall'originale JPG (la vecchia webp a 1920px si sgranava sugli schermi grandi)
// - miniature da 800px in una sottocartella `sm/` per mosaico e gallerie
// - ricompressione delle foto troppo pesanti
import { readdir, mkdir, stat, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Su Windows la cache di sharp tiene i file aperti e blocca la sovrascrittura
sharp.cache(false);

const root = path.resolve("public");
const galleries = path.join(root, "img_sliderhome");

async function out(src, dest, width, quality = 78) {
  await sharp(src)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(dest);
  const kb = ((await stat(dest)).size / 1024) | 0;
  console.log(`${path.relative(root, dest)}  ${kb}KB`);
}

// Hero: due tagli, schermi normali e schermi larghi
const heroSrc = path.join(root, "imgprincipal", "v2.jpg");
await out(heroSrc, path.join(root, "imgprincipal", "serra-1600.webp"), 1600, 80);
await out(heroSrc, path.join(root, "imgprincipal", "serra-3000.webp"), 3000, 76);

const chiSiamoSrc = path.join(root, "imgprincipal", "background_atta.webp");
await out(chiSiamoSrc, path.join(root, "imgprincipal", "eriche-1200.webp"), 1200, 80);

for (const dir of await readdir(galleries)) {
  const full = path.join(galleries, dir);
  if (!(await stat(full)).isDirectory()) continue;
  await mkdir(path.join(full, "sm"), { recursive: true });

  for (const file of await readdir(full)) {
    if (!file.endsWith(".webp")) continue;
    const src = path.join(full, file);
    await out(src, path.join(full, "sm", file), 800, 72);

    // Le foto oltre 1,5MB (es. ulivi2 a 4000px) vengono riportate a 2400px
    if ((await stat(src)).size > 1.5 * 1024 * 1024) {
      const buf = await sharp(await readFile(src)).resize({ width: 2400 }).webp({ quality: 78 }).toBuffer();
      await writeFile(src, buf);
      console.log(`${path.relative(root, src)}  ricompressa ${(buf.length / 1024) | 0}KB`);
    }
  }
}
