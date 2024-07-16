describe('Test suite', () => {


    it('Test case using Expect method', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("[name='username']").then(($username)=>{
            expect($username).to.have.attr('placeholder','Username')
            cy.wrap($username).type("Admin")
        });

        cy.get("[name='password']").then(($pass)=>{
            expect($pass).to.have.attr('placeholder','Password')
            cy.wrap($pass).type("admin123")
        });

        cy.get("button[type='submit']").then(($sub)=>{
            expect($sub).to.have.text(' Login ')
            cy.wrap($sub).click()
        });

        cy.wait(2000)

        cy.get('.oxd-userdropdown-name').click();
        cy.get(".oxd-dropdown-menu").find(".oxd-userdropdown-link").each(($options)=>{
            if($options.text()=='Logout'){
                cy.wrap($options).click()
            }
        });



        
    });
});