Feature: Scenario 3

    Scenario: Make a purchase
        Given I open landing page
        And I have logged in
        When I press on Account button
        And I click on 'Orders and Payment' option
        And I click on 'My payment Options' option
        And I click add new card button
        And I fill in credit card information and submit
            | Name         | Card Number      | Expiry Month | Expiry year |
            | John Goodman | 1234567812345678 |            4 |        2085 |
        And I see confirmation message about card info
        And I press on Account button
        And I click on 'Orders and Payment' option
        And I click on 'My Saved Addresses' option
        And I click on new Address button
        And I add address information and submit
            | Country       | United States |
            | Name          | John Goodman  |
            | Mobile Number |    1234567891 |
            | Zip Code      |         00000 |
            | Address       | sunset bv     |
            | City          | Los Angeles   |
            | State         | California    |
        And I add 'OWASP Juice Shop Mug' to basket and checkout
        And I choose saved address
        And I choose 'One day delivery'
        # And I choose saved card
        # And I place order and pay
        # Then I am in order completion page
        # And I see correct order address
        # And I see order details
        #     | Product              | Price    | Quantity | Total Price    |
        #     | OWASP Juice Shop Mug | 21.99    | 1        | 21.99          |
        # And I see end total price
        #     | Items       | 21.99   |
        #     | Delivery    | 0.50    |
        #     | Promotion   | 0.00    |
        #     | Total price | 22.49   |