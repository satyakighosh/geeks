describe("login page", () => {
    it("check if login is working", () => {
        cy.intercept({
            method: 'POST',
            pathname: '**/identitytoolkit/v3/relyingparty/getAccountInfo'
        }).as('firebaseApi');
        cy.visit("https://geeksforgeeks-e7ed4.web.app/Login");
        cy.get("[name='email']").type("newcypress@gmail.com");
        cy.get("[name='password']").type("123456");
        cy.get("[type='submit']").click();
        cy.wait('@firebaseApi');
        cy.url().should("include", "Home");
        cy.get('#profile').click();
        cy.get('#email').invoke('text').should("include", "newcypress@gmail.com");


    });
    it("check if incorrect password is working", () => {
        cy.intercept({
            method: 'POST',
            pathname: '**/identitytoolkit/v3/relyingparty/getAccountInfo'
        }).as('firebaseApi');
        cy.visit("https://geeksforgeeks-e7ed4.web.app/Login");
        cy.get("[name='email']").type("cypress" + new Date().getTime() + "@gmail.com");
        cy.get("[name='password']").type("wrongPassword");
        cy.get("[type='submit']").click();
        cy.wait('@firebaseApi');
        cy.get('#errorMessage').invoke('text').should('not.be.empty')
    })
})