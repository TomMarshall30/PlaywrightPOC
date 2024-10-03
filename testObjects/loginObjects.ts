import {expect, type Page} from '@playwright/test';
import * as nodePath from "node:path";

export class LoginObjects {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

}