const { When } = require('@wdio/cucumber-framework');
const BasePage = require('../page-objects/common/BasePage');
const LoginPage = require('../page-objects/authentication/LoginPage');
const RegisterPage = require('../page-objects/authentication/RegisterPage');

When(/^I have registered account$/, async function() {
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

When(/^I have logged out$/, async function() {
    this.basePage = new BasePage();
    this.loginPage = new LoginPage();
    await this.basePage.header.buttonAccount.waitForDisplayed();
    await this.basePage.header.buttonAccount.click();
    await this.basePage.header.buttonLogout.waitForDisplayed();
    await this.basePage.header.buttonLogout.click();
    await browser.url('/');
}); 

When(/^I enter email address$/, async function() {
    this.registerPage = new RegisterPage();
    await this.registerPage.inputEmail.waitForDisplayed();
    await this.registerPage.inputEmail.setValue("dzindze93@mailinator.com");
}); 

When(/^I enter password$/, async function() {
    this.registerPage = new RegisterPage();
    await this.registerPage.inputPassword.waitForDisplayed();
    await this.registerPage.inputPassword.setValue("ppppp");
}); 

When(/^I enter password repeatedly$/, async function() {
    this.registerPage = new RegisterPage();
    await this.registerPage.inputPasswordConfirm.waitForDisplayed();
    await this.registerPage.inputPasswordConfirm.setValue("ppppp");
}); 

When(/^I select question about elder sibling$/, async function() {
    this.registerPage = new RegisterPage();
    await this.registerPage.selectionSecurityQuestion.waitForDisplayed();
    await this.registerPage.selectionSecurityQuestion.click();
    await this.registerPage.selectionSecurityQuestionElderSibling.waitForDisplayed();
    await this.registerPage.selectionSecurityQuestionElderSibling.click();
}); 

When(/^I enter answer$/, async function() {
    this.registerPage = new RegisterPage();
    await this.registerPage.inputAnswer.waitForDisplayed();
    await this.registerPage.inputAnswer.setValue("Cisco");
    
}); 

When(/^I press register button$/, async function() {
    this.registerPage = new RegisterPage();
    await this.registerPage.buttonRegister.waitForDisplayed();
    await this.registerPage.buttonRegister.click();
});

When(/^I see message about email must be unique$/, async function() {
    this.registerPage = new RegisterPage();
    let element = await this.registerPage.messageEmailMustBeUnique;
    expect(element).toExist();
    await expect(element).toHaveTextContaining("Email must be unique");
});