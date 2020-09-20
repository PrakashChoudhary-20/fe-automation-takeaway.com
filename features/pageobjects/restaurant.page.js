
/*
    Page class for Restaurant page of the website, contents of the file:
        - Getter methods for restaurant page elements
        - Supporting methods to encapsulate various interactions on the page
*/

class RestaurantPage {
    get pageIdentifier () { return $('.restaurant-name') }
    get dishes () { return $$('.meal-container') }
    get addToCart () { return $('.cartbutton-button.cartbutton-button-sidedishes.add-btn-icon') }
    get placeOrderBtn () { return $('.basket__order-button.cartbutton-button') }
    get orderBtnDisabled () { return $('.basket__order-button.cartbutton-button.btn-disabled')}

    /*
        Select dishes function - selects an item from the menu items
        Website presents 2 type of menu items
            1. Can be added directly by clicking on them
            2. Presents a sub menu item
        Below function ensures if sub-menu is displayed then the item is added to cart from sub-menu
    */
    selectDishes () {
        let dishes = this.dishes
        dishes[0].click()
        if(this.addToCart.isDisplayed()) {
            this.addToCart.click()
        }
    }

    // Function to check if minimum order amount is reached and the order button is enabled
    isOrderEligible () {
        return this.orderBtnDisabled.isDisplayed() ? false : true
    }

    // Function to place an order
    placeOrder () {
        this.placeOrderBtn.click()
    }

}

export default new RestaurantPage();
