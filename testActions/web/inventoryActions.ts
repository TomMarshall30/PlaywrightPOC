import {expect, type Page} from '@playwright/test';
import {InventoryObjects} from "../../testObjects/web/inventoryObjects";

export class InventoryActions {
    readonly page: Page;
    readonly inventoryObjects: InventoryObjects;

    constructor(page: Page) {
        this.page = page;
        this.inventoryObjects = new InventoryObjects(page);
    }

    async selectEachAddToCart() {
        for (const el of await this.inventoryObjects.getAddToCartButtons()) {
            await el.click();
        }
    }

    async validateEachAddToCartSelected() {
        let count = 0;
        for (const el of await this.inventoryObjects.getAddToCartButtons()) {
            expect(await el.textContent() == 'Remove')
            count++;
        }

        expect(count == 6);
    }

    async selectCart() {
        await this.inventoryObjects.getCartButton().click();
    }

}