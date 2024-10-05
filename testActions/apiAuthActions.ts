import {APIRequestContext, expect, APIResponse} from '@playwright/test';

export class ApiAuthActions {
    async getAuth(request: APIRequestContext) {
        return request.get(`authentication`);
    }

    async validateAuthResponse(getAuth: APIResponse) {
        expect(getAuth.ok()).toBeTruthy();
        expect(await getAuth.json()).toEqual(expect.objectContaining({
            success: true,
            status_code: 1,
            status_message: 'Success.'
        }));
    }

}