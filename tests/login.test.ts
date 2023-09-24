import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { MyAccountPage } from '../pages/myAccount.page';
import { HeaderComponent } from '../components/header.components';
import { userCredentials } from '../test-data/users.data';

test.describe('Login tests', () => {
    let loginPage: any;

    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        const header = new HeaderComponent(page);

        await homePage.goToHomePage();
        await header.clickSignInButton();
    });

    test('Successful login with valid credentials', async ({ page }) => {
        loginPage = new LoginPage(page);
        const myAccount = new MyAccountPage(page);

        await loginPage.singInUser(userCredentials.userEmail, userCredentials.userPassword);
        await expect.soft(page).toHaveTitle("My account - My Shop");
        await expect.soft(myAccount.pageHeader).toHaveText("My account");
        await expect.soft(myAccount.pageInfoAccount).toHaveText("Welcome to your account. Here you can manage all of your personal information and orders.");
    });

    test('Unsuccessful login with incorrect email', async ({ page }) => {
        loginPage = new LoginPage(page);

        await loginPage.singInUser("incorrect@email.com", userCredentials.userPassword);
        await expect.soft(loginPage.errorMsgHeader).toHaveText('There is 1 error');
        await expect.soft(loginPage.errorMsgParagraph).toHaveText('Authentication failed.');
    });

    test('Unsuccessful login with missing email', async ({ page }) => {
        loginPage = new LoginPage(page);

        await loginPage.singInUser("", userCredentials.userPassword);
        await expect.soft(loginPage.errorMsgHeader).toHaveText('There is 1 error');
        await expect.soft(loginPage.errorMsgParagraph).toHaveText('An email address required.');
    });

    test('Unsuccessful login with missing password', async ({ page }) => {
        loginPage = new LoginPage(page);

        await loginPage.singInUser(userCredentials.userEmail, "");
        await expect.soft(loginPage.errorMsgHeader).toHaveText('There is 1 error');
        await expect.soft(loginPage.errorMsgParagraph).toHaveText('Password is required.');
    });

    test('Unsuccessful login with incorrect password', async ({ page }) => {
        loginPage = new LoginPage(page);

        await loginPage.singInUser(userCredentials.userEmail, "incorrectPassword");
        await expect.soft(loginPage.errorMsgHeader).toHaveText('There is 1 error');
        await expect.soft(loginPage.errorMsgParagraph).toHaveText('Authentication failed.');
    });
});
