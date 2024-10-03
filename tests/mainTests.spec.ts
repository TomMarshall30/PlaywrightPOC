import test from "./hooks";

test('Log in', async ({mainTestActions}) => {
    await test.step('Validate init UI', async () => {
        await mainTestActions.validateScreenshot()

    })
});

