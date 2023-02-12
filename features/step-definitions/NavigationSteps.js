const { When } = require('@wdio/cucumber-framework');
const BasePage = require('../page-objects/common/BasePage');
const LoginPage = require('../page-objects/authentication/LoginPage');
const RegisterPage = require('../page-objects/authentication/RegisterPage');

When(/^I open landing page$/, async function() {
    this.basePage = new BasePage();
    await browser.url('/');
    await browser.setWindowSize(1400, 980);
    await this.basePage.buttonDismissPopUp.waitForDisplayed();
    await this.basePage.buttonDismissPopUp.click();
    await this.basePage.buttonDismissCookies.waitForDisplayed();
    await this.basePage.buttonDismissCookies.click();
    // await this.basePage.popUpReloadAfterLangChange.waitForDisplayed();
    // await this.basePage.popUpReloadAfterLangChange.waitForDisplayed({reverse: true});    
});

When(/^I press on Account button$/, async function() {
    this.basePage = new BasePage();
    this.loginPage = new LoginPage();
    await this.basePage.header.buttonAccount.waitForDisplayed();
    await this.basePage.header.buttonAccount.click();
}); 

When(/^I press log in$/, async function() {
    this.basePage = new BasePage();
    await this.basePage.header.buttonLogin.waitForDisplayed();
    await this.basePage.header.buttonLogin.click();
    await browser.url('http://159.223.1.129/#/login');
});

When(/^I press not yet a customer$/, async function() {
    this.loginPage = new LoginPage();
    this.registerPage = new RegisterPage();
    await this.loginPage.notYetACustomerRegister.waitForDisplayed();
    await this.loginPage.notYetACustomerRegister.click();
    await browser.url('http://159.223.1.129/#/register');
}); 


When(/^I am in register page$/, async function() {
    this.registerPage = new RegisterPage();
    await this.registerPage.title.waitForDisplayed();
});

When(/^I click on 'Orders and Payment' option$/, async function() {
    this.basePage = new BasePage();
    await this.basePage.header.buttonOrdersAndPayment.waitForDisplayed();
    await this.basePage.header.buttonOrdersAndPayment.click();
});

When(/^I click on 'My payment Options' option$/, async function() {
    this.basePage = new BasePage();
    await this.basePage.header.buttonPaymentOptions.waitForDisplayed();
    await this.basePage.header.buttonPaymentOptions.click();
});

When(/^I click on 'My Saved Addresses' option$/, async function() {
    this.basePage = new BasePage();
    await this.basePage.header.buttonSavedAddresses.waitForDisplayed();
    await this.basePage.header.buttonSavedAddresses.click();
});


