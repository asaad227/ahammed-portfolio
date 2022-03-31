/* eslint-disable no-undef */
describe('ahammed portfolio end to end test', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('/')
    })

    it('render home page without crash', ()=>{
        cy.visit('/')
    });

    it('render project page without crash', ()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/project"] > li').click();
        /* ==== End Cypress Studio ==== */
    })

    it('render about me page without crash', ()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/about"] > li').click();
        /* ==== End Cypress Studio ==== */
    })

    it('render resume page without crash', ()=>{
        cy.visit('/')

        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/resume"] > li').click();
        /* ==== End Cypress Studio ==== */
    })

    it('linkedin links guide to rite linkedin site', ()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="https://www.linkedin.com/in/ahammed-saad-5341b3231/"]').click();
        /* ==== End Cypress Studio ==== */
    })

    it('github links guide to github site', ()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="https://github.com/asaad227"]').click();
        /* ==== End Cypress Studio ==== */
    })

    it('twitter links guide to twitter site', ()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="https://twitter.com/a_saad227"]').click();
        cy.get('.r-eqz5dr > :nth-child(1) > .r-1awozwy > .css-bfa6kz > .css-901oao').click();
        /* ==== End Cypress Studio ==== */
    })
    it('gmail links should have have.attr, have.text, be.visible', ()=>{
        cy.visit('/')


        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="mailto:a.saad227@gmail.com? subject=subject text"]').should('have.attr', 'href', 'mailto:a.saad227@gmail.com? subject=subject text');
        cy.get('[href="mailto:a.saad227@gmail.com? subject=subject text"]').should('have.text', ' -mail');
        cy.get('[href="mailto:a.saad227@gmail.com? subject=subject text"]').should('be.visible');
        /* ==== End Cypress Studio ==== */
    })

    it('yahoo mail links should have have.attr, have.text, be.visible', ()=>{
        cy.visit('/')

        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="mailto:a.saad227@yahoo.com? subject=subject text"]').should('have.text', ' -mail');
        cy.get('[href="mailto:a.saad227@yahoo.com? subject=subject text"]').should('have.attr', 'href', 'mailto:a.saad227@yahoo.com? subject=subject text');
        cy.get('[href="mailto:a.saad227@yahoo.com? subject=subject text"]').should('be.visible');
        /* ==== End Cypress Studio ==== */
    })

    it('project hamburger menu side open onclick',()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/project"] > li').click();
        cy.get('.openbtn > .fa').click();
        /* ==== End Cypress Studio ==== */
    })

    it('project hamburger menu onclick on close will close menu', ()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/project"] > li').click();
        cy.get('.openbtn > .fa').click();
        cy.get('.closebtn > .fa').click();
        /* ==== End Cypress Studio ==== */
    })
    it('about me hamburger menu side open onclick',()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/about"] > li').click();
        cy.get('.openbtn > .fa').click();
        /* ==== End Cypress Studio ==== */
    })

    it('about me hamburger menu onclick on close will close menu', ()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/about"] > li').click();
        cy.get('.openbtn > .fa').click();
        cy.get('.closebtn > .fa').click();
        /* ==== End Cypress Studio ==== */
    })

    it('resume hamburger menu side open onclick',()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/resume"] > li').click();
        cy.get('.openbtn > .fa').click();
        /* ==== End Cypress Studio ==== */
    })

    it('resume hamburger menu onclick on close will close menu', ()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/resume"] > li').click();
        cy.get('.openbtn > .fa').click();
        cy.get('.closebtn > .fa').click();
        /* ==== End Cypress Studio ==== */
    })

    it('project page social links  have.attr,  be.visible ', ()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/project"] > li').click();
        cy.get('[href="https://www.linkedin.com/in/ahammed-saad-5341b3231/"] > .fa').should('have.attr', 'aria-hidden', 'true');
        cy.get('[href="https://www.linkedin.com/in/ahammed-saad-5341b3231/"] > .fa').should('be.visible');
        cy.get('[href="https://github.com/asaad227"] > .fa').should('have.attr', 'aria-hidden', 'true');
        cy.get('[href="https://github.com/asaad227"] > .fa').should('be.visible');
        cy.get('[href="https://twitter.com/a_saad227"] > .fa').should('have.attr', 'aria-hidden', 'true');
        cy.get('[href="https://twitter.com/a_saad227"] > .fa').should('be.visible');
        cy.get('[href="mailto:a.saad227@gmail.com? subject=subject text"] > .fa').should('have.attr', 'aria-hidden', 'true');
        cy.get('[href="mailto:a.saad227@gmail.com? subject=subject text"] > .fa').should('be.visible');
        cy.get('[href="mailto:a.saad227@yahoo.com? subject=subject text"] > .fa').should('have.attr', 'aria-hidden', 'true');
        cy.get('[href="mailto:a.saad227@yahoo.com? subject=subject text"] > .fa').should('be.visible');
        /* ==== End Cypress Studio ==== */
    })

    it('about me page social links  have.attr,  be.visible ', ()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/about"] > li').click();
        cy.get('[href="https://www.linkedin.com/in/ahammed-saad-5341b3231/"] > .fa').should('have.attr', 'aria-hidden', 'true');
        cy.get('[href="https://www.linkedin.com/in/ahammed-saad-5341b3231/"] > .fa').should('be.visible');
        cy.get('[href="https://github.com/asaad227"] > .fa').should('have.attr', 'aria-hidden', 'true');
        cy.get('[href="https://github.com/asaad227"] > .fa').should('be.visible');
        cy.get('[href="https://twitter.com/a_saad227"] > .fa').should('have.attr', 'aria-hidden', 'true');
        cy.get('[href="https://twitter.com/a_saad227"] > .fa').should('be.visible');
        cy.get('[href="mailto:a.saad227@gmail.com? subject=subject text"] > .fa').should('have.attr', 'aria-hidden', 'true');
        cy.get('[href="mailto:a.saad227@gmail.com? subject=subject text"] > .fa').should('be.visible');
        cy.get('[href="mailto:a.saad227@yahoo.com? subject=subject text"] > .fa').should('have.attr', 'aria-hidden', 'true');
        cy.get('[href="mailto:a.saad227@yahoo.com? subject=subject text"] > .fa').should('be.visible');
        /* ==== End Cypress Studio ==== */
    })

    it('resume page social links  have.attr,  be.visible ', ()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/resume"] > li').click();
        cy.get('[href="https://www.linkedin.com/in/ahammed-saad-5341b3231/"] > .fa').should('have.attr', 'aria-hidden', 'true');
        cy.get('[href="https://www.linkedin.com/in/ahammed-saad-5341b3231/"] > .fa').should('be.visible');
        cy.get('[href="https://github.com/asaad227"] > .fa').should('have.attr', 'aria-hidden', 'true');
        cy.get('[href="https://github.com/asaad227"] > .fa').should('be.visible');
        cy.get('[href="https://twitter.com/a_saad227"] > .fa').should('have.attr', 'aria-hidden', 'true');
        cy.get('[href="https://twitter.com/a_saad227"] > .fa').should('be.visible');
        cy.get('[href="mailto:a.saad227@gmail.com? subject=subject text"] > .fa').should('have.attr', 'aria-hidden', 'true');
        cy.get('[href="mailto:a.saad227@gmail.com? subject=subject text"] > .fa').should('be.visible');
        cy.get('[href="mailto:a.saad227@yahoo.com? subject=subject text"] > .fa').should('have.attr', 'aria-hidden', 'true');
        cy.get('[href="mailto:a.saad227@yahoo.com? subject=subject text"] > .fa').should('be.visible');
        /* ==== End Cypress Studio ==== */
    })

    it('project gif elements have right text and be visible ', ()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/project"] > li').click();
        cy.get('.flex-container > :nth-child(1) > a').should('have.text', 'Simple App');
        cy.get('.flex-container > :nth-child(2) > a').should('have.text', ' Bootcampers Social App');
        cy.get(':nth-child(3) > a').should('have.text', ' Bootcampers Social App');
        cy.get(':nth-child(4) > a').should('have.text', 'My Pigeon blog APP');
        cy.get(':nth-child(5) > a').should('have.text', 'Poetry Finder APP');
        cy.get(':nth-child(1) > img').should('be.visible');
        cy.get(':nth-child(2) > img').should('be.visible');
        cy.get(':nth-child(3) > img').should('be.visible');
        cy.get(':nth-child(4) > img').should('be.visible');
        cy.get(':nth-child(5) > img').should('be.visible');
        /* ==== End Cypress Studio ==== */
    })

    it('home page card should have alt, p.type should be visiable, profile-container should have right text ',()=>{
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.card').should('have.attr', 'alt', 'Ahammed Saad');
        cy.get('p.type').should('be.visible');
        cy.get('.profile-container > :nth-child(3)').should('have.text', 'Well Come To My Portfolio');
        cy.get('.styles_type__2Teeh').should('have.class', 'styles_type__2Teeh');
        /* ==== End Cypress Studio ==== */
    })
})