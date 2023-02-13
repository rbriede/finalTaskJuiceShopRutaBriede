const BasePage = require("./common/BasePage");

class BasketPage extends BasePage {
    constructor() {
        super();
    }

    get title(){
        return browser.$('//h1[contains(text(),"Your Basket")]');
    }
        
    get buttonCheckout(){
        return browser.$(`button#checkoutButton`);
    }
    
    
    
    
}

module.exports = BasketPage;


