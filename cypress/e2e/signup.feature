#utf-8
#language: pt


Funcionalidade: Cadastro de Usuário e Compra
  Cenário: Realizar cadastro e validar produto no carrinho
    Dado que acesso o site "https://www.automationexercise.com"
    Quando realizo um novo cadastro de usuário
    Então valido que o login foi realizado com sucesso
    E adiciono o produto "Men Tshirt" ao carrinho
    E valido que o nome e valor no carrinho são consistentes