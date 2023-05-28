import { expect } from "@playwright/test";
import { test } from "../customFixtures/pageFixture";


test("handle simple alert",async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog",async (alert) => {

       const text = alert.message();
       console.log(text);
       await alert.dismiss();     
    })
    await page.locator("(//button[text()='Click Me'])").nth(0).click()
})

test("handle confirm box",async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog",async (alert) => {

       const text2 = alert.message();
       console.log(text2);
       await alert.dismiss();     
    })
    await page.locator("(//button[text()='Click Me'])").nth(1).click()
    expect(page.locator("#confirm-demo")).toContainText("Cancel!")
})

test("Java Script Alert Box",async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog",async (alert) => {

       const text1 = alert.defaultValue();
       const text2 = alert.message();
       await alert.accept("Sumeet new");
       console.log(text1);
       console.log(text2);
            
    })
    await page.locator("(//button[text()='Click Me'])").nth(2).click()
    expect(page.locator("#prompt-demo")).toContainText("Sumeet new")
})