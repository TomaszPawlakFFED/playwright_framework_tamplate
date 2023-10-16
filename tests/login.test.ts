import { user } from '../test-data/users.data';
import { dictionary } from '../dictionary';
import { test, expect } from './playwrightTest'

test.describe('Login tests', () => {
    const { email, password } = user;
    const { myAccount, login } = dictionary;

    test.beforeEach(async ({ homePage, headerComponent }) => {
        await homePage.goToHomePage();
        await headerComponent.clickSignInButton();
    });

    test('Successful login with valid credentials', async ({ page, loginPage, myAccountPage }) => {
        await loginPage.singInUser(email, password);
        await expect.soft(page).toHaveTitle(myAccount.title);
        await expect.soft(myAccountPage.$el.pageHeader).toHaveText(myAccount.header);
        await expect.soft(myAccountPage.$el.pageInfoAccount).toHaveText(myAccount.infoAccount);
    });

    test('Unsuccessful login with incorrect email', async ({ loginPage }) => {
        await loginPage.singInUser("incorrect@email.com", password);
        await expect.soft(loginPage.$el.errorMsgHeader).toHaveText(login.errorMsgs.msgHeaders);
        await expect.soft(loginPage.$el.errorMsgParagraph).toHaveText(login.errorMsgs.msgParagraphs.incorrectEmailMsg);
    });

    test('Unsuccessful login with missing email', async ({ loginPage }) => {
        await loginPage.singInUser("", password);
        await expect.soft(loginPage.$el.errorMsgHeader).toHaveText(login.errorMsgs.msgHeaders);
        await expect.soft(loginPage.$el.errorMsgParagraph).toHaveText(login.errorMsgs.msgParagraphs.missingEmailMsg);
    });

    test('Unsuccessful login with missing password', async ({ loginPage }) => {
        await loginPage.singInUser(email, "");
        await expect.soft(loginPage.$el.errorMsgHeader).toHaveText(login.errorMsgs.msgHeaders);
        await expect.soft(loginPage.$el.errorMsgParagraph).toHaveText(login.errorMsgs.msgParagraphs.missingPasswordMsg);
    });

    test('Unsuccessful login with incorrect password', async ({ loginPage }) => {
        await loginPage.singInUser(email, "incorrectPassword");
        await expect.soft(loginPage.$el.errorMsgHeader).toHaveText(login.errorMsgs.msgHeaders);
        await expect.soft(loginPage.$el.errorMsgParagraph).toHaveText(login.errorMsgs.msgParagraphs.incorrectPasswordMsg);
    });
});
