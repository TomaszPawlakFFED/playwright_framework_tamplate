import { Locator, Page } from "@playwright/test";

export class MyAccountPage {
    readonly pageHeader: Locator;
    readonly pageInfoAccount: Locator;

    constructor(page: Page) {
        this.pageHeader = page.locator("h1.page-heading");
        this.pageInfoAccount = page.locator("p.info-account");
    }
}
