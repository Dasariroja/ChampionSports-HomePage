import { Locator, Page } from "@playwright/test"

export class HomeLocators {
    readonly logo: Locator;
    readonly aboutus: Locator;
    readonly whychamsports: Locator;
    readonly products: Locator;
    readonly newsbtn: Locator;
    readonly careers: Locator;
    readonly contactus:Locator;
    readonly language:Locator;

    constructor(page: Page) {
        this.logo = page.locator('img').first();
        this.aboutus = page.getByText('about us').first();
        this.whychamsports = page.getByText('why champion sports').first();
        this.products = page.getByText('products').first();
        this.newsbtn = page.getByText('news & events', { exact: true });
        this.careers = page.getByText('careers').first();
        this.contactus = page.locator('#app').getByText('contact us', { exact: true });
        this.language =page.locator('div').filter({ hasText: /^English$/ }).nth(1);
    }
}