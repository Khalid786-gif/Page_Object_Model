describe('Test Suite', () => {


    it('Test case on drag and drop using right 1', () => {

        cy.visit("https://v1.training-support.net/selenium/drag-drop");
        cy.get("#draggable").trigger('mousedown', {which:1});
        cy.get("#droppable").trigger('mousemove').trigger('mouseup',{force:true});

    });


    it('Test case on drag and drop using right click 2', () => {
        cy.visit("https://v1.training-support.net/selenium/drag-drop");
        cy.get("#draggable").trigger('mousedown',{which:1});
        cy.get("#dropzone2").trigger('mousemove').trigger('mouseup',{force:true});        
    });
});