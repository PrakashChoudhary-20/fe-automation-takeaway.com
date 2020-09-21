/*
    This file contains execution steps related to Home page
*/

import { Given, When, Then } from 'cucumber';           // default imports from cucumber module
import HomePage from '../pageobjects/home.page';        // import page class

const home = HomePage;                                  // Object of page class

Given(/^I am on the home page/, () => {
    browser.url('https://thuisbezorgd.nl/en/​')
    home.homepageSetup()
    expect(home.pageIdentifier.getText()).to.equal('Time to order food')
});

When(/^I enter postcode in postcode field$/, () => {
    home.selectArea('8888', '8888 Alpha')
});

When(/^I select login option from hamburger menu$/, () => {
    home.menu.click()
    home.optionLogin.click()
})

When(/^I select login button with empty form$/, () => {
    browser.pause(2000)
    home.loginBtn.click()
})

Then(/^I should see a validation error$/, () => {
    expect(home.loginError.getText()).to.equal('Please fill out your username (your email address)')
})