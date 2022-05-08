describe("signup page", () => {
    it("check if signup is working", () => {
        cy.intercept({
            method: 'POST',
            pathname: '**/identitytoolkit/v3/relyingparty/getAccountInfo'
        }).as('firebaseApi');
        const uniqueEmail = "cypress" + new Date().getTime() + "@gmail.com";
        cy.visit("https://geeksforgeeks-e7ed4.web.app/Signup");
        cy.get("[name='name']").type("cypressName");
        cy.get("[name='email']").type(uniqueEmail);
        cy.get("[name='password']").type("cypress");
        cy.get("[type='submit']").click();
        cy.wait('@firebaseApi');
        cy.url().should("include", "Home");
        cy.get('#profile').click();
        cy.get('#email').invoke('text').should("include", uniqueEmail);
    });

    it("check if email id already exists", () => {
        cy.intercept({
            method: 'POST',
            pathname: '**/identitytoolkit/v3/relyingparty/getAccountInfo'
        }).as('firebaseApi');
        cy.visit("https://geeksforgeeks-e7ed4.web.app/Signup");
        cy.get("[name='name']").type("cypressName");
        cy.get("[name='email']").type("newcypress@gmail.com");
        cy.get("[name='password']").type("wrongPassword");
        cy.get("[type='submit']").click();
        cy.wait('@firebaseApi');
        cy.get('#errorMessage').invoke('text').should('not.be.empty')
    })
})