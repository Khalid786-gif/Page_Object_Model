Feature: Simple Form

    Scenario: To validate simple form

        Given user opens the simple form url

        When user enters firstname, lastname, email, message

        And clicks on submit

        Then an alert saying sucessful message has to be displayed.



