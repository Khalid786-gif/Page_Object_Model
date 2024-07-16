before(() => {
    cy.fixture('example').then((data)=>{
        globalThis.data=data;
    })
});

describe('Test suite', () => {
    it('Test case using data driven ', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[name='username']").type(data.username);
        
        cy.get("input[name='password']").type(data.password);
        
        cy.get("button.oxd-button").click();
        
    });
});