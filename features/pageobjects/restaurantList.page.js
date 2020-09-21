
/*
    Page class for Restaurant list page of the website, contents of the file:
        - Getter methods for restaurant list page elements
        - Supporting methods to encapsulate various interactions on the page
*/

class RestaurantListPage {
    get availableRestaurantCount () { return $('.restaurant-amount') }
    get restaurantList () { return $$('.js-restaurant.restaurant.restaurant__open')}

    restaurantByName (name) { return $(`*=${name}`) }

    validateRestaurantAvailableForAddress () {
        this.availableRestaurantCount.waitForDisplayed({ timeout: 2000 })
        return this.availableRestaurantCount.getText()
    }

    // Function to select a restaurant by Name
    selectRestaurant (restaurantName) {
        !restaurantName ? this.restaurantList[1].click() : this.restaurantByName(restaurantName).click()
    }
}

export default new RestaurantListPage();
