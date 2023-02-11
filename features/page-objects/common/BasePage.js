const Header = require('./Header');
const Footer = require('./Footer');

class BasePage {
   
    constructor() {
    
    this.header = new Header();
    
    this.footer = new Footer();

    }

    get buttonDismissPopUp() {
        return browser.$('//span[text() = "Dismiss"]');
    }
  
    get buttonDismissCookies() {
        return browser.$('[aria-label="dismiss cookie message"]');
    }
    
    get popUpReloadAfterLangChange() {
        return browser.$('//*[text()="Force page reload"]')
    }

    get popUpAfterLanguageChange() {
        return browser.$('.mat-simple-snack-bar-content');
    }

    async waitForLoad() {
        await this.header.buttonAccount.waitForDisplayed();
        await this.footer.paginationTextBoxItemsInPage.waitForDisplayed();
        //this.footer.paginationSelectionPageSize().waitUntil(isDisplayed);
        // await this.popUpReloadAfterLangChange.waitForDisplayed();
        await this.popUpReloadAfterLangChange.waitForDisplayed({reverse: true}); //check documentation
        await this.popUpAfterLanguageChange.waitForDisplayed({reverse: true});
    }

    async waitForLangChangePopUp() {
       await this.popUpAfterLanguageChange.waitForDisplayed();
       await this.popUpAfterLanguageChange.waitForDisplayed({reverse: true});
    }

    async safeClickOnElementUntilOtherIsVisible(element1, element2) {
        element1.click();
        browser.pause(200);
        while (!element2.isDisplayed && element1.isClickable) {
            //if (element1.isClickable && element1.isDisplayed) {
                element1.click();

            //}
        }
    }
}

module.exports = BasePage;
