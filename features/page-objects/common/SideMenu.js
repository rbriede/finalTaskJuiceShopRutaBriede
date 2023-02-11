//since header has a sidemenu bar. we should also define separate class for it
class SideMenu {
    constructor() { //here we have to keep emtpy constructor. just for constructor sake
    } 

    get subtitleContact(){
        return browser.$('//h3[text()="Contact"]');
    }

    get menuOptionCustomerFeedback(){
        return browser.$('//span[@class="menu-text truncate"][normalize-space(text())="Customer Feedback"]');
    }
    
    get menuOptionAboutUs(){
        return browser.$('//span[@class="menu-text truncate"][normalize-space(text())="About Us"]'); // Homework
    }
    
    get textBoxAppVersion(){
        return browser.$('div.appVersion'); // Homework
    }

    async menuOption(option){
        return browser.$(`//mat-nav-list[@role="navigation"]/a//span[contains(@class, "menu-text")][contains(text(),"${option}")]`);
    }

    async waitForLoad() {
        this.subtitleContact.waitForDisplayed();
        this.textBoxAppVersion.waitForDisplayed();
    }
}

module.exports = SideMenu;
//Go back to header