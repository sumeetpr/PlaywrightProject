
import { Page } from "@playwright/test";
import { test } from "../customFixtures/pageFixture";

let facebookPage : Page;
test("handle single window popup", async ({page})=> {

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")

    const  [newWindow] = await Promise.all([

        page.waitForEvent("popup"),
        page.click("a[title='Follow @Lambdatesting on Twitter']")
        
    ])

    console.log(newWindow.url)
})


test("handle multi window popup", async ({page})=> {

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")

    const  [newWindow] = await Promise.all([

        page.waitForEvent("popup"),
        page.click("#followboth")
        
    ])
   
    console.log(newWindow.url)

    const pages = page.context().pages();
    await page.waitForLoadState();
    
    for (let index = 0; index < pages.length; index++) {
        const p = pages[index];
        if(p.url() == "https://www.facebook.com/lambdatest/"){
            facebookPage = p;
        }
        
    }

    console.log(facebookPage.url)
    await page.waitForTimeout(5000);
    
})