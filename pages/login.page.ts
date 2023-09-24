import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly loginInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMsgHeader: Locator;
    readonly errorMsgParagraph: Locator;

    /* Notatka-1: Dlaczego wymagany jest private dla page. 
    Ew. Dlaczego np. w dokumentacji PW w konstruktorze 
    inicjalizują page poprzez this.page = page */

    constructor(private page: Page) {
        this.loginInput = this.page.locator("#email");
        this.passwordInput = this.page.locator("#passwd");
        this.loginButton = this.page.locator("#SubmitLogin");
        this.errorMsgHeader = this.page.locator("div.alert-danger p")
        this.errorMsgParagraph = this.page.locator("div.alert-danger li");
    }

    async singInUser(userEmail: string, userPasword: string): Promise<void> {
        await this.loginInput.fill(userEmail);
        await this.passwordInput.fill(userPasword);
        await this.loginButton.click();
    }
}