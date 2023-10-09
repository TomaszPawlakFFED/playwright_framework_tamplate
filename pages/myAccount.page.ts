import { Page } from "@playwright/test";

function getElements(page: Page) {
    return {
        pageHeader: page.locator("h1.page-heading"),
        pageInfoAccount: page.locator("p.info-account")
    }
}

export function MyAccountPage(page: Page) {
    const $el = getElements(page);

    return {
        $el
    }
}
