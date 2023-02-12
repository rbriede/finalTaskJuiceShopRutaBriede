const SavedAddressesPage = require("./SavedAddressesPage");

class AddNewAddressPage extends SavedAddressesPage {
    constructor() {
        super();
    }

    get title() {
        return browser.$('//h1');
    }

    get inputCountry() {
        return browser.$('//div[@class="mat-form-field-infix ng-tns-c118-7"]');
    }

    get inputName() {
        return browser.$('#mat-input-2');
    }

    get inputMobileNumber() {
        return browser.$('#mat-input-3');
    }

    get inputZIPCode() {
        return browser.$('#mat-input-4');
    }

    get inputAddress() {
        return browser.$('#address');
    }

    get inputCity() {
        return browser.$('#mat-input-6');
    }

    get inputState() {
        return browser.$('#mat-input-7');
    }

    get buttonSubmit() {
        return browser.$('button#submitButton');
    }
}

module.exports = AddNewAddressPage;

//*[@id="address-form"]/mat-form-field[2]/div/div[1]

//span[@class="mat-form-field-infix ng-tns-c118-7"]

