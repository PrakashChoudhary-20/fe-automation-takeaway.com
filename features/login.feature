Feature: Login feature
    As a user,
      I should be able to login and see appropriate error messages for invalid login details

  Scenario: Login validation error - empty login form
    Given I am on the home page
    When I select login option from hamburger menu
    And I select login button with empty form
    Then I should see a validation error
