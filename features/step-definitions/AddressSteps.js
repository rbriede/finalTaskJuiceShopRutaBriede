const { When } = require('@wdio/cucumber-framework');
//const BasePage = require('../page-objects/common/BasePage');
const SavedAddressesPage = require('../page-objects/SavedAddressesPage');
const AddNewAddressPage = require('../page-objects/AddNewAddressPage');

When(/^I click on new Address button$/, async function() {
    this.savedAddressesPage = new SavedAddressesPage();
    //await this.savedAddressesPage.title.waitForDisplayed();
    await this.savedAddressesPage.buttonAddNewAddress.waitForDisplayed();
    await this.savedAddressesPage.buttonAddNewAddress.click();
});

When(/^I add address information and submit$/, async function(option) {
    this.addNewAddressPage = new AddNewAddressPage();
    //await this.savedAddressesPage.title.waitForDisplayed();
    await this.addNewAddressPage.inputCountry.waitForDisplayed();
    await this.addNewAddressPage.inputCountry.setValue("United States");
    await this.addNewAddressPage.inputName.waitForDisplayed();
    await this.addNewAddressPage.inputName.setValue("John Goodman");
    await this.addNewAddressPage.inputMobileNumber.waitForDisplayed();
    await this.addNewAddressPage.inputMobileNumber.setValue("1234567891");
    await this.addNewAddressPage.inputZIPCode.waitForDisplayed();
    await this.addNewAddressPage.inputZIPCode.setValue("00000");
    await this.addNewAddressPage.inputAddress.waitForDisplayed();
    await this.addNewAddressPage.inputAddress.setValue("sunset bv");
    await this.addNewAddressPage.inputCity.waitForDisplayed();
    await this.addNewAddressPage.inputCity.setValue("Los Angeles");
    await this.addNewAddressPage.inputState.waitForDisplayed();
    await this.addNewAddressPage.inputState.setValue("California");
    await this.addNewAddressPage.buttonSubmit.waitForDisplayed();
    await this.addNewAddressPage.buttonSubmit.click();
    await this.addNewAddressPage.confirmationMessageAboutAddressAdded.waitForDisplayed();
    await this.addNewAddressPage.confirmationMessageAboutAddressAdded.waitForDisplayed({ reverse: true });    
}); 