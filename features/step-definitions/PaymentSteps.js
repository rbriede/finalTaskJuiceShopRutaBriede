const { When } = require('@wdio/cucumber-framework');
// const BasePage = require('../page-objects/common/BasePage');
const SavedPaymentMethodsPage = require('../page-objects/SavedPaymentMethodsPage');


When(/^I click add new card button$/, async function() {
    this.savedPaymentMethodsPage = new SavedPaymentMethodsPage();
    //await this.savedPaymentMethodsPage.title.waitForDisplayed();
    await this.savedPaymentMethodsPage.optionAddNewCard.waitForDisplayed();
    await this.savedPaymentMethodsPage.optionAddNewCard.click();
});

When(/^I fill in credit card information and submit$/, async function(option) {
    this.savedPaymentMethodsPage = new SavedPaymentMethodsPage();    
    await this.savedPaymentMethodsPage.inputNameOnCard.waitForDisplayed();
    await this.savedPaymentMethodsPage.inputNameOnCard.setValue("John Goodman");
    await this.savedPaymentMethodsPage.inputCardNumber.waitForDisplayed();
    await this.savedPaymentMethodsPage.inputCardNumber.setValue("1234567812345678");
    await this.savedPaymentMethodsPage.clickOnExpiryMonthMenu.waitForDisplayed();
    await this.savedPaymentMethodsPage.clickOnExpiryMonthMenu.click();
    await browser.keys("4");
    await browser.keys("Enter");
    // await this.savedPaymentMethodsPage.selectExpiryMonthOption.waitForDisplayed();
    // await this.savedPaymentMethodsPage.selectExpiryMonthOption.click();
    await this.savedPaymentMethodsPage.clickOnExpiryYearMenu.waitForDisplayed();
    await this.savedPaymentMethodsPage.clickOnExpiryYearMenu.click();
    //await this.savedPaymentMethodsPage.selectExpiryYearOption.waitForDisplayed();
    // await this.savedPaymentMethodsPage.selectExpiryYearOption.click();
    await browser.keys("2");
    await browser.keys("2");
    await browser.keys("2");
    await browser.keys("2");
    await browser.keys("2");
    await browser.keys("Enter");
    await this.savedPaymentMethodsPage.buttonSubmit.waitForDisplayed();
    await this.savedPaymentMethodsPage.buttonSubmit.click();
});


When(/^I see confirmation message about card info$/, async function() {
    this.savedPaymentMethodsPage = new SavedPaymentMethodsPage();
    let element = await this.savedPaymentMethodsPage.confirmationMessageAboutCardInfo;
    expect(element).toExist();
    await expect(element).toHaveTextContaining("Your card ending with 5678 has been saved for your convenience.");
});