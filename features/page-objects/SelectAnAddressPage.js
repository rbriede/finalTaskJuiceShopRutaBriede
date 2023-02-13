const BasketPage = require("./BasketPage");
class SelectAnAddressPage extends BasketPage {
    constructor() {
        super();
    }
    
    get title() {
        return browser.$('//h1')
    }

    get selectAnAddressRadioButton() {
        return browser.$('//span[@class = "mat-radio-outer-circle"]');
    }

    get buttonAddNewAddress(){
        return browser.$('[aria-label = "Add a new address"]');
    }
    
    get buttonContinue(){
        return browser.$('[aria-label = "Proceed to payment selection"]');
    } 
}

module.exports = SelectAnAddressPage;