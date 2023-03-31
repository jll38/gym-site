// Import necessary modules and functions
const { defineConfig, devices } = require('@playwright/test');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Define the configuration object for the Playwright test runner
module.exports = defineConfig({
  testDir: path.join(__dirname, './tests'),
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',

  // Define shared settings for all projects
  use: {
    baseURL: process.env.DEFAULT_SITE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    video: 'on',
    timeout: 30000, // Global timeout for tests (in milliseconds)
  },

  // Define the projects to run, each with its own settings
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
      },
      outputDir: path.join(__dirname, 'reports', 'desktop-chrome'),
    },
    {
      name: 'Mobile iPhone 12',
      use: {
        ...devices['iPhone 12'],
        browserName: 'webkit',
      },
      outputDir: path.join(__dirname, 'reports', 'mobile-iphone-12'),
    },
  ],

  // Specify the local development server to run before the tests
  webServer: {
    command: 'next dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },

  // Specify the directory to save the test report files
  reporterOptions: {
    html: ({ testInfo }) => {
      const testTitlePath = testInfo.titlePath().join(' - ').replace(/[\s"'<>|]/g, '_');
      const pagePath = testInfo.annotations.find(({ type }) => type === 'page').value.path;
      const reportPath = path.join(__dirname, 'reports', pagePath, testInfo.project.name, testTitlePath, 'report.html');
      return reportPath;
    },
    junit: ({ result }) => path.join(__dirname, `reports/playwright/${result.testFile.replace(/\.js$/, '.xml')}`),

    // Add video report option
    video: ({ outputDir, testInfo }) => {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const testTitlePath = testInfo.titlePath().join(' - ').replace(/[\s"'<>|]/g, '_');
      const pagePath = testInfo.annotations.find(({ type }) => type === 'page').value.path;
      const reportPath = path.join(outputDir, pagePath, testInfo.project.name, testTitlePath, timestamp, 'video.webm');
      console.log(`Video report path: ${reportPath}`);
      return reportPath;
    },
  },
});
