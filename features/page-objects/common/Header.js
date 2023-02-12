const SideMenu = require("./SideMenu");
class Header {
    
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

    get buttonLogout(){
        return browser.$('//button[@id="navbarLogoutButton"]');
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
        return browser.$('//mat-icon[contains(text(),"language")]');
    }

    get buttonOrdersAndPayment(){
        return browser.$('//button[@aria-label="Show Orders and Payment Menu"]');
    }

    get buttonPrivacyAndSecurity(){
        return browser.$('//button[@aria-label="Show Privacy and Security Menu"]');
    }

    get buttonOrderHistory(){
        return browser.$('//button[@aria-label="Go to order history page"]');
    }

    get buttonRecycle(){
        return browser.$('//button[@aria-label="Go to recycling page"]');
    }

    get buttonSavedAddresses(){
        return browser.$('//button[@aria-label="Go to saved address page"]');
    }

    get buttonPaymentOptions(){
        return browser.$('//button[@aria-label="Go to saved payment methods page"]');
    }

    get buttonDigitalWallet(){
        return browser.$('//button[@aria-label="Go to wallet page"]');
    }
}

module.exports = Header;

