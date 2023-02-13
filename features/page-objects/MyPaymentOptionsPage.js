const DeliverySpeedPage = require("./DeliverySpeedPage");
class MyPaymentOptionsPage extends DeliverySpeedPage {
    constructor() {
        super();
    }
    
    get title() {
        return browser.$('//h1')
    }

    get selectSavedCardRadioButton() {
        return browser.$('//mat-radio-button[@class = "mat-radio-button mat-accent"]');
    }
    
    get buttonContinue(){
        return browser.$('[aria-label = "Proceed to review"]');
    } 
}

module.exports = MyPaymentOptionsPage;