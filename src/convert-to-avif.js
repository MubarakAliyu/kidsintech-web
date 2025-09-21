const sharp = require("sharp");
const fg = require("fast-glob");
const path = require("path");
const fs = require("fs");

const inputDir = "./public/assets/images";
const supportedExts = [".jpg", ".jpeg", ".png"];

async function convertImages() {
  const files = await fg(`${inputDir}/**/*.{jpg,jpeg,png}`);

  for (const file of files) {
    const ext = path.extname(file);
    const outputFile = file.replace(ext, ".avif");

    await sharp(file).avif({ quality: 50 }).toFile(outputFile);

    console.log(`✅ ${file} → ${outputFile}`);
  }
}

convertImages();
