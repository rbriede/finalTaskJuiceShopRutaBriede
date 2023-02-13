const BasePage = require("./common/BasePage");
class ProductPage extends BasePage {
    constructor() {
        super();
    }
    
    get addMugToTheCart() {
        return browser.$('//span[text()="Add to Basket"]')
    }

    get messageAboutProductAddedToTheCart() {
        return browser.$('//*[@class = "mat-simple-snack-bar-content"]');
    }
}

module.exports = ProductPage;
