Feature: Order Food
    As a user,
      I can order food from restaurant listed

  @e2e_case1
  Scenario: Verify successful order with selecting paying option as the next nearest available amount
    Given I am on the home page
    When I enter postcode in postcode field
    And I am on the restaurant list page
    And I select a restaurant from the list
    And I am on restaurant page
    When I add dishes to my card
    And I place the order
    When I am on delivery details page
    And I fill in the customer details with asap delivery option
    And I select closest price amount from price dropdown
    When I confirm my order
    Then I should see my order was successfully placed
    And I should see the order reference number

  Scenario: Verify successful order with paying exact amount
    Given I am on the home page
    When I enter postcode in postcode field
    And I am on the restaurant list page
    And I select a restaurant from the list
    And I am on restaurant page
    When I add dishes to my card
    And I place the order
    When I am on delivery details page
    And I fill in the customer details with asap delivery option
    When I confirm my order
    Then I should see my order was successfully placed
    And I should see the order reference number