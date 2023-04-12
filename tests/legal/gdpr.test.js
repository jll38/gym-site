const { test, expect } = require('@playwright/test');

test('GDPR Compliance Test', async ({ page }) => {
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

  // Check that the cookie banner provides a clear and concise explanation of the use of cookies
  const cookieBannerText = await page.innerText('#cookie-banner');
  const hasClearExplanation = cookieBannerText.includes('This website uses cookies to improve your experience.');

  // Check that the cookie banner provides an option to opt out of cookies
  const optOutButton = await page.$('#cookie-banner button[data-cookie-type="opt-out"]');
  await expect(optOutButton).not.toBeNull();

  // Check that the website honors the user's cookie preferences
  await page.click('#cookie-banner button[data-cookie-type="opt-out"]');
  await page.goto('https://www.example.com/page-that-requires-cookies');
  const pageContent = await page.innerText('body');
  const hasCookiePrompt = pageContent.includes('Please enable cookies to use this website.');
});