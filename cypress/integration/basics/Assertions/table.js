describe('Test suite for table', () => {

    it('test case on table', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.xpath("(//table[@id='product'])[1]/tbody/tr[6]/td[2]").should('include.text','Learn JMETER from Scratch - (Performance + Load) Testing Tool')

    });


    it('Test case based on assertions', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.xpath("(//table[@id='product'])[1]/tbody/tr[6]/td").each(($td)=>{

            if($td.text().includes('Learn JMETER from Scratch')){

                cy.wrap($td).next().then((num)=>{

                    cy.log(num)
                })
            }

        



        })



        
    });
});