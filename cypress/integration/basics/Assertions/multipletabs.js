///<reference types='cypress'/>


describe('Test suite', () => {

    it('Test case on multiple tabs', () => {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.xpath("//*[@id='opentab']").invoke('removeAttr','target').click()

        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.contains('Access all our Courses').click();
        })
        
    });
});