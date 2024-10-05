import {expect, Locator, type Page} from '@playwright/test';
import * as nodePath from "node:path";


export class HelperActions {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async validatePageTitle(title: string | RegExp) {
        await expect(this.page).toHaveTitle(title);

    }

    async validateScreenshotWithFilter(cssPath: string) {
        await expect(this.page).toHaveScreenshot({stylePath: nodePath.join(__dirname, cssPath)});

    }

    async validateScreenshot() {
        await expect(this.page).toHaveScreenshot({fullPage: true });

    }

    async validateScreenshotElement(locator: Locator, imageName: string) {
        await locator.screenshot({path: './screenshots/' + imageName + '.png'});

    }

}