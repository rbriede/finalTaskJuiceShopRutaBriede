const { When } = require('@wdio/cucumber-framework');
const BasePage = require('../page-objects/common/BasePage');
const Header = require('../page-objects/common/Header');
const ProductPage = require('../page-objects/ProductPage');
const BasketPage = require('../page-objects/BasketPage');
const SelectAnAddressPage = require('../page-objects/SelectAnAddressPage');
const DeliverySpeedPage = require('../page-objects/DeliverySpeedPage');
const MyPaymentOptionsPage = require('../page-objects/MyPaymentOptionsPage');
const OrderCompletionPage = require('../page-objects/OrderCompletionPage');

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
    this.deliverySpeedPage = new DeliverySpeedPage();
    await this.deliverySpeedPage.selectOneDayDeliveryRadioButton.waitForDisplayed();
    await this.deliverySpeedPage.selectOneDayDeliveryRadioButton.click();
    await this.deliverySpeedPage.buttonContinue.waitForDisplayed();
    await this.deliverySpeedPage.buttonContinue.click();
});

When(/^I choose saved card$/, async function() {
    this.myPaymentOptionsPage = new MyPaymentOptionsPage();
    await this.myPaymentOptionsPage.selectSavedCardRadioButton.waitForDisplayed();
    await this.myPaymentOptionsPage.selectSavedCardRadioButton.click();
    await this.myPaymentOptionsPage.buttonContinue.waitForDisplayed();
    await this.myPaymentOptionsPage.buttonContinue.click();
});

When(/^I am in order completion page$/, async function() {
    this.orderCompletionPage = new OrderCompletionPage();
    let element = this.orderCompletionPage.titleThankYouForYourPurchase
    await element.waitForDisplayed();
    await expect(element).toHaveTextContaining("Thank you for your purchase!");
});

When(/^I see correct order address$/, async function() {
    this.orderCompletionPage = new OrderCompletionPage();
    let nameSurname = this.orderCompletionPage.correctAddressNameSurname
    await nameSurname.waitForDisplayed();
    await expect(nameSurname).toHaveTextContaining("John Goodman");
    let streetCityStateCode = this.orderCompletionPage.correctAddressStreetCityStateCode
    await streetCityStateCode.waitForDisplayed();
    await expect(streetCityStateCode).toHaveTextContaining("sunset bv, Los Angeles, California, 00000");
    let country = this.orderCompletionPage.correctAddressCountry
    await country.waitForDisplayed();
    await expect(country).toHaveTextContaining("United States");
    let phoneNumber = this.orderCompletionPage.correctPhoneNumber
    await phoneNumber.waitForDisplayed();
    await expect(phoneNumber).toHaveTextContaining("1234567891");
});

When(/^I see order details$/, async function(option) {
    this.orderCompletionPage = new OrderCompletionPage();
    let productName = this.orderCompletionPage.correctProductName
    await productName.waitForDisplayed();
    await expect(productName).toHaveTextContaining("OWASP Juice Shop Mug");
    let price = this.orderCompletionPage.correctPrice
    await price.waitForDisplayed();
    await expect(price).toHaveTextContaining("21.99");
    let quantity = this.orderCompletionPage.correctQuantity
    await quantity.waitForDisplayed();
    await expect(quantity).toHaveTextContaining("1");
    let totalPrice = this.orderCompletionPage.correctTotalPrice
    await totalPrice.waitForDisplayed();
    await expect(totalPrice).toHaveTextContaining("21.99");    
});

When(/^I see end total price$/, async function(option) {
    this.orderCompletionPage = new OrderCompletionPage();
    let itemPrice = this.orderCompletionPage.endItemPrice
    await itemPrice.waitForDisplayed();
    await expect(itemPrice).toHaveTextContaining("21.99");
    let deliveryPrice = this.orderCompletionPage.endDeliveryPrice
    await deliveryPrice.waitForDisplayed();
    await expect(deliveryPrice).toHaveTextContaining("0.50");
    let promotionPrice = this.orderCompletionPage.endPromotionPrice
    await promotionPrice.waitForDisplayed();
    await expect(promotionPrice).toHaveTextContaining("0.00");
    let finalTotalPrice = this.orderCompletionPage.endTotalPrice
    await finalTotalPrice.waitForDisplayed();
    await expect(finalTotalPrice).toHaveTextContaining("22.49");     
});

