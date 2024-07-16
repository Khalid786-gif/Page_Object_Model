describe('Test suite', () => {



    it('Test case of date picker inside iframe', () => {

        cy.visit("https://jqueryui.com/datepicker/");
        
        cy.frameLoaded('.demo-frame')
        
        cy.iframe().xpath("//*[@id='datepicker']").type('01/07/2024{enter}')
        
    });
});