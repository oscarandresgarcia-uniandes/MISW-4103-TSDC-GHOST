Feature: EditUser

    @user1 @web
    Scenario: Como usuario quiero editar la informacion de mi perfil
      Given I navigate to page "http://localhost:2368/ghost/#/signin"
      And I wait for 2 seconds
      When I enter email "<USERNAME>"
      And I enter password "<PASSWORD>"
      And I click sign in
      And I wait for 5 seconds
      And I click userpic
      And I wait for 1 seconds
      And I click your profile
      And I wait for 1 seconds
      And I enter user name "Martguerita Fairbrass"
      And I wait for 10 seconds
      And I enter location "Cancas"
      And I wait for 10 seconds
      And I click save user changes
      And I wait for 2 seconds

    