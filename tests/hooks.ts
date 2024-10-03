import {LoginActions} from "../testActions/loginActions";
import {HelperActions} from "../testActions/helperActions";
import {test as baseTest} from '@playwright/test';

const test = baseTest.extend<{
    loginTestActions: LoginActions;
    helperActions: HelperActions;
}>({
    page: async ({page, context}, use) => {
        await page.goto("/");
        await new LoginActions(page, context).waitForLoginButton();
        await use(page);
    },
    loginTestActions: async ({page, context}, use) => {
        await use(new LoginActions(page, context));
    },
    helperActions: async ({page, context}, use) => {
        await use(new HelperActions(page, context));
    },

})

export default test;