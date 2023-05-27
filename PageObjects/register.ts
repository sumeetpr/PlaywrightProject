import { Page } from "@playwright/test";

export default class RegisterPage {

readonly page : Page

    constructor(page : Page){
        this.page = page
    }

private get firstName(){
    return this.page.locator("input[name='firstname']")
}

private get LastName(){
    return this.page.locator("input[name='lastname']")
}

private get email(){
    return this.page.locator("input[type='email']")
}

private get telephone(){
    return this.page.locator("input[type='tel']")
}

private get password(){
    return this.page.locator("input[name='password']")
}

private get confirmPassword(){
    return this.page.locator("input[name='confirm']")
}

private get newsLetterSubcribe(){
    return this.page.locator("label[for='input-newsletter-no']")
}

private get termCondition(){
    return this.page.locator("label[for='input-agree']")
}

private get continue(){
    return this.page.locator("input[type='submit']")
}

async enterFirstName(firstName : string) {
    await this.firstName.fill(firstName)
}

async enterLastName(lastName : string) {
    await this.LastName.fill(lastName)
}

async enterEmail(email : string) {
    await this.email.fill(email)
}

async enterTelephone(telephone : string) {
    await this.telephone.fill(telephone)
}

async enterPassword(password : string) {
    await this.password.fill(password)
}

async enterConfirmPassword(password : string) {
    await this.confirmPassword.fill(password)
}

async declineNewletter(){
    await this.newsLetterSubcribe.click()
}

async acceptTermAndConditions(){
    await this.termCondition.click()
}

async clickContinue(){
    await this.continue.click()
}
}