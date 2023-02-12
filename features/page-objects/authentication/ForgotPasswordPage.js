const LoginPage = require("./LoginPage");

class ForgotPasswordPage extends LoginPage {
    constructor() {
        super();
    }

    get title() {
        return browser.$('//h1[text()="Forgot Password"]');
    }

    get inputEmailFPP() {
        return browser.$('//input[@id="email"]');
    }

    get securityQuestionField() {
        return browser.$('//div[@class="mat-form-field-infix ng-tns-c118-12"]')
    }

    get securityQuestionVisible() {
        return browser.$('[placeholder="Your eldest siblings middle name?"]');
    }

    get inputSecurityQuestionAnswer() {
        return browser.$('#securityAnswer');
    }

    get inputNewPassword() {
        return browser.$('#newPassword');
    }

    get inputRepeatNewPassword() {
        return browser.$('#newPasswordRepeat');
    }

    get buttonChangePassword() {
        return browser.$('button#resetButton');
    }

    get messagePasswordSuccesfullyChanged() {
        return browser.$('//div[@class="confirmation"]');
    }
}

module.exports = ForgotPasswordPage;