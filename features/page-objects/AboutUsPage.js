const BasePage = require("./common/BasePage");

class ComplaintPage extends BasePage {
    constructor() {
        super();
    }

    get title() {
        return browser.$('//h1[text()="About Us"]');
    }
    
    get subtitleCustomerFeedback(){
        return browser.$('//h3//span[text()="Customer Feedback"]');
    }
    
    get corporateHistoryDescription(){
        return browser.$('p.text-justify');
    }

    async waitForLoad() {
        await this.title.waitForDisplayed();
        await this.subtitleCustomerFeedback.waitForDisplayed();
        await this.corporateHistoryDescription.waitForDisplayed();
    }
}

module.exports = ComplaintPage;
