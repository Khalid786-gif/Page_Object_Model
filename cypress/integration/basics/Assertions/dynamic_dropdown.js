describe('Test suite', () => {




    it('test case for dynamic drop down using each method', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.ui-autocomplete-input').type('in');
        cy.get('.ui-menu-item').each(($sug)=>{
            if($sug.text()=="Finland"){
                cy.wrap($sug).click();
            }
        }) 
    });


    it.only('test case for dynamic drop down using contains method', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.ui-autocomplete-input').type('in');
        cy.get('.ui-menu-item').contains('India').click();

        
    });




});