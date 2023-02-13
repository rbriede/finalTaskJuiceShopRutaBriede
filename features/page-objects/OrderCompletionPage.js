const OrderSummaryPage = require("./OrderSummaryPage");
class OrderCompletionPage extends OrderSummaryPage {
    constructor() {
        super();
    }
    
    get titleThankYouForYourPurchase() {
        return browser.$('//h1');
    }

    get titleDeliveryAddress() {
        return browser.$('//*[text()="Delivery Address"]');
    }
    
    get correctAddressNameSurname() {
        return browser.$('//*[text()="John Goodman"]');
    }

    get correctAddressStreetCityStateCode() {
        return browser.$('//*[text()="sunset bv, Los Angeles, California, 00000"]');
    }

    get correctAddressCountry() {
        return browser.$('//*[text()="United States"]');
    }

    get correctPhoneNumber() {
        return browser.$('//*[text()=" 1234567891"]');
    }

    get correctProductName() {
        return browser.$('//mat-cell[@class = "mat-cell cdk-cell cdk-column-product mat-column-product ng-star-inserted"]');
    }

    get correctPrice() {
        return browser.$('//mat-cell[@class = "mat-cell cdk-cell cdk-column-price mat-column-price ng-star-inserted"]');
    }

    get correctQuantity() {
        return browser.$('//mat-cell[@class = "mat-cell cdk-cell cdk-column-quantity mat-column-quantity ng-star-inserted"]');
    }

    get correctTotalPrice() {
        return browser.$('//mat-cell[@class = "mat-cell cdk-cell price-align cdk-column-total-price mat-column-total-price ng-star-inserted"]');
    }

    get endItemPrice() {
        return browser.$('//tr[@class = "mat-row"]//*[contains(text(), "21.99")]');
    }

    get endDeliveryPrice() {
        return browser.$('//tr[@class = "mat-row"]//*[contains(text(), "0.50")]');
    }

    get endPromotionPrice() {
        return browser.$('//tr[@class = "mat-row"]//*[contains(text(), "0.00")]');
    }
    
    get endTotalPrice() {
        return browser.$('//tr[@class = "mat-row"]//*[contains(text(), "22.49")]');
    }
}

module.exports = OrderCompletionPage;

// div[contains(text()="Delivery Address")]

// h1[contains(text(),"Your Basket")]

// [@_ngcontent-ohr-c235][contains(text(), "OWASP Juice Shop Mug")]


// mat-cell[@_ngcontent-ohr-c235]

// mat-cell[text()=" 1234567891"]

// mat-cell[@class = "mat-cell cdk-cell cdk-column-product mat-column-product ng-star-inserted"]

// tr[@class = "mat-row"][contains(text(), "21.99")]