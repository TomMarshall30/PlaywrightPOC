import {test as baseTest} from '@playwright/test';
import {ApiAuthActions} from "../../testActions/apiAuthActions";


export type TestOptions = {
    apiAuthActions: ApiAuthActions;
};

const test = baseTest.extend<TestOptions>({
    apiAuthActions: async ({}, use) => {
        await use(new ApiAuthActions());
    },
})

export default test;