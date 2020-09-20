
/*
    Page class for order confirmed page of the website, contents of the file:
        - Getter methods for confirmed order page elements
*/
class OrderConfirm {
    get pageIdentifier () { return $('.css-c1ispf').getText() }
    get orderId () { return $('.order-purchaseid') }
}

export default new OrderConfirm();
