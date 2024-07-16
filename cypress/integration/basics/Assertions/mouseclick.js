///<reference types='cypress' />


describe('Test suite', () => {
    it.skip('Testr case for right click', () => {


        cy.visit("https://demo.guru99.com/test/simple_context_menu.html")
        cy.xpath("//span[text()='right click me']").rightclick()
        cy.reload()
        cy.xpath("//button").dblclick();
        
    });


    it.skip('Test case on mouse hover', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#top");
        cy.get("#mousehover").invoke('show');
        cy.contains('Top').click({force:true});
        cy.url().should('include','top')
        
    });

    it('Test case on mouse hover 2 method', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#top");
        cy.get("#mousehover").trigger('mouseover');
        cy.contains('Top').click({force:true})
        
    });
});