import { test } from "@playwright/test";
import { CookiesMethods } from "../components/methods/cookiesmethods.ui";
import { HomeMethods } from "../components/methods/homemethods.ui";
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

        const homemethods = new HomeMethods(page);
        await homemethods.clickonLogo();
        await homemethods.clickonAboutUsBtn();
        await homemethods.clickonWhyChamSports();
        await homemethods.clickonLogo();
        await homemethods.clickonProductBtn();
        await homemethods.clickOnNewsBtn();
        await homemethods.clickonCareersBtn();
        await homemethods.clickonContactUsBtn();
        await homemethods.clickonEnglishBtn();
        await homemethods.clickonLogo();
    });
}); 