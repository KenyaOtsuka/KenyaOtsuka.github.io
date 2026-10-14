// Renders scripts/og-template.html to public/og.png (1200x630).
// Usage: node scripts/og.mjs   (needs Playwright with Chromium available)
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.goto('file://' + join(here, 'og-template.html'), { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: join(here, '..', 'public', 'og.png'), type: 'png' });
await browser.close();
console.log('wrote public/og.png');
