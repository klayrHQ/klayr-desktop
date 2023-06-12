import { setWorldConstructor } from '@cucumber/cucumber';
import playwright from 'playwright';

class CustomWorld {
  async openUrl(path) {
    this.pageBaseUrl = process.env.PW_BASE_URL;

    const browser = await playwright.chromium.launch({
      headless: true,
    });
    const context = await browser.newContext();

    this.page = await context.newPage();
    this.page.waitForTimeout(7000);
    await this.page.goto(`${this.pageBaseUrl}${path}`);
  }
}

setWorldConstructor(CustomWorld);
