import { Locator, Page } from "@playwright/test";

function getElements(page: Page) {
    return {
        signInButton: page.locator(".login")
    }
}

export function HeaderComponent(page: Page) {
    const $el = getElements(page);

    return {
        $el,

        async clickSignInButton(): Promise<void> {
            await $el.signInButton.click();
        }
    }
}