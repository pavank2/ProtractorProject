Feature: Login to the website

        
Scenario: Login to the website
          Given Navigate to specified url
          Then Enter credentials
          Then Click on Login
         

Scenario: Select items and checkout
          Given User is on Home Page
          Then Select items on Page
          Then Proceed to CheckOut Page

Scenario: Remove one item and checkout
          Given User is on Checkout Page
          Then Remove item from Cart
          Then Checkout 


