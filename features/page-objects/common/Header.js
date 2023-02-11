const SideMenu = require("./SideMenu");
class Header {
    //since header has a navigaion bar. we should also define separate object for it
    //go to SideMenu and define it

    //Navigation  bar is the one line with sign in and contact button.
        //It seems unnecesarry to have so much classes just for 2 differet elements.
        //If you have 1 page and 3 tests then it will be faster to write every thing in one page but we want to have a nice clean project where everything is where it belongs
        //https://www.w3schools.com/xml/xpath_syntax.asp
        //https://www.w3schools.com/cssref/css_selectors.asp
    //you can define element as a function that returns element by giving path parameter
    //  //dollar sign means that it returns an element
    constructor() {
        this.sideMenu = new SideMenu();
    }

    get buttonBurgerMenu(){
        return browser.$('//button[@aria-label="Open Sidenav"]');
    }
    
    get buttonAccount(){
       return browser.$('//button[@id="navbarAccount"]//span[contains(@class,"button-wrapper")]'); 
    }

    get buttonUserAccount(){
        return browser.$('//button[@aria-label="Go to user profile"]');
    }
    
    get buttonLogin(){
        return browser.$('//button[@id="navbarLoginButton"]//span');
    }
    
    get buttonSearch(){
        return browser.$('//mat-icon[contains(text(),"search")]');
    }
    
    get buttonBasket(){
        return browser.$('[routerlink="/basket"] [role="img"]');
    }

    get buttonCloseSearch(){
       return browser.$('//mat-icon[contains(text(),"close")]'); 
    }
    
    get searchBar(){
       return browser.$('#mat-input-0');//.mat-form-field input //in inspect window right click on element and break on modification 
    }
    
    get logo(){
        return browser.$('//img[@class="logo"]');
    }
    
    get languageOptionEnglish(){
        return browser.$('//div[@_ngcontent-ffp-c258][contains(text(), "English")]');
    }
    
    get selectionLanguage(){
        return browser.$('//mat-icon[contains(text(),"language")]'); //this is homework
    }
}

module.exports = Header;
//Go back to basePage