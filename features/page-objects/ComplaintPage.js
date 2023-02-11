const BasePage = require("./common/BasePage");
class ComplaintPage extends BasePage {
    constructor() {
        super();
    }

    get title(){
        return browser.$('//h1[text()="Complaint"]');
    }
    
    get inputCustomerEmail(){
        return browser.$('[aria-label="Text field for the mail address of the user"]');
    }
    
    get textAreaMessage(){
        return browser.$('#complaintMessage');
    }
    
    get textAreaLabel(){
        return browser.$('//textarea[@id="complaintMessage"]/following-sibling::span//mat-label');
    }
    
    get attachment(){
        return browser.$('#file');
    } 
    
    get buttonSubmitDisabled(){
        return browser.$('button#submitButton span');
    }

    get getButtonSubmitEnabled() {
        return browser.$('button#submitButton span.mat-button-wrapper');
    }
    
    get unfilledMessageField(){
        return browser.$('textarea[aria-describedby*="mat-error"]')
    }
    
    get confirmationTextArea(){
        return browser.$('//div[@class = "confirmation"]')
    }
    

    async waitForLoad() {
        await this.title.waitForDisplayed();
        await this.inputCustomerEmail.waitForDisplayed();
        await this.buttonSubmitDisabled.waitForDisplayed();
        await this.textAreaMessage.waitForDisplayed();
        await this.attachment.waitForDisplayed();
    }
}

module.exports = ComplaintPage;
