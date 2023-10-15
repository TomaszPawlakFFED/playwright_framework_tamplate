import { test as base } from '@playwright/test';
import * as PageTypes from './pageTypes';
import * as pages from './pages';

type Pages = {
    loginPage: PageTypes.LoginPageType;
    homePage: PageTypes.HomePageType;
    myAccountPage: PageTypes.MyAccountPage;
    headerComponent: PageTypes.HeaderComponent;
};

//Notatka: Średnio ogarniam co tutaj się dzieje. Chciałbym to przegadać.
export const test = base.extend<Pages>({
    loginPage: async ({ page }, use) => {
        await use(pages.LoginPage(page));
    },
    async homePage({ page }, use) {
        await use(pages.HomePage(page));
    },
    async myAccountPage({ page }, use) {
        await use(pages.MyAccountPage(page));
    },
    async headerComponent({ page }, use) {
        await use(pages.HeaderComponent(page));
    },
});

export { expect } from '@playwright/test';
