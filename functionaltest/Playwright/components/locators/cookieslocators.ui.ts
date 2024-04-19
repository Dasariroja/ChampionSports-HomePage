import { Locator, Page } from "@playwright/test"

export class CookiesLocators {
    readonly agreebtn: Locator;

    constructor(page: Page) {
        this.agreebtn = page.getByText('i agree');
    }
}