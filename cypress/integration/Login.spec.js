describe("login page", () => {
    it("check if login is working", () => {
        cy.intercept({
            method: 'POST',
            pathname: '**/identitytoolkit/v3/relyingparty/getAccountInfo'
        }).as('firebaseApi');
        cy.visit("https://geeksforgeeks-e7ed4.web.app/Login");
        cy.get("[name='email']").type("cypress@gmail.com");
        cy.get("[name='password']").type("cypress");
        cy.get("[type='submit']").click();
        cy.wait('@firebaseApi');
        cy.url().should("include", "Home");
    })
})