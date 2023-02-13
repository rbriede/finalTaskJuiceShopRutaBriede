const BasketPage = require("./BasketPage");
class SelectAnAddressPage extends BasketPage {
    constructor() {
        super();
    }
    
    get title() {
        return browser.$('//h1')
    }

    get selectAnAddressRadioButton() {
        return browser.$('//mat-radio-button[@class = "mat-radio-button mat-accent"][@id = "mat-radio-40"]');
    }

    get buttonAddNewAddress(){
        return browser.$('[aria-label = "Add a new address"]');
    }
    
    get buttonContinue(){
        return browser.$('[aria-label = "Proceed to payment selection"]');
    } 
}

module.exports = SelectAnAddressPage;







