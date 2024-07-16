describe('Test suite for navigation', () => {



    it('Test caes', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.xpath("//a[text()='Free Access to InterviewQues/ResumeAssistance/Material']").click();
        cy.wait(1000);
        cy.go('back')
        cy.go('forward')
        cy.reload()
        
    });
});