Feature: Login

    Scenario Outline: validating on HRM with multiple sets of data or Multiple user login

        Given user enters the url

        When user enters username as <username>

        And user enters password as <password>

        And clicks on Login

        Then Login shoul be successfull

        Examples:
            | username | password |
            | Admin    | admin123 |
            | admin    | admin423 |
            | ddmin    | bamin123 |



