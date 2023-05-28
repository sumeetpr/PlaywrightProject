import { test } from "../customFixtures/pageFixture";
import moment from "moment";

test("handle date picker with simply using fill method", async ({page}) => {

await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
// await page.click("input[placeholder='Start date'")
await page.locator("#birthday").fill("2023-05-30")
await page.waitForTimeout(5000)

}
)

test("handle date picker using calender", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
    await page.click("//input[@placeholder='Start date'][1]")
    
    const ddYYToSelect = "December 2023"
    const day = 4;
    const ddYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]")
    const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]")
    const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]")

    const day1 = page.locator("//td[@class='day'][text()=4]")
    const isBefore = moment(ddYYToSelect, "MMMM YYYY").isBefore();
    const currDDYY = await ddYY.textContent();

    while(await ddYY.textContent()!=ddYYToSelect){

        if(isBefore){
            await prev.click()
        }
        else(
            await next.click()
        )

    }
    await day1.click();

    await page.waitForTimeout(5000)
    
    }
    )