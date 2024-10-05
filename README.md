# PlaywrightPOC

POC for Playwright

Solution supports web and api automated tests using local browsers and or Browserstack.

The framework uses an object, action, test (OAT) work flow, where actions use objects and tests use actions. This allows for objects and actions to be defined once and used throughout tests. Tests read like a list of steps with no test logic beyond what data is used in the test.

Readability is very important to test development, so the framework is using DAMP (Descriptive And Meaningful Phrases) to promote the readability of the code.

## Dependencies:
    -node v22.9.0

Install
``npm install``

Run tests
``npx playwright test``
