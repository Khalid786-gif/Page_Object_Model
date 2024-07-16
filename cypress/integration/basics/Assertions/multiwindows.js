describe('Test suite', () => {

    it('Test case for multiple window', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        cy.get('#openwindow').invoke('removeAttr','onclick').click();

        cy.origin('https://www.qaclickacademy.com/',()=>{

            cy.visit('')

            cy.contains('Access all our Courses').click();

            
        })
        
    });
});