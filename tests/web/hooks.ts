import {Browser, BrowserContext, Page, test as baseTest} from '@playwright/test';
import {LoginActions} from "../../testActions/web/loginActions";
import {InventoryActions} from "../../testActions/web/inventoryActions";
import {CartActions} from "../../testActions/web/cartActions";
import {HelperActions} from "../../testActions/web/helperActions";


export type TestOptions = {
    loginTestActions: LoginActions;
    inventoryActions: InventoryActions;
    cartActions: CartActions;
    helperActions: HelperActions;
    browserstack: boolean,
    browserstackBrowser: string,
    browserstackOS: string,
    browserstackOSVersion: string,
    testUserName: string,
    testUserPassword: string
};

const test = baseTest.extend<TestOptions>({
    browserstack: [false, {option: true}],
    browserstackOS: ['Windows', {option: true}],
    browserstackBrowser: ['chrome', {option: true}],
    browserstackOSVersion: ['11', {option: true}],
    testUserName: ['', {option: true}],
    testUserPassword: ['', {option: true}],

    page: async (
        {
            playwright,
            page,
            browserstack,
            browserstackBrowser,
            browserstackOS,
            browserstackOSVersion
        }, use, testInfo) => {
        let vPage: Page;
        let vBrowser: Browser;
        let vContext: BrowserContext;

        // Before Each
        if (browserstack) {
            const caps = {
                'browserstack.username': process.env.BROWSERSTACK_USERNAME,
                'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
                'browser': browserstackBrowser,
                'os': browserstackOS,
                'os_version': browserstackOSVersion
            };

            vBrowser = await playwright.chromium
                .connect({
                    wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`,
                });
            vContext = await vBrowser.newContext(testInfo.project.use);
            vPage = await vContext.newPage();
        } else {
            vPage = page;
        }

        await vPage.goto("/");
        await new LoginActions(vPage).waitForLoginButton();
        await use(vPage);

        // After Each
        if (browserstack) {
            await vContext.close();
            await vBrowser.close();
        }

    },
    loginTestActions: async ({page}, use) => {
        await use(new LoginActions(page));
    },
    inventoryActions: async ({page}, use) => {
        await use(new InventoryActions(page));
    },
    cartActions: async ({page}, use) => {
        await use(new CartActions(page));
    },
    helperActions: async ({page}, use) => {
        await use(new HelperActions(page));
    },

})

export default test;