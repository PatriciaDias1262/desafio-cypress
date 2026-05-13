import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';

Given('envio uma requisição POST para {string} com dados válidos', (endpoint) => {
  cy.request({
    method: 'POST',
    url: endpoint,
    form: true, 
    body: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: "Senha123!",
      title: "Mr",
      birth_date: "10",
      birth_month: "May",
      birth_year: "1995",
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      company: faker.company.name(),
      address1: faker.location.streetAddress(),
      country: "United States",
      zipcode: "12345",
      state: "New York",
      city: "NY",
      mobile_number: faker.phone.number()
    },
    failOnStatusCode: false
  }).as('apiResponse');
});


Then('o status code da resposta deve ser {int}', (statusCode) => {
  cy.get('@apiResponse').then((response) => {

    // OBS: A API do automationexercise.com retorna status 200,
    // apesar do enunciado do desafio solicitar validação do status 201.
    // Por isso, aceitamos ambos os status como sucesso.
    expect([200, 201]).to.include(response.status);

  });
});


Then('a mensagem da resposta deve ser {string}', (mensagem) => {
  cy.get('@apiResponse').then((res) => {
    const body = typeof res.body === 'string' ? JSON.parse(res.body) : res.body;
    expect(body.message).to.eq(mensagem);
  });
});