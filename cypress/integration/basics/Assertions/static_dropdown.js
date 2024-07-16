describe('Test Suite', () => {




    it('Test cases using dropdown via value', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3')
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1')
        cy.get('#dropdown-class-example').select('').should('have.value','')

    });

    it('Test cases using dropdown via text', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3')
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
        cy.get('#dropdown-class-example').select('').should('have.value','')

    });


    it.only('Test cases using dropdown via index', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#dropdown-class-example').select(1).should('have.value','option1')


        
    });
});