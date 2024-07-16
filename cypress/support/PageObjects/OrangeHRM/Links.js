class Link_po{

    click_link(link){
        cy.contains(link).click();
    }
}

export default Link_po;