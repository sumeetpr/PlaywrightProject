import { test } from "@playwright/test";

test("handle single select dropdown", async ({page})=>{

await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")

await page.selectOption("#select-demo", {

label : "Sunday"

})

await page.waitForTimeout(5000);

})

test("handle multi select dropdown", async ({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    
    await page.selectOption("#multi-select", [
        {
            label : "Texas"
        },

        {
            index : 2
        },

        {
            value : "Pennsylvania"
        }

    ])
    
    await page.waitForTimeout(5000);
    
    })

    test("handle Bootstap drop down", async ({page})=>{

        await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
        
        await page.locator("#country+span").click();

        await page.locator("ul#select2-country-results")
        .locator("li",{
            hasText : "India"
        }).click()
       
        
        await page.waitForTimeout(5000);
        
        })