
/*
    Page class for Home page of the website, contents of the file:
        - Getter methods for Home page elements
        - Supporting methods encapsulating various interactions on the page
*/

class HomePage {
    get pageIdentifier () { return $('.header__title') }
    get inputAddress () { return $('#imysearchstring') }
    get autoCompleteDropdown () { return $('.lp__place.notranslate.selected') }
    get subAddress () { return $('#reference') }
    get locale () { return $('#locale') }
    get languageSelect () { return $('.language-country-modal').$$('.list-container')[1].$('*=English') }
    get langList () { return $('.list-container')[1] }
    get cookieAcceptBtn () { return $('.cc-banner__btn-ok') }
    zipAutocomplete (postCode) { return $('.popupoptions').$(`*=${postCode}`) }
    get menu () { return $('.menu') }
    get optionLogin () { return $('[data-click="login"]') }
    get loginBtn () { return $('.button_form.button-cta-small') }
    get loginError () { return $('#notification') }

    homepageSetup () {                          // Preparing homepage for execution
        this.acceptCookies()
        this.changeLanguage()
    }

    acceptCookies () {                          // Function to interact with Accept cookie banner
        this.cookieAcceptBtn.click()
    }

    changeLanguage () {                         // Function to change web page language to English
        this.locale.click();
        this.languageSelect.click();
    }

    selectArea (postCode, finalPostCode) {      // Function to input post code & select suggested address in dropdown
        this.inputAddress.setValue(postCode)
        this.autoCompleteDropdown.click()
        this.zipAutocomplete(finalPostCode).click()
    }
}

export default new HomePage();
