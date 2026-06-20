const { chromium } = require('playwright');

const BASE = 'http://localhost:8080';
const pages = [
  { path: '/', name: 'home-top' },
  { path: '/products', name: 'products' },
  { path: '/products/sports-icons-1113', name: 'product-detail' },
  { path: '/about', name: 'about' },
  { path: '/cities-we-serve', name: 'cities' },
  { path: '/catalog', name: 'catalog' },
  { path: '/contact', name: 'contact' },
];

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();

  page.on('console', (msg) => {
    if (msg.type() === 'error') console.log('CONSOLE ERROR:', msg.text());
  });
  page.on('pageerror', (err) => console.log('PAGE ERROR:', err.message));

  for (const p of pages) {
    try {
      await page.goto(BASE + p.path, { waitUntil: 'networkidle', timeout: 20000 });
      await page.waitForTimeout(1200); // allow animations/3d to settle
      await page.screenshot({ path: `/tmp/shots/${p.name}.png`, fullPage: p.path !== '/' });
      console.log('OK:', p.path);
    } catch (e) {
      console.log('FAILED:', p.path, e.message);
    }
  }

  // Mobile shot of home
  const mobileCtx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mobilePage = await mobileCtx.newPage();
  await mobilePage.goto(BASE + '/', { waitUntil: 'networkidle', timeout: 20000 });
  await mobilePage.waitForTimeout(1200);
  await mobilePage.screenshot({ path: '/tmp/shots/home-mobile.png' });
  console.log('OK: mobile home');

  // Inquiry modal open
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.locator('.navbar-actions button').first().click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: '/tmp/shots/inquiry-modal.png' });
  console.log('OK: inquiry modal');

  await browser.close();
})();
