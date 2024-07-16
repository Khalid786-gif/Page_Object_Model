import {Given,When,Then,And} from "cypress-cucumber-preprocessor"

Given('user opens the simple form url',()=>{

    cy.visit("https://v1.training-support.net/selenium/simple-form");

})

When('user enters firstname, lastname, email, message',()=>{

    cy.get("#firstName").type("ABCD");
    cy.get("lastName").type("BDEF");
    cy.get("#email").type("GHIJK@gmauil.com");
    cy.get("#number").type("1234567891");
    cy.xpath("//textarea").type("Thank you for filling the form");
})

Then('an alert saying sucessful message has to be displayed.',()=>{

    cy.on('window:confirm',(msg)=>{
        
        expect()
           
    })

})

And('clicks on submit',()=>{

})