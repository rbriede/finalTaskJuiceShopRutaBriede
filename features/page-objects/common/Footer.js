class Footer {
    constructor() {
         
    }

    get title(){
        return browser.$('//h2[normalize-space(text())="OWASP Juice Shop"]');  
    }

    get paginationTextBoxTitle() {
        return browser.$('//div[normalize-space(text())="Items per page:');
    }
    
    get paginationSelectionPageSize(){
        browser.$('[aria-label="Items per page:"');
    }

    get paginationTextBoxItemsInPage(){
        return browser.$('div.mat-paginator-range-label');
    }
    
    get paginationPrevPage() {
        browser.$('path[d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"]'); 
    }
    
    get paginationNextPage() {
        browser.$('path[d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]');
    }
}

module.exports = Footer;

