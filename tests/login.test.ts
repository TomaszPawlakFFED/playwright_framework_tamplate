import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { MyAccountPage } from '../pages/myAccount.page';
import { HeaderComponent } from '../components/header.components';
import { user } from '../test-data/users.data';
import { dictionary } from '../dictionary';

test.describe('Login tests', () => {
    let loginPage: any;
    const { email, password } = user;
    const { myAccount, login } = dictionary;

    test.beforeEach(async ({ page }) => {

        const homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        const header = new HeaderComponent(page);

        await homePage.goToHomePage();
        await header.clickSignInButton();
    });

    test('Successful login with valid credentials', async ({ page }) => {
        loginPage = new LoginPage(page);
        const myAccountPage = new MyAccountPage(page);

        await loginPage.singInUser(email, password);
        await expect.soft(page).toHaveTitle(myAccount.title);
        await expect.soft(myAccountPage.pageHeader).toHaveText(myAccount.header);
        await expect.soft(myAccountPage.pageInfoAccount).toHaveText(myAccount.infoAccount);
    });

    test('Unsuccessful login with incorrect email', async ({ page }) => {
        loginPage = new LoginPage(page);

        await loginPage.singInUser("incorrect@email.com", password);
        await expect.soft(loginPage.errorMsgHeader).toHaveText(login.errorMsgs.msgHeaders);
        await expect.soft(loginPage.errorMsgParagraph).toHaveText(login.errorMsgs.msgParagraphs.incorrectEmailMsg);
    });

    test('Unsuccessful login with missing email', async ({ page }) => {
        loginPage = new LoginPage(page);

        await loginPage.singInUser("", password);
        await expect.soft(loginPage.errorMsgHeader).toHaveText(login.errorMsgs.msgHeaders);
        await expect.soft(loginPage.errorMsgParagraph).toHaveText(login.errorMsgs.msgParagraphs.missingEmailMsg);
    });

    test('Unsuccessful login with missing password', async ({ page }) => {
        loginPage = new LoginPage(page);

        await loginPage.singInUser(email, "");
        await expect.soft(loginPage.errorMsgHeader).toHaveText(login.errorMsgs.msgHeaders);
        await expect.soft(loginPage.errorMsgParagraph).toHaveText(login.errorMsgs.msgParagraphs.missingPasswordMsg);
    });

    test('Unsuccessful login with incorrect password', async ({ page }) => {
        loginPage = new LoginPage(page);

        await loginPage.singInUser(email, "incorrectPassword");
        await expect.soft(loginPage.errorMsgHeader).toHaveText(login.errorMsgs.msgHeaders);
        await expect.soft(loginPage.errorMsgParagraph).toHaveText(login.errorMsgs.msgParagraphs.incorrectPasswordMsg);
    });
});
