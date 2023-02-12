const BasePage = require("./common/BasePage");

class SavedAddressesPage extends BasePage {
    constructor() {
        super();
    }

    get title() {
        return browser.$('//h1');
    }

    get buttonAddNewAddress() {
        return browser.$('[aria-label="Add a new address"]');
    }
}

module.exports = SavedAddressesPage;


