const BasePage = require("../common/BasePage");

class RegisterPage extends BasePage {
    constructor() {
        super();
    }

    get title(){
        return browser.$('//h1[text()="User Registration"]');
    }
    
    get inputEmail(){
        return browser.$('#emailControl');
    }
    
    get inputPassword(){
        return browser.$('#passwordControl');
    }
    
    get inputPasswordConfirm(){
        return browser.$('#repeatPasswordControl');
    }
    
    get switchShowPasswordAdvice() {
        return browser.$('//span[text()="Show password advice"]');
    }
    
    get selectionSecurityQuestion() {
        return browser.$('[name="securityQuestion"]');
    }

    get selectionSecurityQuestionElderSibling() {
        return browser.$('//span[contains(text(),"Your eldest siblings middle name?")]');
    }
    
    get inputAnswer(){
        return browser.$('#securityAnswerControl');
    }
    
    get buttonRegister(){
        return browser.$('button#registerButton');
    }

    get messageEmailMustBeUnique(){
        return browser.$('//div[@class="error"]');
    }
    
    get alreadyACustomerLoginLink(){
        return browser.$('href="#/login"');
    }

    // get securityAnswerReadyForInput(){
    //     return browser.$('[placeholder="Answer to your security question"][normalize-space(text())=" Your eldest siblings middle name?"]');
    // }

    // async optionSecurityQuestion(option) {
    //     let element = await browser.$(`//span[@class="mat-option-text"][normalize-space(text())="${option}"]`);
    //     return element;
    // }

    // async optionSecurityQuestionText(option){
    //     return browser.$(`//*[@name="securityQuestion"] //*[contains(@class, "ng-star-inserted")]//span[contains(text(), '${option}')]`);
    // }
}

module.exports = RegisterPage;
