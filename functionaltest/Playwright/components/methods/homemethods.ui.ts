import { Page } from "@playwright/test"
import { HomeLocators } from "../locators/homelocators.ui";
export class HomeMethods {
    readonly homelocators: HomeLocators;

    constructor(page: Page) {
        this.homelocators = new HomeLocators(page);
    }

    async clickonLogo() {
        await this.homelocators.logo.click();
    }

    async clickonAboutUsBtn() {
        await this.homelocators.aboutus.click();
    }

    async clickonWhyChamSports() {
        await this.homelocators.whychamsports.click();
    }

    async clickonProductBtn() {
        const producttext = await this.homelocators.products.innerText();
        console.log(producttext);
    }

    async clickOnNewsBtn() {
        await this.homelocators.newsbtn.click();
    }

    async clickonCareersBtn() {
        await this.homelocators.careers.click();
    }

    async clickonContactUsBtn() {
        await this.homelocators.contactus.click();
    }

    async clickonEnglishBtn() {
        await this.homelocators.language.click();
    }
}