const BasePage = require("./common/BasePage");

class SavedPaymentMethodsPage extends BasePage {
    constructor() {
        super();
    }
    
    get title() {
        return browser.$('//h1');
    }

    get optionAddNewCard() {
        return browser.$('//span[contains(@class,"mat-content ng-tns-c149-36")]');
    }

    get inputNameOnCard() {
        return browser.$('//input[@class="mat-input-element mat-form-field-autofill-control ng-tns-c118-37 ng-untouched ng-pristine ng-invalid cdk-text-field-autofill-monitored"]');
    }

    get inputCardNumber() {
        return browser.$('//input[@class="mat-input-element mat-form-field-autofill-control ng-tns-c118-38 ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"]');
    }

    get clickOnExpiryMonthMenu() {
        return browser.$('#mat-input-3');
    }

    get selectExpiryMonthOption() {
        return browser.$('//select[@id="mat-input-3"]/option[@value="4"]');
    }
    
    get clickOnExpiryYearMenu() {
        return browser.$('#mat-input-4')
    }

    get clickOnExpiryYearMenu() {
        return browser.$('//select[@id="mat-input-4"]/option[@value="2085"]')
    }

    get buttonSubmit() {
        return browser.$('button#submitButton')
    }

    get confirmationMessageAboutCardInfo() {
        return browser.$('//span[contains(@class,"mat-simple-snack-bar-content")]');
    }
}

module.exports = SavedPaymentMethodsPage;
