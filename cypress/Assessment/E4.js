describe('Test suite for automation store', () => {
    it('Test cases', () => {
         
        //is for opening the url in the web browser
        cy.visit("https://automationteststore.com/");


        //is for hover8ing over the mouse cursor on the text "Apparel & Accessories"
        cy.xpath("//a[@href='https://automationteststore.com/index.php?rt=product/category&path=68']").trigger('mouseover')
        
        //is for clicking the "Apparel & Accessories"  web page
        cy.contains('T-shirts').click({force:true});


        //is for clicking on the 3rd white T shirt 
        cy.xpath("(//img[@src='//automationteststore.com/image/thumbnails/18/79/t_shirt_3_jpg-100243-250x250.jpg'])[2]").click({force:true});
        
        
        //This command is for changing the color of the T-shirt. using below command I have selected light blue
        cy.get("#option350").select("774");
        
        //This commad is for entering the number of quantities required. Using below command i have enter 12 quantities
        cy.get("#product_quantity").type('2');


        //via below commad the selected T shirt is being added to the cart
        cy.get('a[href="#"][class="cart"]').click({force:true});

        //via below command T-shirt that has been added to the cart is further proceeded to be purchased by clicking on checkout button. 
        cy.get("a[href='#'][id='cart_checkout1']").click({force:true});
        
        //via below command guest check out radio button has been selected to make the purchase
        cy.get("input[type='radio'][id='accountFrm_accountguest']").check();
        
        //Via below command continue button is being clicked
        cy.get("button[type='submit'][title='Continue']").click({force:true});


        //line 39 to 56, the form is being filled with the basic detaails of the user for delivering the order
        cy.get('#guestFrm_firstname').type('Khalid');
        
        cy.get('#guestFrm_lastname').type('Bin');
        
        cy.get('#guestFrm_email').type('Example@gmail.com');
        
        cy.get('#guestFrm_address_1').type('1047 5th street, poland');
        
        cy.get('#guestFrm_city').type('poland');
        
        cy.get('#guestFrm_zone_id').select(1);
        
        cy.get('#guestFrm_postcode').type('000000');
        
        cy.get('#guestFrm_country_id').type('XYZ');
        
        cy.get('.col-md-12 > .btn-orange').click({force:true})

        //Via below command continue buttonm is being clicked after filling the form
        cy.get('#checkout_btn').click({force:true});


        //Via below command assertion is being performed to validate the confirmation message, if the order has been processed sucessfully.
        cy.get('.maintext').should('contain',' Your Order Has Been Processed!');
        
        
    });
});