//1. first do regular class
//class BasePage {
//and do all the other stuff
//}

//at the end add export

//we have to import header from relative path
const Header = require('./Header');
const Footer = require('./Footer');

//import {Footer} from './Footer'

class BasePage {

    //we add constructor function so on class object creation it comes with given properties thawt will be elements or some other part of the page
    constructor() {
    //we know that each page has a header and footer
    //we have to import header from relative path
    //And now define header 
    this.header = new Header(); //go to header and define it
    //the same with footer
    this.footer = new Footer();
    //#cookieconsent:desc
    }

    //curretly we don't know about any function that we could use so no methods here

    get buttonDismissPopUp() {
        return browser.$('//span[text() = "Dismiss"]'); // this.buttonDismissPopUp = () => browser.$('//span[text() = "Dismiss"]');
    }
  
    get buttonDismissCookies(){
        return browser.$('[aria-label="dismiss cookie message"]');
    }
    
    get popUpReloadAfterLangChange(){
        return browser.$('//*[text()="Force page reload"]')
    }

    get popUpAfterLanguageChange(){
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
