const SavedAddressesPage = require("./SavedAddressesPage");

class AddNewAddressPage extends SavedAddressesPage {
    constructor() {
        super();
    }

    get title() {
        return browser.$('//h1');
    }

    get inputCountry() {
        return browser.$('//span[descendant::*[contains(text(),"Country")]]/preceding-sibling::input');
    }

    get inputName() {
        return browser.$('//span[descendant::*[contains(text(),"Name")]]/preceding-sibling::input');
    }

    get inputMobileNumber() {
        return browser.$('//span[descendant::*[contains(text(),"Mobile")]]/preceding-sibling::input');
    }

    get inputZIPCode() {
        return browser.$('//span[descendant::*[contains(text(),"ZIP")]]/preceding-sibling::input');
    }

    get inputAddress() {
        return browser.$('#address');
    }

    get inputCity() {
        return browser.$('//span[descendant::*[contains(text(),"City")]]/preceding-sibling::input');
    }

    get inputState() {
        return browser.$('//span[descendant::*[contains(text(),"State")]]/preceding-sibling::input');
    }

    get buttonSubmit() {
        return browser.$('button#submitButton');
    }

    get confirmationMessageAboutAddressAdded() {
        return browser.$('//span[contains(@class,"mat-simple-snack-bar-content")]');
    } 
}

module.exports = AddNewAddressPage;


