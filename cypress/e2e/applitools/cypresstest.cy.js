describe('Sync Test with Applitools', () => {
    it('should sync with Applitools', () => {
        cy.eyesOpen({
            appName: 'Liz Test App',
            testName: 'Liz Sync',
            batchName: 'Liz Testing'
        })

        cy.visit('about:blank')
        cy.eyesCheckWindow({
            tag: 'Blank Page',
            target: 'window',
            fully: true,
        });

        cy.eyesClose();
    })
})