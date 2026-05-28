import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = [
  'public/images/hero.png',
  'public/images/about.png',
  'public/logo.png'
];

async function optimizeImages() {
  for (const img of images) {
    if (fs.existsSync(img)) {
      const ext = path.extname(img);
      const webpPath = img.replace(ext, '.webp');
      
      console.log(`Optimizing ${img}...`);
      await sharp(img)
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      console.log(`Created ${webpPath}`);
    }
  }
}

optimizeImages().catch(console.error);
