describe('Orange web login Test Suite', () => {




    it('Login Test case1', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='password']").type("admin123");
        cy.get("button.oxd-button").click();
        
    });


    it('FB Login Test Case', () => {
        cy.visit("https://www.facebook.com/")
        cy.get("input#email").type("dummy");
        cy.get("input#pass").type("dummy_pass");
        cy.get("button[name='login']").click();


    });



    it('Test cases using Relative x-path', () => {
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.xpath("//input[@id='username']").type("Dummy_user");
        cy.xpath("//input[@id='password']").type("Dummy_pass");
        cy.xpath("//button[@class='radius']").click();
        
    });


    it('xpath text function', () => {
        cy.visit("https://www.ebay.com/")
        cy.xpath("//a[text()=' Help & Contact']").click();
        cy.xpath("//a[text()=' Daily Deals']").click();
        cy.xpath("//a[text()='register']").click();
        cy.xpath("//a[text()='Sign in']").click();
    });


    it('Test case using contains function', () => {
        cy.xpath("//a[contains(text(), 'Free Access to Interviewl']");
        cy.xpath("//button[contains(text(), 'Home']");
    });


    it('Test case using indexing method', () => {

        cy.path(("//button[@class='btn btn-primary']"))[2]

    });


    it('Test case using multiple attribute', () => {

        cy.path("//input[@value='radio1' and @name='radioButton' and @type='radio']")
        
    });



    //practise on meesho website

    it.only('X path practise', () => {

        cy.visit('https://www.meesho.com/')
        cy.xpath("//span[text()='Women Ethnic']");
        
    });








});