const BasePage = require("./common/BasePage");
class ProductPage extends BasePage {
    constructor() {
        super();
    }
    
    get titleAllProducts() {
        return browser.$('//div[*[@id = "search-result-heading"]]//div[text()="All Products"]'); // Homework
    }

    // Price container = //div[@class= "item-price"]//span[contains(text(),"1.99")]
    // Name container = //div[@class= "item-name"][contains(text(),"Juice")]
    //Box for both is = //mat-card[descendant-or-self::div[@class= "item-name" and contains(text(),"Juice")]][descendant-or-self::div[@class= "item-price"]//span[contains(text(),"1.99")]]
    // button  //span[text() = "Add to Basket"]
    async buttonAddToCart(item, price){
        return browser.$(`//mat-card[descendant-or-self::div[@class= "item-name" and contains(text(),"${item}")]][descendant-or-self::div[@class= "item-price"]//span[contains(text(),"${price}")]]//span[text() = "Add to Basket"]`);
    }

    async snackBarItemAdded(item){
       return browser.$(`//*[@class="mat-simple-snack-bar-content"][contains(text(),"${item}")][contains(text(),"to basket")]`) ; 
    }
}

module.exports = ProductPage;
