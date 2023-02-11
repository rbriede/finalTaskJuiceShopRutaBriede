const BasePage = require("../common/BasePage");

class LoginPage extends BasePage {
    //Navigation  bar is the one line with sign in and contact button.
        //It seems unnecesarry to have so much classes just for 2 differet elements.
        //If you have 1 page and 3 tests then it will be faster to write every thing in one page but we want to have a nice clean project where everything is where it belongs
        //https://www.w3schools.com/xml/xpath_syntax.asp
        //https://www.w3schools.com/cssref/css_selectors.asp
    //you can define element as a function that returns element by giving path parameter
    //  //dollar sign means that it returns an element
    constructor() {
        super();
    }

    get title() {
        return browser.$('//h1[text()="Login"]');
    }

    get inputEmail() {
        return browser.$('#email');
    }

    get inputPassword() {
        return browser.$('#password');
    }
    
    get linkForgotPasword() {
        return browser.$('[href="#/forgot-password"]');
    }
    
    get buttonLogIn() {
        return browser.$('button#loginButton span.mat-button-wrapper');
    }
    
    get buttonLogInGoogle() {
        return browser.$('button#loginButtonGoogle');
    }
    
    get checkboxRememberMe(){
        return browser.$('[for="rememberMe-input"]');
    }

    get notYetACustomerRegister() {
        return browser.$('[href="#/register"]');
    }

}

module.exports = LoginPage;
