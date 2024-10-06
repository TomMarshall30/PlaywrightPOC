import {type Page} from '@playwright/test';

export class CartObjects {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getCheckoutButton() {
        return this.page.locator('button#checkout');
    }

    getFirstNameInput() {
        return this.page.locator('input#first-name');
    }

    getLastNameInput() {
        return this.page.locator('input#last-name');
    }

    getPostalCodeInput() {
        return this.page.locator('input#postal-code');
    }

    getContinueButton() {
        return this.page.locator('input#continue');
    }

    getFinishButton() {
        return this.page.locator('button#finish');
    }

}