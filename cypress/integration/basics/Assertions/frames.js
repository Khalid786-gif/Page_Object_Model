describe('Test suite', () => {



    it('Test cases', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


        cy.frameLoaded("#courses-iframe");

        cy.iframe().contains('Blog').click();



        
    });
});