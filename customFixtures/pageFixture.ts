import { test as myTest } from "@playwright/test"; 
import LoginPage from "../PageObjects/login";
import RegisterPage from "../PageObjects/register";
import path from "path";
import { chromium } from "@playwright/test";

const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright test Build',
      'name': 'Playwright test Test',
      'user': "sumeet.raikwar",
      'accessKey': "67Y2uoiXlATIlxbTjKAQt03tMb1MEyhW3bA2VD58TYGjRu6mUm",
      'network': true,
      'video': true,
      'console': true
    }
  }
  
const modifyCapabilities = (configName, testName) => {
    let config = configName.split("@lambdatest")[0];
    let [browserName, browserVersion, platform] = config.split(":");
    capabilities.browserName = browserName
      ? browserName
      : capabilities.browserName;
    capabilities.browserVersion = browserVersion
      ? browserVersion
      : capabilities.browserVersion;
    capabilities["LT:Options"]["platform"] = platform
      ? platform
      : capabilities["LT:Options"]["platform"];
    capabilities["LT:Options"]["name"] = testName;
  };

type pages = {
    registerPage : RegisterPage,
    loginPage  : LoginPage
}

const testPages = myTest.extend<pages>({

    page :async ({}, use, testInfo) => {
        let fileName = testInfo.file.split(path.sep).pop();
        if (testInfo.project.name.match(/lambdatest/)) {
          modifyCapabilities(
            testInfo.project.name,
            `${testInfo.title} - ${fileName}`
          );

        const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`);
        const context = await browser.newContext(testInfo.project.use);
        const ltPage = await context.newPage()
        await use(ltPage)

        const testStatus = {
            action: "setTestStatus",
            arguments: {
              status: testInfo.status,
              remark: testInfo.error?.stack || testInfo.error?.message,
            },
          };

          await ltPage.evaluate(() => {},
        `lambdatest_action: ${JSON.stringify(testStatus)}`);
        await ltPage.close()
        await context.close()
        await browser.close()
        
    }

    else{
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage()
        await use(page)
        await page.close()
        await context.close()
        await browser.close()

    }
},
    registerPage : async ({page}, use) => {
        await use(new RegisterPage(page))
    },

    loginPage : async ({page}, use) => {
        await use(new LoginPage(page))
    }

})

export const test = testPages


