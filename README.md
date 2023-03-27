# Testes no site Saucedemo
## Configuração de ambiente do projeto

site: https:saucedemo.com
Login: Standart User
Senha: secret_sauce

# Teste para o site saucedemo usando Cypress

## Testes realizdos:
* Acessar o site com sucesso
* Acessar o site com senha invalida
* Acessar o site com usuario em branco
* Acessar o site com a senha em branco
* Validar o preço do Backpack
* Validar mensagem da tela de checkout sem informar o Postal Code

## Configurações
* IDE, preferencialmente VSCode
* Linhas de comandos:
    * iniciar o npm: npm init -y
    * instalar o Cypress na pasta do projeto: npm install cypress
    * Executar o Cypress: npm run cypress:open

## Funcionalidade: 
* Como um usuário adicionando produtos no backpack do site Saucedemo
* O usuário quer validar o preço no backpack
* Para que ele possa comprar o produto

1. Cenário: Acessar o site com sucesso

Contexto:
Dado que o usuário preenche suas credencias válidas
Quando é realizado login
Então o login é realizado com sucesso

________________________________________________

2. Cenario: Acessar o site com senha inválida

Contexto:
Dado que o usuário preencha dados de acesso com senha inválido
Quando é realizado login
Então deve mostrar mensagem de erro

________________________________________________

3. Cenário: Acessar o site com usuário em branco

Contexto:
Dado que o usuário preencha dados de acesso com usuário em branco
Quando é realizado login
Então deve mostrar mensagem de erro

_______________________________________________

4. Cenário: Acessar o site com senha em branco

Contexto:
Dado que o usuário preencha dados de acesso com senha em branco
Quando é realizado login
Então deve mostrar mensagem de erro

________________________________________________

5. Cenário: Adicionar produto ao carrinho e validar valor

Contexto:
Dado que o usuário selecionou o produto backpack
Quando o usuário acessa o carrinho
Então o valor do produto deve ser $29.99

________________________________________________

6. Cenário: Validar testo de erro na página checkout

Contexto:
Dado que o usuário está na tela de checkout
Quando preenche os ddos name como maria
E last name Silva
Mas não preenche o Post code
Então deve mostrar uma mensagem de erro

    
