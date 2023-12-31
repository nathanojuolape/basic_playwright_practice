import {expect, test} from '@playwright/test';
// import {Protocol} from "playwright-core/types/protocol";
// import Page = Protocol.Page;

const expectedUrl = 'https://practicetestautomation.com/practice-test-login/';
const loggedinUrl = 'https://practicetestautomation.com/logged-in-successfully/';

test('Navigating to the page', async ({ page }) => {

    await page.goto(expectedUrl);

//    Get the current URL
    const currentUrl = page.url();
// Assert that the current URL matches the expected URL
    console.assert(currentUrl === expectedUrl, `Expected URL: ${expectedUrl}, Actual URL: ${loggedinUrl}`);
});

test('Logging in to the page', async ({ page }) => {
    const username = 'student';
    const password = 'Password123';
    // Go to the website
    await page.goto(expectedUrl);

    // Fill in the username and password fields and click the submit button
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);
    await page.click('button#submit.btn');

    const currentUrl = page.url();
    if (currentUrl === loggedinUrl) {
        console.log('Login successful!'); // Verification successful
    } else {
        console.log('Login failed or navigation issue.'); // Verification failed
    }

});

//
// test('Verify that the login is successful', async({ page }) => {
//     const currentUrl = page.url();
//     const currentUrl = page.url();
//     if (currentUrl === loggedinUrl) {
//         console.log('Login successful!'); // Verification successful
//     } else {
//         console.log('Login failed or navigation issue.'); // Verification failed
//     }
    // await browser.close();
// }


// test('Verify that the login is successful', async ({page}) => {
    // Verify "Logged In Successfully" text
    // await page.waitForSelector('text=Logged In Successfully');
    //
    // // Verify the URL
    // const currentUrl = page.url();
    // const loggedinUrl = 'https://practicetestautomation.com/logged-in-successfully/';
    // expect(currentUrl).toBe(loggedinUrl);
    //
    // console.log('Login successful and URL verified.');

// });