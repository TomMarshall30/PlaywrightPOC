import {defineConfig, devices} from '@playwright/test';
import type {TestOptions} from './tests/hooks';

export default defineConfig<TestOptions>({
    testDir: './tests',
    reporter: [['./reporters/mainReporter.ts', {customOption: 'some value'}]],
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,

    use: {
        baseURL: 'https://www.saucedemo.com/',
        trace: 'on-first-retry',
        video: 'on-first-retry',
        screenshot: 'only-on-failure',
    },

    updateSnapshots: 'all',

    projects: [
        // {
        //     name: 'browserstack',
        //     use: {
        //         browserstack: true,
        //         browserstackBrowser: 'chrome', // allowed browsers are `chrome`, `edge`, `playwright-chromium`, `playwright-firefox` and `playwright-webkit`
        //         browserstackOS: 'Windows',
        //         browserstackOSVersion: '11',
        //         testUserName: '',
        //         testUserPassword: ''
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
                testUserName: '',
                testUserPassword: ''
            },
        },

    ],
});
