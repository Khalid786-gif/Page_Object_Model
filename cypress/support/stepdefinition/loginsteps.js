import {Given,When,Then,And} from "cypress-cucumber-preprocessor"

Given('user enters the url',()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

})

When('user enters username as {word}',()=>{

    cy.get("input[name='username']").type(username)

})

And('user enters password as <password>',()=>{

})

And('clicks on Login',()=>{

})

Then('Login shoul be successfull',()=>{

})