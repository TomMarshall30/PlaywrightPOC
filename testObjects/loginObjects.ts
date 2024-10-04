import {type Page} from '@playwright/test';

export class LoginObjects {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getLoginButton() {
        return this.page.locator('input#login-button');
    }

    getUserNameInput() {
        return this.page.locator('input#user-name');
    }

    getErrorContainer() {
        return this.page.locator('div.error-message-container.error');
    }

}