import Login_po from "../../support/PageObjects/OrangeHRM/LoginPage";
import Link_po from "../../support/PageObjects/OrangeHRM/Links";
import Logout_po from "../../support/PageObjects/OrangeHRM/LogoutPage";

describe('Test Suite Using POM FrameWork', () => {
    
    const login = new Login_po();
    const link = new Link_po();
    const logout = new Logout_po();
    
    it('Test Cases using Page Object Model', () => {
        login.EnterURL();
        login.Login();
        link.click_link('Admin');
        logout.Logout();
       
    });
});