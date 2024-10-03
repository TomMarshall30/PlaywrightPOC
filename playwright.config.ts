import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',

    use: {
        baseURL: 'https://www.saucedemo.com/',
        trace: 'on-first-retry',
        video: 'on-first-retry',
        screenshot: 'only-on-failure',
    },

    updateSnapshots: 'all',

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                headless: false,
                deviceScaleFactor: undefined,
                viewport: null,
                launchOptions: {
                    args: ['--start-maximized']
                },
            },
        },
    ],
});
