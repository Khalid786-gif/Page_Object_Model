//<reference types="cypress" />



describe('Test suite', () => {


    it('Test cases using Assertions', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.url().should('include','AutomationPractice');
        cy.title('include','Practice Page');
        cy.get("input[name='show-hide']").should('be.visible');
        cy.get("input#hide-textbox").click();
        cy.get("input[name='show-hide']").should('not.be.visible');

        cy.get(".ui-autocomplete-input").type("Monday").should('have.value','Monday');

        cy.xpath("//*[@id='checkBoxOption1']").check().should('be.checked');

        cy.xpath("//*[@id='checkBoxOption1']").uncheck().should('not.be.checked')
    });


    it.only('In class Assignment', () => {

        cy.visit("https://automationteststore.com/")
        cy.xpath("//a[text()='Contact Us']").click();
        cy.get("#ContactUsFrm_first_name").type("Khalid");
        cy.get("#ContactUsFrm_email").type("bkhaidbusiness1234@gmail.com");
        cy.get("#ContactUsFrm_enquiry").type("Thank you for the best service, I really appreciate it.");
        cy.xpath("(//button[@type='submit'])[1]").click();
        cy.xpath("//p[contains(text(),'Your enquiry has been successfully')]").text().should('include','Your enquiry has been successfully');



        
    });








});