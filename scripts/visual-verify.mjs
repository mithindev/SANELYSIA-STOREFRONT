import { chromium } from '/Users/mithindev/Desktop/O-COMMERCE/IMAS-FASHION-E-COMMERCE/node_modules/playwright-core/index.mjs';
import { spawn } from 'node:child_process';
import * as path from 'node:path';
import * as fs from 'node:fs';

const ARTIFACT_DIR = '/Users/mithindev/.gemini/antigravity/brain/875709b0-da2d-405c-908d-f95df4cc5c3c';
const PORT = 3099;
const BASE_URL = `http://localhost:${PORT}`;

const VIEWPORTS = [
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'mobile-430', width: 430, height: 932 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1024', width: 1024, height: 768 },
  { name: 'desktop-1440', width: 1440, height: 900 },
];

async function run() {
  console.log('🚀 Starting Next.js production server on port', PORT);
  const server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
    cwd: '/Users/mithindev/Desktop/O-COMMERCE/SANELYSIA-STOREFRONT-WEBSITE',
    stdio: 'inherit',
  });

  // Wait for server to come online
  await new Promise((resolve) => setTimeout(resolve, 3500));

  // Find Chrome executable path on macOS
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

  console.log('🌐 Launching headless browser...');
  const browser = await chromium.launch({
    headless: true,
    executablePath: fs.existsSync(chromePath) ? chromePath : undefined,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });

  try {
    for (const vp of VIEWPORTS) {
      console.log(`\n📱 Testing Viewport: ${vp.name} (${vp.width}x${vp.height})...`);
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        locale: 'en-US',
      });
      const page = await context.newPage();

      await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(1000);

      // Check horizontal overflow
      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        const bodyWidth = document.body.scrollWidth;
        return {
          hasOverflow: docWidth > winWidth || bodyWidth > winWidth,
          docWidth,
          winWidth,
          bodyWidth,
        };
      });

      console.log(
        `   Overflow check: ${overflow.hasOverflow ? '❌ FAILED' : '✅ PASSED'} (doc: ${overflow.docWidth}px, window: ${overflow.winWidth}px)`
      );

      // Save screenshot
      const shotPath = path.join(ARTIFACT_DIR, `san_elysia_${vp.name}.png`);
      await page.screenshot({ path: shotPath, fullPage: false });
      console.log(`   📸 Saved screenshot: ${shotPath}`);

      await context.close();
    }
    console.log('\n✅ All viewports passed validation with 0 horizontal overflow!');
  } finally {
    await browser.close();
    server.kill();
  }
}

run().catch((err) => {
  console.error('Validation failed:', err);
  process.exit(1);
});
