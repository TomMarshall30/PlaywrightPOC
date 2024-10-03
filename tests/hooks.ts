import {LoginActions} from "../testActions/loginActions";
import {test as baseTest} from '@playwright/test';

const test = baseTest.extend<{
    mainTestActions: LoginActions;
}>({
    page: async ({page, context}, use) => {
        await page.goto("/");
        await new LoginActions(page, context).waitForLoginButton();
        await use(page);
    },
    mainTestActions: async ({page, context}, use) => {
        await use(new LoginActions(page, context));
    },

})

export default test;