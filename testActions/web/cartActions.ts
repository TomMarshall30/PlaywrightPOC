import {type Page} from '@playwright/test';
import {CartObjects} from "../../testObjects/web/cartObjects";

export class CartActions {
    readonly page: Page;
    readonly cartObjects: CartObjects;

    constructor(page: Page) {
        this.page = page;
        this.cartObjects = new CartObjects(page);
    }

    async selectCart() {
        await this.cartObjects.getCheckoutButton().click()
    }

    async updateFirstName(firstName: string) {
        await this.cartObjects.getFirstNameInput().fill(firstName);
    }

    async updateLastName(lastName: string) {
        await this.cartObjects.getLastNameInput().fill(lastName);
    }

    async updatePostalCode(postalCode: string) {
        await this.cartObjects.getPostalCodeInput().fill(postalCode);
    }

    async selectContinue() {
        await this.cartObjects.getContinueButton().click()
    }

    async selectFinish() {
        await this.cartObjects.getFinishButton().click()
    }

}