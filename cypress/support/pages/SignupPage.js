import { faker } from '@faker-js/faker';

class SignupPage {
  irParaLogin() {
    cy.get('a[href="/login"]').click();
  }

  preencherDadosIniciais() {
    const nome = faker.person.fullName();
    const email = faker.internet.email();
    
    cy.get('[data-qa="signup-name"]').type(nome);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
  }

  completarCadastro() {
    cy.get('#id_gender2').click(); // Escolhe um gênero
    cy.get('[data-qa="password"]').type('Senha123!');
    cy.get('[data-qa="days"]').select('10');
    cy.get('[data-qa="months"]').select('May');
    cy.get('[data-qa="years"]').select('1995');
    
    // Checkboxes opcionais
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    // Endereço e dados pessoais
    cy.get('[data-qa="first_name"]').type(faker.person.firstName());
    cy.get('[data-qa="last_name"]').type(faker.person.lastName());
    cy.get('[data-qa="address"]').type(faker.location.streetAddress());
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type(faker.location.state());
    cy.get('[data-qa="city"]').type(faker.location.city());
    cy.get('[data-qa="zipcode"]').type(faker.location.zipCode());
    cy.get('[data-qa="mobile_number"]').type(faker.phone.number());
    
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click(); // Clica em continuar após a mensagem de sucesso
  }

  validarLogin() {
    // Verifica se o texto "Logged in as" aparece no menu superior
    cy.contains('Logged in as').should('be.visible');
  }

  buscarProduto(nomeProduto) {
  // Rola a página até o produto para garantir que ele esteja visível
  cy.contains('.productinfo p', nomeProduto).scrollIntoView().should('be.visible');
  
  // Seleciona o "View Product" especificamente desse produto
  cy.get('.single-products').contains('p', nomeProduto)
    .parents('.single-products')
    .parent()
    .find('.choose a').click();

    }

    adicionarAoCarrinho() {
  cy.get('.product-information h2').should('not.be.empty').invoke('text').as('nomeOriginal');
  cy.get('.product-information span span').should('not.be.empty').invoke('text').as('precoOriginal');
  
  cy.get('button.cart').click();
  cy.get('u').contains('View Cart').click();

    }

  validarCarrinho() {
    cy.get('@nomeOriginal').then((nome) => {
      cy.get('.cart_description h4').should('contain', nome.trim());
    });
    
    cy.get('@precoOriginal').then((preco) => {
      cy.get('.cart_price p').should('contain', preco.trim());
    });
  }
}

export default SignupPage;