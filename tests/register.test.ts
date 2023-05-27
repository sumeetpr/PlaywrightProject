
import { test } from "../customFixtures/pageFixture";
import * as data from "../data/data.json"

test("register the user", async ({page, baseURL, registerPage, loginPage}) => {

    
    await page.goto(`${baseURL}`)

    await loginPage.hoverOnMyAccount()
    await loginPage.clickOnRegisterOption()

    await registerPage.enterFirstName(data.firstName)
    await registerPage.enterLastName(data.lastName)
    await registerPage.enterEmail(data.email)
    await registerPage.enterTelephone(data.phone)
    await registerPage.enterPassword(data.password)
    await registerPage.enterConfirmPassword(data.password)
    await registerPage.acceptTermAndConditions()
    await page.waitForTimeout(5000)
    await registerPage.clickContinue()
    await page.waitForTimeout(5000)


})

test("login the user", async ({page, baseURL, loginPage}) => {

    
    await page.goto(`${baseURL}`)

    await loginPage.hoverOnMyAccount()
    await loginPage.clickOnLoginOption()
    


})