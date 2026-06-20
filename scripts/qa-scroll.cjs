const { chromium } = require('playwright');

const BASE = 'http://localhost:8080';
const pages = [
  '/', '/products', '/products/sports-icons-1113', '/about',
  '/cities-we-serve', '/catalog', '/contact',
];

async function scrollThrough(page) {
  for (let i = 0; i < 40; i++) {
    await page.mouse.wheel(0, 250);
    await page.waitForTimeout(90);
  }
  await page.waitForTimeout(400);
}

(async () => {
  const browser = await chromium.launch();

  for (const path of pages) {
    try {
      const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
      await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 20000 });
      await page.waitForTimeout(500);
      await scrollThrough(page);

      const lowOpacity = await page.evaluate(() => {
        const all = document.querySelectorAll('section *');
        let count = 0;
        for (const el of all) {
          const op = parseFloat(window.getComputedStyle(el).opacity);
          if (op < 0.95 && el.offsetParent !== null) {
            const rect = el.getBoundingClientRect();
            if (rect.width > 20 && rect.height > 20) count++;
          }
        }
        return count;
      });

      const name = path === '/' ? 'home' : path.replace(/\//g, '-').slice(1);
      await page.screenshot({ path: `/tmp/shots/qa-${name}.png`, fullPage: true, timeout: 60000 });
      console.log(`${path} -> low-opacity elements after scroll-through: ${lowOpacity}`);
      await page.close();
    } catch (e) {
      console.log(`${path} -> FAILED: ${e.message.split('\n')[0]}`);
    }
  }

  await browser.close();
})();
