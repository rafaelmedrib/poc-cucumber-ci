Feature: Greeting

    Greets anyone

    Scenario: the one that the user is greeted
    Given a user called "Rafael"
    When the user calls the greeter
    Then the greeting should be "Hello, Rafael!"