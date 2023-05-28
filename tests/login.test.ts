// import { chromium, test } from "@playwright/test";

// const capabilities = {
//     'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
//     'browserVersion': 'latest',
//     'LT:Options': {
//       'platform': 'Windows 10',
//       'build': 'Playwright test Build',
//       'name': 'Playwright test Test',
//       'user': "sumeet.raikwar",
//       'accessKey': "67Y2uoiXlATIlxbTjKAQt03tMb1MEyhW3bA2VD58TYGjRu6mUm",
//       'network': true,
//       'video': true,
//       'console': true
//     }
//   }

// test("login test demo", async() => {

//     const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`);
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     await page.goto("https://ecommerce-playground.lambdatest.io/");
//     await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
//     await page.click("text=Login");

//     await page.fill("input[id='input-email']", "sumeet.raikwar@gmail.com");
//     await page.fill("input[id='input-password']", "pass124$");
//     await page.click("input[value='Login']");
//     await page.waitForTimeout(5000);
//     const page1 = await context.newPage();
//     await page1.goto("https://ecommerce-playground.lambdatest.io/");
//     await page1.waitForTimeout(1000);
//     await page.close()
//     await context.close()
//     await browser.close()


// }

// )