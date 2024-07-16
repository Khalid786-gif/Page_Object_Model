///<reference types="cypress"/>


describe('Test suite', () => {



    it('Test cases1', () => {
          cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1")
         
          cy.xpath("//button[text()='Start']").click()
         
    });



    it('Test case 2', () => {
        cy.visit("https://the-internet.herokuapp.com/tables");

        cy.xpath("//table[@id='table1']/tbody/tr[4]/td[3]");
        
        cy.xpath("//table[@id='table2']/tbody/tr[2]/td[6]");
    });



    it('Test case 3', () => {
        cy.visit("https://the-internet.herokuapp.com/windows");

        cy.xpath("//a[text()='Click Here']").invoke('removeAttr','target').click();
    });



    it('Test case 4', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.xpath("//button[text()='Click for JS Alert']").click();

        cy.on('window:alert',()=>{
            return true;
        })

        
        cy.xpath("//*[text()='Click for JS Confirm']").click();

        cy.on('window:alert',()=>{
            return true;
        })


        
    });

});