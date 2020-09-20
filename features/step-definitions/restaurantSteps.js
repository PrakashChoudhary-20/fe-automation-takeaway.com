/*
    This file contains execution steps to be performed on Restaurant page
*/

import { Given, When, Then } from 'cucumber';
import RestaurantPage from '../pageobjects/restaurant.page';            // import page class for Restaurant page

const restaurant = RestaurantPage;                                      // creating object of page class

When(/^I am on restaurant page$/, () => {
    expect(restaurant.pageIdentifier.isDisplayed()).to.be.true
})

When(/^I add dishes to my card$/, () => {
    restaurant.selectDishes()
})

/*
    Using a loop in this step to
        - verify if the items added in the cart has reached minimum amount required to place an order
    Until minimum amount required limit is reached - below code will continue to add dishes to the cart before placing an order
*/
When(/^I place the order$/, () => {
    while(!restaurant.isOrderEligible()) {
        restaurant.selectDishes()
    }
    restaurant.placeOrder()
    browser.pause(2000)
})