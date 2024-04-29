describe("Testing Todo", () => {
    it("should have heading", () => {
        //Assign
        cy.visit("http://localhost:1234");

        //Act
        cy.get("h2:first").contains("Välkommen till din todo-lista");
    })

    it("should have an input field, where it's possible to write a search text", () => {
        //Assign
        cy.visit("http://localhost:1234");

        //Act 
        cy.get("input#newTodoText").type("Kolla på Bachelorette").should("have.value", "Kolla på Bachelorette");
    });

    it("should find create button and POST", () => {
        //Assign
        cy.visit("http://localhost:1234");

        //Act 
        cy.get("input#newTodoText").type("Kolla på Bachelorette").should("have.value", "Kolla på Bachelorette");
        cy.get("button:first").click();

        //Assert
        cy.get("ul.todo>li").should("have.length", 1);
    });

    it("should be marked as done correctly", () => {
        
        //Assign
        cy.visit("http://localhost:1234");

        //Act
        cy.get("input#newTodoText").type("Kolla på Bachelorette").should("have.value", "Kolla på Bachelorette");
        cy.get("button:first").click();
        cy.get("ul.todo>li:first").click();
       
        //Assert
        cy.get("ul.todo>li:first").should("have.class", "todo__text--done");
    });

    it("should mark todo as not done correctly", () => {

        //Assign
        cy.visit("http://localhost:1234");

        //Act
        cy.get("input#newTodoText").type("Kolla på Bachelorette").should("have.value", "Kolla på Bachelorette");
        cy.get("button:first").click();
        cy.get("ul.todo>li:first").click();
        cy.get("ul.todo>li:first").should("have.class", "todo__text--done");
       
        cy.get("ul.todo>li.todo__text--done").click();
        //Assert 
        cy.get("ul.todo>li:first").should("not.have.class", "todo__text--done");
    });

    it("should clear todo list", () => {
        
        //Assign
        cy.visit("http://localhost:1234");

         //Act 
         cy.get("input#newTodoText").type("Kolla på Bachelorette").should("have.value", "Kolla på Bachelorette");
         cy.get("button:first").click();
 
         //Assert
         cy.get("ul.todo>li").should("have.length", 1);
         
         cy.get("button#clearTodos").click()
         cy.get("ul#todos>li:first").should("have.length", 0);
    });
});

