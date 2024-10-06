import {expect, type Page} from '@playwright/test';
import {LoginObjects} from "../../testObjects/web/loginObjects";
import {HelperActions} from "./helperActions";

export class LoginActions {
    readonly page: Page;
    readonly loginObjects: LoginObjects;
    readonly helperActions: HelperActions;

    constructor(page: Page) {
        this.page = page;
        this.loginObjects = new LoginObjects(page);
        this.helperActions = new HelperActions(page);
    }

    async waitForLoginButton() {
        await expect(this.loginObjects.getLoginButton()).toBeEnabled();
    }

    async updateUserName(username: string) {
        await this.loginObjects.getUserNameInput().fill(username);
    }

    async updateUserPassword(password: string) {
        await this.loginObjects.getUserPasswordInput().fill(password);
    }

    async selectLoginButton() {
        await this.loginObjects.getLoginButton().click();
    }

    async validateInvalidLogin() {
        await this.helperActions.validateScreenshotElement(this.loginObjects.getErrorContainer(), 'LoginError');
    }

}