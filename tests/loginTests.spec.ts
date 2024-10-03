import test from "./hooks";

test('Log in Loaded UI', async ({helperActions}) => {
    await test.step('Validate Loaded UI', async () => {
        await helperActions.validateScreenshot();

    })
});

test('Incorrect Username', async ({loginTestActions}) => {
    await test.step('Fill in credentials and select login', async () => {
        await loginTestActions.updateUserName('WrongUserName');
        await loginTestActions.selectLoginButton();

    })
    await test.step('Validate error message', async () => {
        await loginTestActions.updateUserName('WrongUserName');
        await loginTestActions.selectLoginButton();

    })
});

