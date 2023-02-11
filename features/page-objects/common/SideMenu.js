class SideMenu {
    constructor() { 
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
        return browser.$('div.appVersion'); 
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
