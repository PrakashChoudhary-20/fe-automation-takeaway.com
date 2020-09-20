import { Given, When, Then } from 'cucumber';
import OrderConfirm from '../pageobjects/orderConfirm.page';

const order = OrderConfirm;

Then(/^I should see my order was successfully placed$/, () => {
    expect(order.pageIdentifier).to.equal('Thank you for your order!')
})

Then(/^I should see the order reference number$/, () => {
    expect(order.orderId.isDisplayed()).to.be.true;
    expect(order.orderId.getText()).to.not.be.empty;
})