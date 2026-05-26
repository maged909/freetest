import { Resvg } from '@resvg/resvg-js';
import pngToIco from 'png-to-ico';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgData = readFileSync(join(__dirname, 'icon.svg'), 'utf-8');

function renderPng(size) {
  const resvg = new Resvg(svgData, {
    fitTo: { mode: 'width', value: size },
  });
  return resvg.render().asPng();
}

// Linux PNG sizes
const linuxSizes = [16, 32, 48, 64, 128, 256, 512, 1024];
const linuxDir = join(__dirname, 'linux', 'freeter-icons');
mkdirSync(linuxDir, { recursive: true });

const pngCache = {};
for (const size of linuxSizes) {
  const png = renderPng(size);
  pngCache[size] = png;
  writeFileSync(join(linuxDir, `${size}x${size}.png`), png);
  console.log(`✓ linux ${size}x${size}.png`);
}

// Tray icon (used in main process)
const trayDir = join(__dirname, '..', 'src', 'assets', 'app-icons');
mkdirSync(trayDir, { recursive: true });
writeFileSync(join(trayDir, '16.png'), pngCache[16]);
writeFileSync(join(trayDir, '256.png'), pngCache[256]);
console.log('✓ src/assets/app-icons/16.png + 256.png');

// Windows ICO (multi-size: 16, 32, 48, 256)
const icoSizes = [16, 32, 48, 256];
const icoPngs = icoSizes.map(s => pngCache[s] ?? renderPng(s));
const icoBuffer = await pngToIco(icoPngs);
writeFileSync(join(__dirname, 'win32', 'freeter.ico'), icoBuffer);
console.log('✓ win32/freeter.ico');

console.log('\nAll icons generated.');
