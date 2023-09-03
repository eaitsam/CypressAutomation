/// <reference types="Cypress"/>

console.log("Hello World");
describe('SIT Homepage', () => {

  it('Go to the login page and try to sign-in', () => {

    cy.viewport(1234,768)
    cy.visit('https://dev-54ta5gq-raxqegqs5xtxq.us-2.platformsh.site/user/login') //visit the login site
    cy.wait(2000)
    cy.get("button[class='agree-button eu-cookie-compliance-secondary-button button button--small']").click() // accept the cookies
    cy.get('input#edit-name.required.form-control').scrollIntoView().should('be.visible').type('Site Admin',{force:true})
    cy.get('#edit-pass').type('Q$aaP9.E@g2ej5R',{force:true})
    cy.get('#edit-submit').click()
    // cy.get('.close span').trigger('click',{force:true})  //for closing the status message
    cy.wait(6000)
    cy.get('a.toolbar-icon.toolbar-icon-system-admin-content').click()
    cy.get('a.button.button--action.button--primary').click()
    cy.get('a.admin-item__link').eq(2).click()
    cy.get('select#edit-moderation-state-0-state').scrollIntoView().select('published',{force:true})
    cy.get('input#edit-title-0-value').scrollIntoView().type('Test27')
    cy.get('input#edit-submit').click()
    cy.wait(6000)
    cy.get('a.moderation-label-published.toolbar-item', {force:true}).click()
    cy.wait(6000)
    cy.get('a.moderation-sidebar-link.button.button--danger').click()
    cy.get('input#edit-submit').click()
    
    

    

  })





})