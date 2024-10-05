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

[
    { username: 'standard_user' },
    { username: 'locked_out_user' },
    { username: 'problem_user' },
    { username: 'performance_glitch_user' },
    { username: 'error_user' }
].forEach(({ username }) => {
    test('Login using ' + username, async ({loginTestActions, helperActions, testUserPassword}) => {
        await test.step('Fill in credentials and select login', async () => {
            await loginTestActions.updateUserName(username);
            await loginTestActions.updateUserPassword(testUserPassword);
            await loginTestActions.selectLoginButton();
        })
        await test.step('Validate new page', async () => {
            await helperActions.validateScreenshot();
        })
    });

})



