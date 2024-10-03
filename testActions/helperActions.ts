import {BrowserContext, expect, type Page} from '@playwright/test';
import * as nodePath from "node:path";
import {Context} from "node:vm";

export class HelperActions {
    readonly page: Page;
    readonly context: Context;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    async validatePageTitle(title: string | RegExp) {
        await expect(this.page).toHaveTitle(title);
    }

    async validateScreenshotWithFilter(cssPath: string) {
        await expect(this.page).toHaveScreenshot({stylePath: nodePath.join(__dirname, cssPath)});
    }

    async validateScreenshot() {
        await expect(this.page).toHaveScreenshot();
    }

}