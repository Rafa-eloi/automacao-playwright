const { Given, When, Then } = require("@cucumber/cucumber")
const { chromium, expect } = require("@playwright/test")

let browser
let page

Given('Eu estou na página de Login', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();

    await page.goto("https://www.saucedemo.com/")
});

When('Eu digito nome e senha corretamente', async function () {
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

});

Then('Faço login com sucesso', async function () {
    await expect(page.locator("#header_container > div.primary_header > div.header_label > div"))
    .toContainText("Swag Labs");
});
