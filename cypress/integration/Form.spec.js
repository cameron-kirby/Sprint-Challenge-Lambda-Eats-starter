describe('Form inputs', () => {
    it('Loads home page', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })
    it('Loads form page', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')
    })
})

// test that you can add text to the box
describe('Special Instruction Validation', () => {
    it('Loads form page', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')
    })

    it('Can add text to special instructions box', () => {
        cy.get('input[name=special_instructions]')
        .type('Please beware of dog! Text (999) 999 - 9999 when you get here!')
        .should('have.value', 'Please beware of dog! Text (999) 999 - 9999 when you get here!')
    })
})
//  test that you can select multiple toppings
describe('Selection of multiple topping Validation', () => {
    it('Loads form page', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')
    })

    it('Can select Extra Cheese', () => {
        cy.get('input[name=extra_cheese]')
        .click()
        .should('have.value', 'on')
    })

    it('Can select Sausage', () => {
        cy.get('input[name=sausage]')
        .click()
        .should('have.value', 'on')
    })

    it('Can select Grilled Chicken', () => {
        cy.get('input[name=grilled_chicken]')
        .click()
        .should('have.value', 'on')
    })
})
//  test that you can submit the form

describe('Selection of multiple topping Validation', () => {
    it('Loads form page', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')
    })

    it('Checks that submit button is disabled', () => {
        cy.get('.form-group.submit button')
        .should('be.disabled')
    })

    it('Populates form correctly', () => {
        cy.get('select[name=size]')
        .select('Large')
        .should('have.value', 'Large')

        cy.get('input[name=sauce]')
        .click({multiple:true})
    })

    it('Checks that submit button is enabled', () => {
        cy.get('.form-group.submit button')
        .should('not.be.disabled')
    })

    it('Submits order!', () => {
        cy.get('.form-group.submit button')
        .click()
    })
})