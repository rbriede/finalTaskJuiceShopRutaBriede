const { When } = require('@wdio/cucumber-framework');
const BasePage = require('../page-objects/common/BasePage');
const LoginPage = require('../page-objects/authentication/LoginPage');
const ForgotPasswordPage = require('../page-objects/authentication/ForgotPasswordPage');

When(/^I am on login page$/, async function() {
    this.loginPage = new LoginPage();
    await this.loginPage.title.waitForDisplayed();
});

When(/^I press 'forgot password'$/, async function() {
    this.loginPage = new LoginPage();
    browser.url('http://159.223.1.129/#/forgot-password'); // the element "Forgot your password?" was blocked, so I used this url method as suggested in the final task description
});

When(/^I enter email in forgot email page$/, async function() {
    this.forgotPasswordPage = new ForgotPasswordPage();
    await this.forgotPasswordPage.inputEmailFPP.waitForDisplayed();
    await this.forgotPasswordPage.inputEmailFPP.setValue("dzindze93@mailinator.com");  
});

When(/^I click on security question field$/, async function() {
    this.forgotPasswordPage = new ForgotPasswordPage();
    await this.forgotPasswordPage.securityQuestionField.waitForDisplayed();
    await this.forgotPasswordPage.securityQuestionField.click();
});

When(/^I see security question$/, async function() {
    this.forgotPasswordPage = new ForgotPasswordPage();
    await this.forgotPasswordPage.securityQuestionVisible.waitForDisplayed();
});

When(/^I enter security question$/, async function() {
    this.forgotPasswordPage = new ForgotPasswordPage();
    await this.forgotPasswordPage.inputSecurityQuestionAnswer.waitForDisplayed();
    await this.forgotPasswordPage.inputSecurityQuestionAnswer.setValue("Una");
});

When(/^I enter new password and confirm$/, async function() {
    this.forgotPasswordPage = new ForgotPasswordPage();
    await this.forgotPasswordPage.inputNewPassword.waitForDisplayed();
    await this.forgotPasswordPage.inputNewPassword.setValue("pppppp");
    await this.forgotPasswordPage.inputRepeatNewPassword.waitForDisplayed();
    await this.forgotPasswordPage.inputRepeatNewPassword.setValue("pppppp");
    await this.forgotPasswordPage.buttonChangePassword.waitForDisplayed();
    await this.forgotPasswordPage.buttonChangePassword.click();
});

When(/^I see message about succesfully changed password$/, async function() {
    this.forgotPasswordPage = new ForgotPasswordPage();
    let element = await this.forgotPasswordPage.messagePasswordSuccesfullyChanged;
    expect(element).toExist();
    await expect(element).toHaveTextContaining("Your password was successfully changed.");    
});

When(/^I have logged in$/, async function() {
    this.basePage = new BasePage();
    this.loginPage = new LoginPage();
    await this.basePage.header.buttonAccount.waitForDisplayed();
    await this.basePage.header.buttonAccount.click();
    await this.basePage.header.buttonLogin.waitForDisplayed();
    await this.basePage.header.buttonLogin.click();
    await browser.url('http://159.223.1.129/#/login');
    await this.loginPage.inputEmail.waitForDisplayed();
    await this.loginPage.inputEmail.setValue("dzindze93@mailinator.com");
    await this.loginPage.inputPassword.waitForDisplayed();
    await this.loginPage.inputPassword.setValue("ppppp");
    await this.loginPage.buttonLogIn.waitForDisplayed();
    await this.loginPage.buttonLogIn.click();
    await browser.url('http://159.223.1.129/#/search');
    await this.basePage.header.buttonBasket.waitForDisplayed();
});


