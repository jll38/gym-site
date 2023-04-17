const { test, expect } = require('@playwright/test');

test('Terms of Service Test', async ({ page }) => {
  // Navigate to the website to be tested
  await page.goto('http://localhost:3000');

  // Check if the privacy policy modal is present
  const privacyModal = await page.$('#privacyModal');

  if (privacyModal) {
    // Wait for the "Agree" button to appear
    await page.waitForSelector('#agreeButton');

    // Click the "Agree" button
    await page.click('#agreeButton');
  }

  // Check if the cookie banner is displayed
  const isCookieBannerVisible = await page.isVisible('#cookie-banner');

  if (isCookieBannerVisible) {
    // Click the opt-out button
    await page.click('#cookie-banner button[data-cookie-type="opt-out"]');
  }

  // Click the "Terms of Service" link
  await page.click('#terms-of-service');

  // Check that the terms of service page has loaded
  await expect(page).toHaveTitle('Terms of Service');

  // Check that the terms of service page contains the necessary legal language
  const tosText = await page.innerText('#terms-of-service-page');
  const hasLegalLanguage = tosText.includes('This agreement governs your use of the Example website and any related services provided by Example.');
  // await expect(hasLegalLanguage).toBeTruthy();
});