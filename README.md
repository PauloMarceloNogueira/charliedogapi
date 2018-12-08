# CHARLIE E DOGS - API
<p align='center'>
  <img src="https://s3.amazonaws.com/charliedog/logo_charlie.svg">
</p>

projeto para estudo/desafio da API de um Petshop.

## iniciando desenvolvimento
`$ git clone git@github.com:PauloMarceloNogueira/charliedogapi.git`

#### rodando
`cd charliedogapi`\
`$ npm install `\
`$ npm start`

### buildando - para deploy
`$ npm run build`

## estrutura de diretórios
```
api
|
└───src
│   │
│   └───controllers
│       │
│       └─── ApiController.js  Controller principal, responsável por validar variáveis de ambientes e subir o server
|       └─── RouterController.js // Controle das rotas 
│             
│   └───helpers
│       |
|       └─── PostgresHelper.js // helper para conexão com o banco postgres
|       └─── RestifyHelper.js // helper para instanciar o server do respify
|
│   └───models
|       |
|       └─── Breeds.js // Model que gerencia os métodos da raça do cachorro
|
|       └─── Checkin.js // Model que gerencia os métodos do Checkin do usuário
|
|       └─── DeliveryAddress.js // Model que gerencia os métodos dos endereços dos usuários
|
|       └─── Dogs.js // Model que gerencia os métodos dos cachorros
|
|       └─── Users.js // Model que gerencia os métodos dos usuários


```

## rotas
| método | path | descrição |
| ------ | ---- | ----------|
| GET | /users | retorna lista de usuários |
| GET | /users/1 | retorna usuário id = 1 |
| PUT | /users | atualiza o usuário (passando id no body) |
| DELETE | /users/1 | exclui o usuário id = 1 |
| POST | /dogs | adiciona um cachorro |
| GET | /dogs | retorna lista de cachorros |
| GET | /dogs/1 | retorna cachorro id = 1 |
| PUT | /dogs | atualiza o cachorro (passando id no body) |
| DELETE | /dogs/1 | exclui o cachorro id = 1 |
| POST | /dogs | adiciona um cachorro |
| GET | /breeds | retorna lista de raças |
| GET | /breeds/1 | retorna raça id = 1 |
| PUT | /breeds | atualiza a raça (passando id no body) |
| DELETE | /breeds/1 | exclui a raça id = 1 |
| POST | /breeds | adiciona uma raça |
| GET | /addresses | retorna lista de endereços |
| GET | /address/1 | retorna endereço id = 1 |
| PUT | /address | atualiza o endereço (passando id no body) |
| DELETE | /address/1 | exclui o endereço id = 1 |
| POST | /address | adiciona um endereço |
| GET | /checkin/1 | retorna checkin do usuário id = 1 |
| POST | /addresses | adiciona um checkin |






## principais dependências & ferramentas
| nome          | link                                                           |
| ------------- | -------------------------------------------------------------- |
| Restify    | [link](https://restify.com/)                   |
| node-postgres    | [link](https://node-postgres.com/)       |
| babel | [link](https://babeljs.io/)|

## variáveis de ambiente
| nome | descrição |
| -----|-----------|
| POSTGRES_HOST | Host para conectar ao banco de dados |
| POSTGRES_USER | Usuário master do banco de dados |
| POSTGRES_PASS | Senha do usuário master do banco de dados |
| POSTGRES_DB | Nome do banco de dados |

## branchs e tags
| nome | descrição |
| -----|-----------|
| master | branch com o código atualizado em produção
| develop | branch com o código que será deployado em produção


