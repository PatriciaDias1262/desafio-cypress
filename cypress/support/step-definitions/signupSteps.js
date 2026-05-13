import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignupPage from "../pages/SignupPage";

const signupPage = new SignupPage();

Given("que acesso o site {string}", (url) => {
  cy.visit(url);
});

When("realizo um novo cadastro de usuário", () => {
  signupPage.irParaLogin();
  signupPage.preencherDadosIniciais();
  signupPage.completarCadastro();
});

Then("valido que o login foi realizado com sucesso", () => {
  signupPage.validarLogin();
});

Then("adiciono o produto {string} ao carrinho", (produto) => {
  signupPage.buscarProduto(produto);
  signupPage.adicionarAoCarrinho();
});

Then("valido que o nome e valor no carrinho são consistentes", () => {
  signupPage.validarCarrinho();
});