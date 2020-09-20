/*
    This file contains all the execution steps performed on Resturant list page
*/

import { Given, When, Then } from 'cucumber';
import RestaurantListPage from '../pageobjects/restaurantList.page';        // import Restaurant List page class

const restaurantList = RestaurantListPage;                                  // object of page class

When(/^I am on the restaurant list page$/, () => {
    let restaurantCount = restaurantList.validateRestaurantAvailableForAddress()
    expect(parseInt(restaurantCount)).to.be.greaterThan(0)
})

When(/^I select a restaurant from the list$/, () => {
    restaurantList.selectRestaurant()
    browser.pause(2000)
})