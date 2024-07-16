class Login_po{

    EnterURL(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    Login(){

        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='password']").type("admin123");
        cy.get("button.oxd-button").click();
    }

    ForgotPassword(){
        cy.xpath('//p[@class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click();
    }
}

export default Login_po;