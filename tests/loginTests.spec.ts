import test from "./hooks";


test('Incorrect Username', async ({loginTestActions, helperActions}) => {
    await test.step('Fill in credentials and select login', async () => {
        await loginTestActions.updateUserName('WrongUserName');
        await loginTestActions.selectLoginButton();

    })
    await test.step('Validate error message', async () => {
        await loginTestActions.validateInvalidLogin();
        await helperActions.validateScreenshot();

    })
});

test('Valid Login', async ({loginTestActions, helperActions, testUserName, testUserPassword}) => {
    await test.step('Fill in credentials and select login', async () => {
        await loginTestActions.updateUserName(testUserName);
        await loginTestActions.updateUserPassword(testUserPassword);
        await loginTestActions.selectLoginButton();

    })
    await test.step('Validate new page', async () => {
        await helperActions.validateScreenshot();

    })
});

