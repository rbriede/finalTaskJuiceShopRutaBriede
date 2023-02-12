const { When } = require('@wdio/cucumber-framework');
// const BasePage = require('../page-objects/common/BasePage');
const SavedPaymentMethodsPage = require('../page-objects/SavedPaymentMethodsPage');

When(/^I click add new card button$/, async function() {
    this.savedPaymentMethodsPage = new SavedPaymentMethodsPage();
    //await this.savedPaymentMethodsPage.title.waitForDisplayed();
    await this.savedPaymentMethodsPage.optionAddNewCard.waitForDisplayed();
    await this.savedPaymentMethodsPage.optionAddNewCard.click();
});

// When(/^I fill in credit card information and submit$/, async function() {
//     this.savedPaymentMethodsPage = new SavedPaymentMethodsPage();
//     await this.savedPaymentMethodsPage.title.waitForDisplayed();
//     await this.savedPaymentMethodsPage.optionAddNewCard.waitForDisplayed();
//     await this.savedPaymentMethodsPage.optionAddNewCard.click();
// });


// When(/^I see confirmation message about card info$/, async function() {
//     this.savedPaymentMethodsPage = new SavedPaymentMethodsPage();
    
// });