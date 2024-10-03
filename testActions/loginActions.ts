import {BrowserContext, expect, type Page} from '@playwright/test';
import {LoginObjects} from "../testObjects/loginObjects";
import {Context} from "node:vm";

export class LoginActions {
    readonly page: Page;
    readonly context: Context;
    readonly loginObjects: LoginObjects;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.loginObjects = new LoginObjects(page);
    }

    async waitForLoginButton() {
        await expect(this.loginObjects.getLoginButton()).toBeEnabled();
    }

    async updateUserName(username: string) {
        await this.loginObjects.getUserNameInput().fill(username)
    }

    async selectLoginButton() {
        await this.loginObjects.getLoginButton().click()
    }

}