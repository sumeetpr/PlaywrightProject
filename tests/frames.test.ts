import { test } from "../customFixtures/pageFixture";


test(" handle frames", async ({page})=> {

await page.goto("https://letcode.in/frame")

const framelength = page.frames().length
console.log(framelength);

const firstFrame = await page.frameLocator("#firstFr");
const innerframe = await firstFrame.frameLocator("[src='innerFrame']")

await firstFrame.locator("input[name='fname']").fill("sumeet")
await innerframe.locator("input[name='email']").fill("sumeet3");
page.waitForTimeout(5000);

})