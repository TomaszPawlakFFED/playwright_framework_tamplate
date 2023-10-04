import { Locator, Page } from "@playwright/test";

export class HeaderComponent {
    readonly signInButton: Locator;

    constructor(private page: Page) {
        this.signInButton = page.locator(".login")
    }

    async clickSignInButton(): Promise<void> {
        await this.signInButton.click();
    }
}
