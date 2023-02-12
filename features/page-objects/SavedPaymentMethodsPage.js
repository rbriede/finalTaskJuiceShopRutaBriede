const BasePage = require("./common/BasePage");

class SavedPaymentMethodsPage extends BasePage {
    constructor() {
        super();
    }
    
    get title() {
        return browser.$('//h1');
    }

    get optionAddNewCard() {
        return browser.$('#mat-expansion-panel-header-0');
    }

    get inputNameOnCard() {
        return browser.$('//span[descendant::*[contains(text(),"Name")]]/preceding-sibling::input');
    }

    get inputCardNumber() {
        return browser.$('//span[descendant::*[contains(text(),"Card Number")]]/preceding-sibling::input');
    }

    get clickOnExpiryMonthMenu() {
        return browser.$('//*[@id="cdk-accordion-child-0"]/div/div/mat-form-field[3]/div/div[1]');
    }

    // get selectExpiryMonthOption() {
    //     return browser.$('//*[@id="mat-input-3"]/option[4]');
    // }
    
    get clickOnExpiryYearMenu() {
        return browser.$('//*[@id="cdk-accordion-child-0"]/div/div/mat-form-field[4]/div/div[1]/div[3]')
    }

    // get selectExpiryYearOption() {
    //     return browser.$('//select[@id="mat-input-4"]/option[@value="2085"]')
    // }

    get buttonSubmit() {
        return browser.$('button#submitButton')
    }

    get confirmationMessageAboutCardInfo() {
        return browser.$('//span[contains(@class,"mat-simple-snack-bar-content")]');
    }
}

module.exports = SavedPaymentMethodsPage;

//div[@class="mat-form-field-infix ng-tns-c118-9"]


//*[@id="mat-input-3"]/option[4]

//select[@id="mat-input-3"]/option[@value="4"]


//*[@id="mat-input-3"]

//*[@id="mat-input-3"]


//*[@id="mat-input-3"]/option[4]



