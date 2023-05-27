import { expect, test } from "@playwright/test";

test("basic form interactions", async ({ page })=> {

    page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messgaeInput = await page.locator("input#user-message");
    expect(messgaeInput).toHaveAttribute("placeholder", "Please enter your Message");
    await messgaeInput.type("sumeet");
    expect(await messgaeInput.inputValue()).toBe("sumeet");

});

test("sum of 2 numbers", async ({ page })=> {

    page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const num1 =page.locator("#sum1");
    const num2 =page.locator("#sum2");
    const getValues =page.locator("form#gettotal>button");
    const addmessage = page.locator("#addmessage");
    await num1.type(""+123);
    await num2.type(""+345);
    await getValues.click();
    const expectedValue = 123+345;
    await addmessage.textContent();
    expect(await addmessage.textContent()).toBe(""+ expectedValue);
    
});