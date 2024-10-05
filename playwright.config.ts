import {defineConfig, devices} from '@playwright/test';
import type {TestOptions} from './tests/web/hooks';

export default defineConfig<TestOptions>({
    testDir: './tests/web',
    reporter: [['./reporters/mainReporter.ts', {customOption: ''}]],
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,

    use: {
        baseURL: 'https://www.saucedemo.com/', //API https://api.themoviedb.org/3/, WEB https://www.saucedemo.com/
        trace: 'on-first-retry',
        video: 'on-first-retry',
        screenshot: 'only-on-failure',

        extraHTTPHeaders: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
    },

    updateSnapshots: 'missing',

    projects: [
        // {
        //     name: 'browserstack',
        //     use: {
        //         browserstack: true,
        //         browserstackBrowser: 'chrome', // allowed browsers are `chrome`, `edge`, `playwright-chromium`, `playwright-firefox` and `playwright-webkit`
        //         browserstackOS: 'Windows',
        //         browserstackOSVersion: '11',
        //         testUserName: 'standard_user',
        //         testUserPassword: 'secret_sauce'
        //
        //     },
        // },
        {
            name: 'chrome local',
            use: {
                ...devices['Desktop Chrome'],
                headless: false,
                deviceScaleFactor: undefined,
                viewport: null,
                launchOptions: {
                    args: ['--start-maximized']
                },
                testUserName: 'standard_user',
                testUserPassword: 'secret_sauce'
            },
        },

    ],
});
