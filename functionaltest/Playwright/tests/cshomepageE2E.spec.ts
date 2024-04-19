import { test } from "@playwright/test";
import { CookiesMethods } from "../components/methods/cookiesmethods.ui";

const url = 'https://www.championsports.net/home?id=1&lang=en';

test.describe('Three tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(url);

        const cookiesmethods = new CookiesMethods(page)
        await cookiesmethods.clickOnIAgree();
    });

    test('Navigate to champion sports', async ({ page }) => {

        await page.goto(url);
        await page.waitForTimeout(3000);

    });

}); 