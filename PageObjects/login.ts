import { Page } from "@playwright/test";

export default class LoginPage {

    readonly page : Page

    constructor(page : Page){
        this.page = page
    }

    private get myAccount(){
        return this.page.locator("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    }

    private get loginOption(){
        return this.page.locator("//span[text()[normalize-space()='Login']]")
    }

    private get registerOption() {
        return this.page.locator("//span[text()[normalize-space()='Register']]")
    }

    async hoverOnMyAccount() {
        await this.myAccount.hover();
    }

    async clickOnLoginOption(){
        await this.loginOption.click()
    }

    async clickOnRegisterOption(){
        await this.registerOption.click()
    }

}