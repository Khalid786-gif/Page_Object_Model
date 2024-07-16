class Logout_po{

    Logout(){

        cy.get(".oxd-userdropdown-name").click();

        cy.get(".oxd-dropdown-menu").find("a[role='menuitem']").contains("Logout").click()

    }

}

export default Logout_po;






