const { When } = require('@wdio/cucumber-framework');
const BasePage = require('../page-objects/common/BasePage');
const Header = require('../page-objects/common/Header');
const ProductPage = require('../page-objects/ProductPage');
const BasketPage = require('../page-objects/BasketPage');
const SelectAnAddressPage = require('../page-objects/SelectAnAddressPage');

When(/^I add 'OWASP Juice Shop Mug' to basket and checkout$/, async function() {
    this.basePage = new BasePage();
    this.header = new Header();
    this.productPage = new ProductPage();
    this.basketPage = new BasketPage();
    await this.basePage.header.buttonSearch.waitForDisplayed();
    await this.basePage.header.buttonSearch.click();
    await this.basePage.header.searchBar.waitForDisplayed();
    await this.basePage.header.searchBar.setValue('OWASP Juice Shop Mug');
    await browser.keys("Enter");
    await this.productPage.addMugToTheCart.waitForDisplayed();
    await this.productPage.addMugToTheCart.click();
    await this.productPage.messageAboutProductAddedToTheCart.waitForDisplayed();
    await this.productPage.messageAboutProductAddedToTheCart.waitForDisplayed({ reverse: true });
    await this.basePage.header.buttonBasket.waitForDisplayed();
    await this.basePage.header.buttonBasket.click();
    await this.basketPage.buttonCheckout.waitForDisplayed();
    await this.basketPage.buttonCheckout.click();
});

When(/^I choose saved address$/, async function() {
    this.selectAnAddressPage = new SelectAnAddressPage();
    await this.selectAnAddressPage.selectAnAddressRadioButton.waitForDisplayed();
    await this.selectAnAddressPage.selectAnAddressRadioButton.click();
    await this.selectAnAddressPage.buttonContinue.waitForDisplayed();
    await this.selectAnAddressPage.buttonContinue.click();    
});

When(/^I choose 'One day delivery'$/, async function() {
     
});