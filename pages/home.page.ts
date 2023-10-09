import { Page } from "@playwright/test";

export function HomePage(page: Page) {

    return {
        async goToHomePage(): Promise<void> {
            await page.goto('/');
        }
    }
}
