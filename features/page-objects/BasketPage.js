const BasePage = require("./common/BasePage");

class BasketPage extends BasePage {
    constructor() {
        super();
    }

    get title(){
        return browser.$('//h1[contains(text(),"Your Basket")]');
    }
        // cells = //mat-cell[contains(text(), "Juice")]/following-sibling::mat-cell[contains(text(), "2.99")]
        // row = //mat-row[descendant-or-self::mat-cell[contains(text(), "Lemon Juice")]/following-sibling::mat-cell[contains(text(), "2.99")]]
    async item(name, price){
        return browser.$(`//mat-row[descendant-or-self::mat-cell[contains(text(), "${name}")]/following-sibling::mat-cell[contains(text(), "${price}")]]`);
    }   
}

module.exports = BasketPage;
