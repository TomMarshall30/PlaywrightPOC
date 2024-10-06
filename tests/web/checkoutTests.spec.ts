import test from "./hooks";

test.beforeEach(async ({loginTestActions, testUserName, testUserPassword}) => {
    await test.step('Fill in credentials and select login', async () => {
        await loginTestActions.updateUserName(testUserName);
        await loginTestActions.updateUserPassword(testUserPassword);
        await loginTestActions.selectLoginButton();
    })
});

test('Add all items to the cart and checkout', async ({inventoryActions, helperActions, cartActions}) => {
    await test.step('Select each add to cart buttons and validate', async () => {
        await inventoryActions.selectEachAddToCart();
        await inventoryActions.validateEachAddToCartSelected();
    })

    await test.step('Navigate to cart and validate', async () => {
        await inventoryActions.selectCart();
        await helperActions.validateScreenshot();
    })

    await test.step('Navigate to checkout and validate', async () => {
        await cartActions.selectCart();
        await helperActions.validateScreenshot();
    })

    await test.step('Fill in customer form', async () => {
        await cartActions.updateFirstName('FirstName');
        await cartActions.updateLastName('LastName');
        await cartActions.updatePostalCode('PostalCode');
    })

    await test.step('Select continue and validate', async () => {
        await cartActions.selectContinue();
        await helperActions.validateScreenshot();
    })

    await test.step('Select finish and validate', async () => {
        await cartActions.selectFinish();
        await helperActions.validateScreenshot();
    })
});

