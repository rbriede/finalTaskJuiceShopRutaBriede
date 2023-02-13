const SelectAnAddressPage = require("./SelectAnAddressPage");
class DeliverySpeedPage extends SelectAnAddressPage {
    constructor() {
        super();
    }
    
    get title() {
        return browser.$('//h1[text()="Choose a delivery speed"]')
    }

    get selectOneDayDeliveryRadioButton() {
        return browser.$('//mat-radio-button[@class = "mat-radio-button mat-accent"][@id = "mat-radio-41"]');
    }

    // get selectFastDeliveryRadioButton() {
    //     return browser.$('//span[@class = "mat-radio-outer-circle"]');
    // }

    // get selectStandardDeliveryRadioButton() {
    //     return browser.$('//span[@class = "mat-radio-outer-circle"]');
    // }
    
    get buttonContinue(){
        return browser.$('[aria-label = "Proceed to delivery method selection"]');
    } 
}

module.exports = DeliverySpeedPage;