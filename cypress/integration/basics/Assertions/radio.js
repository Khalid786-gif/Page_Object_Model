////<reference type='cypress'>


describe('test suite for radio button', () => {



    it('Test case for radio button', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('input[value="radio1"]').check().should('be.visible').and('be.checked').and('have.attr','type','radio')
        cy.get('input[value="radio2"]').check().should('be.visible').and('be.checked').and('have.attr','class','radioButton')
        cy.get('input[value="radio3"]').check().should('be.visible').and('be.checked').and('have.attr','name','radioButton')
        
    });



    it.only('Test case for check box', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.xpath("//label/input[@type='checkbox']").check().should('be.checked');
        cy.xpath("//label/input[@type='checkbox']").uncheck().should('not.be.checked');

        
    });
});