/*
    This file contains execution steps to be performed on Delivery detail page
*/

import { Given, When, Then } from 'cucumber';

import DeliveryDetailsPage from '../pageobjects/deliveryDetail.page';           // import page class for delivery detail page
import HomePage from '../pageobjects/home.page';                                // import page class for Home
import * as data from '../test-data/data';                                      // import static variables from test data file

const deliveryDetails = DeliveryDetailsPage;
const home = HomePage;

Given(/^I open delivery detail page with empty cart$/, () => {
    browser.url('https://www.thuisbezorgd.nl/en/checkout-order-steakhousedse#')
    home.homepageSetup()
    browser.pause(5000)
})

When(/^I am on delivery details page$/, () => {
    $('h2*=Where do you want your order to be delivered?').isDisplayed()
})

When(/^I fill in the customer details with asap delivery option$/, () => {
    deliveryDetails.fillCustomerDetails(data)
    browser.pause(5000)
})

When(/^I select closest price amount from price dropdown$/, () => {
    let amount = deliveryDetails.finalPrice.getText()
    deliveryDetails.priceSelection.click()
    deliveryDetails.priceSelection.$$('.pulldown')[1].click()
})

When(/^I confirm my order$/, () => {
    deliveryDetails.placeOrder.click()
})

Then(/^I should see a validation error that my cart is empty$/, () => {
    expect(deliveryDetails.validationError.getText()).to.equal(data.emptyCart)
})