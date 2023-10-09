import { Locator, Page } from "@playwright/test";

function getElements(page: Page) {
    return {
        loginInput: page.locator("#email"),
        passwordInput: page.locator("#passwd"),
        loginButton: page.locator("#SubmitLogin"),
        errorMsgHeader: page.locator("div.alert-danger p"),
        errorMsgParagraph: page.locator("div.alert-danger li")
    };
}

export function LoginPage(page: Page) {
    const $el = getElements(page);

    return {
        $el,

        async singInUser(email: string, password: string): Promise<void> {
            await $el.loginInput.fill(email);
            await $el.passwordInput.fill(password);
            await $el.loginButton.click();
        },
    };
}
