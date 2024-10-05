import test from './apiHooks';

test('Test auth response', async ({apiAuthActions, request}) => {
    await apiAuthActions.validateAuthResponse(
        await apiAuthActions.getAuth(request)
    );

});