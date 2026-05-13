#language: pt


Funcionalidade: API de Usuários

  Cenário: Criar um novo usuário com sucesso via API
    Quando envio uma requisição POST para "/api/createAccount" com dados válidos
    Então o status code da resposta deve ser 201
    E a mensagem da resposta deve ser "User created!"