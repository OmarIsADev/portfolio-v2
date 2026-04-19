import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const TARGET_DIR = process.argv[2] || "src/assets";

async function convertToWebp(dir: string) {
  try {
    const files = await fs.readdir(dir, { withFileTypes: true });

    for (const file of files) {
      const fullPath = path.join(dir, file.name);

      if (file.isDirectory()) {
        await convertToWebp(fullPath);
      } else if (file.isFile()) {
        const ext = path.extname(file.name).toLowerCase();
        if ([".jpg", ".jpeg", ".png"].includes(ext)) {
          const nameWithoutExt = path.basename(file.name, ext);
          const webpPath = path.join(dir, `${nameWithoutExt}.webp`);

          try {
            await fs.access(webpPath);
            console.log(`Skipping ${file.name}, WebP already exists.`);
          } catch {
            console.log(`Converting ${fullPath} to WebP...`);
            await sharp(fullPath).webp({ quality: 80 }).toFile(webpPath);
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error);
  }
}

async function main() {
  const rootDir = path.resolve(process.cwd(), TARGET_DIR);
  console.log(`Scanning ${rootDir} for images...`);

  await convertToWebp(rootDir);

  console.log("Done converting!");
}

main();
