
const path = require('path')

describe('Download de arquivo', () => {
  it('baixa o arquivo e valida', () => {

    // 🔹 ação que dispara o download
    // ex: cy.get('button').click()

    const downloads = Cypress.config('downloadsFolder')
    const filePath = path.join(downloads, 'relatorio.pdf')

    cy.readFile(filePath, { timeout: 15000 }).should('exist')
  })
})
``
