Feature: Iniciar una conversación
 
@user1 @web   
Scenario: Crear nueva pages publicada 
Given I navigate to page "http://localhost:2370/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  And I click pages
  And I wait for 3 seconds 
  And I click new_pages
  And I wait for 3 seconds 
  And I enter title_pages "Pruebas Automatizadas MISO Publicado"
  And I wait for 2 seconds
  And I click new_description_pages
  And I wait for 3 seconds 
  And I enter description_pages "Uniandes :D"
  And I wait for 2 seconds
  And I click save_new_pages
  And I wait for 6 seconds
  And I click confirm_new_pages
  And I wait for 6 seconds
  And I click reconfirm_new_pages
  And I wait for 6 seconds
  And I click return_new_pages
  And I wait for 6 seconds
  And I click return_new_pages
  And I wait for 6 seconds
 
