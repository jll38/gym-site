const { test, expect } = require('@playwright/test');

test('W3C validation', async ({ page }) => {
  // Navigate to the web page you want to test
  await page.goto('https://www.example.com');

  // Check whether the page is valid HTML using the W3C validator
  const response = await page.goto('https://validator.nu/?out=json', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    },
    body: await page.content()
  });
  const validationResult = await response.text();
  // const errorCount = validationResult.messages.filter(message => message.type === 'error').length;
  const errorCount = (validationResult.includes('error') ? 1 : 0);
  await expect(errorCount).toBe(0);
});