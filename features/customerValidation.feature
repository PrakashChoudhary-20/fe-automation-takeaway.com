Feature: Customer validation feature
  As a user,
    I should see validation errors while filling up the delivery detail form.

  Scenario: Delivery detail form validations - for empty cart
    Given I open delivery detail page with empty cart
    When I confirm my order
    Then I should see a validation error that my cart is empty
    And I am on delivery details page
