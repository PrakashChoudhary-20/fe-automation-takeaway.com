
/*
    Page class for Delivery detail page of the website, contents of the file:
        - Getter methods for delivery detail page elements
        - Supporting methods to encapsulate various interactions on the page
*/

class DeliveryDetailsPage {

    // getting all the input fields available on the web page
    get inputAddress () { return $('#iaddress') }
    get inputCity () { return $('#itown') }
    get inputName () { return $('#isurname') }
    get inputEmail () { return $('#iemail') }
    get inputPhone () { return $('#iphonenumber') }
    get inputCompanyName () { return $('#icompanyname') }
    get inputRemark () { return $('#iremarks') }
    get dropdownPayValue () { return $('#ipayswith') }
    get placeOrder () { return $('.button_form.cartbutton-button') }
    get validationError () { return $('.notificationalert') }
    get deliveryOption () { return $('#ideliverytime') }
    get finalPrice () { return $('.cart-sum-price') }
    get priceSelection () { return $('#ipayswith') }
    get inputpostCode () { return $('#ipostcode') }

    // Function to fill the form with customer details
    fillCustomerDetails (customer) {
        this.inputAddress.setValue(customer.address)
        this.inputpostCode.setValue(customer.postCode)
        this.inputCity.setValue(customer.city)
        this.inputName.setValue(customer.name)
        this.inputPhone.setValue(customer.phone)
        this.inputEmail.setValue(customer.email)
        browser.pause(1000)
        this.deliveryOption.getValue() === 'asap' ? '' : this.deliveryOption.selectByValue('asap')
    }
}

export default new DeliveryDetailsPage();
