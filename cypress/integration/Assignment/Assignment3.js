describe('Assignment 3', () => {
    it('Test case 1', () => {

        cy.visit("https://the-internet.herokuapp.com/");

        cy.title().should('eq','The Internet');

        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1")

        cy.xpath("//div[@id='finish']").should('not.be.visible')

        cy.visit("https://www.google.com/")

        cy.get("//textarea[@class='gLFyf']").type("Masai").should('have.value','Masai');
        
    });
});