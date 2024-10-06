import test from "./hooks";

test('Login no password', async ({loginTestActions, inventoryActions, testUserName, testUserPassword }) => {
    await test.step('Fill in credentials and select login', async () => {
        await loginTestActions.updateUserName(testUserName);
        await loginTestActions.updateUserPassword(testUserPassword);
        await loginTestActions.selectLoginButton();
    })
    await test.step('Select each add to cart buttons', async () => {
        await inventoryActions.selectEachAddToCart();
        console.log();

    })

    await test.step('Validate each add to cart buttons selected', async () => {
        await inventoryActions.validateEachAddToCartSelected()
        console.log();

    })
});

