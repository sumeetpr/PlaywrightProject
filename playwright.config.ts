import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

// const capabilities = {
//   'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
//   'browserVersion': 'latest',
//   'LT:Options': {
//     'platform': 'Windows 10',
//     'build': 'Playwright test Build',
//     'name': 'Playwright test Test',
//     'user': "sumeet.raikwar",
//     'accessKey': "67Y2uoiXlATIlxbTjKAQt03tMb1MEyhW3bA2VD58TYGjRu6mUm",
//     'network': true,
//     'video': true,
//     'console': true
//   }
// }
export default defineConfig({

  projects : [
    {
      name: "chrome:latest:MacOS Ventura@lambdatest",
      use: {
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: "chrome:latest:Windows 10@lambdatest",
      use: {
        viewport: { width: 1280, height: 720 },
      },
    },

  ],

  testMatch : ['tests/alert.test.ts'],

  use: {
    // connectOptions : {
    //   wsEndpoint : `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    // },
    baseURL : "https://ecommerce-playground.lambdatest.io/",
    headless : false,
    screenshot : "only-on-failure",
    video : "on"
  },

  reporter : [['dot'], ['json', {
    outputFile : 'jsonReports/jsonReport.json'
  }], ['html', {
    open : "never"
  }]]

  
  
  });

