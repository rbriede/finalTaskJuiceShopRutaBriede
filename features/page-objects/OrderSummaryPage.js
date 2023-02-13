const MyPaymentOptionsPage = require("./MyPaymentOptionsPage");
class OrderSummaryPage extends MyPaymentOptionsPage {
    constructor() {
        super();
    }
    
    get title() {
        return browser.$('//div[@class = "order-summary"]')
    }
    
    get placeYourOrderAndPayButton(){
        return browser.$('button#checkoutButton');
    } 
}

module.exports = OrderSummaryPage;