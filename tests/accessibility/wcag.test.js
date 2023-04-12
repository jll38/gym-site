
const { test, expect } = require('@playwright/test');

test('WCAG 2.1 Level AA compliance', async ({ page }) => {
  // Navigate to the web page you want to test
  await page.goto('http://localhost:3000');

  // Check that the page title is descriptive
  const title = await page.title();
  await expect(title).not.toBe('');

  // Check that all images have an alt attribute
  const images = await page.$$('img');
  for (const image of images) {
    const alt = await image.getAttribute('alt');
    await expect(alt).not.toBe('');
  }

  // Check that all form fields have labels
  const formFields = await page.$$('input, select, textarea');
  for (const field of formFields) {
    const label = await field.evaluateHandle((el) =>
      el.labels.length > 0 ? el.labels[0].textContent : ''
    );
    await expect(label).not.toBe('');
  }

  // Check that the page language is specified
  const language = await page.getAttribute('html', 'lang');
  await expect(language).not.toBe('');
});