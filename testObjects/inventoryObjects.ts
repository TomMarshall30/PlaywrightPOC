import {type Page} from '@playwright/test';

export class InventoryObjects {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getAddToCartButtons() {
        return this.page.locator('button.btn_inventory').all();
    }

}