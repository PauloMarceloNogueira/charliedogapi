# CHARLIE E DOGS - API
<p align='center'>
  <img src="https://s3.amazonaws.com/charliedog/logo.svg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEG0aCXVzLWVhc3QtMSKAAm27cEAyk0mWbNrTZBM8Mrf1se5m0y7qPd40YyC3beqUtilPFdElRrZj7wiHMYePwno%2FeN8gzw%2FIr2Gh9JjFaFliElGoH0gbcJsoHjPkCqAy2Gp4Wq0BFs6gp1azWX6NMo%2F2ui24soSB3nzPkV8D9neDbJzoMo8CyVBQKRUGlboDluSsMpMUew9EMfjXj0T7Do9RzcAg269a3svjTqJbgHFFUURBx0EsQAebjp%2BiGh58vyj9cko9eeBQ24lakw3qY3SdYBSqiPN%2BVtOaiMWMWOuGfqBALciN%2FY7jr4qBEm5uIAHpJ11w3dlyHXLm7H6o5NR%2FRPY0sWo8bTPkRK9d6M8q2wMIIhAAGgw1MDIxNjcxNzYyMjYiDBSmNZ4%2BdatfHQDE5iq4A26bojXESST5P2VLXN%2FM1uoJUYiPYLO8D1wD9sMV8yuszarIb094Y71CjtztN3CcuDYrP8oJ0igpQw2tStfArtcNeijjSFeqF1KaLq9BRm4UG1MqpM9nt703cCpuA2oPtVg%2FIJJQx7lfJGtcu9kkkrObEexdw%2FYhlYwbmGrNFVygQMvnDbtufbYz0s70ED2fAQ%2FzQZuDmsJwFcdcWpXfNRseYjBClrtaYgD%2FwmZX9s%2BmQa1rFhGt07Z5kQNAKUpO%2BYX2ZOyV6QIheX1cEb7I%2BF03RWQip%2FsHv77nKPa%2BESGEaj%2Bo2tK%2BrHGtLM4H5N9YhwBlcjSXKb86w5OGCcumY%2B9mEQsbVG7X0wb3xlvEdltOLXCBoySqJq%2BgC9VIESCDHc3kEkNn%2BZZHvBB6QerArhlHjm5hJkczOBoRM6sJW0ILnlxCmHe1keMeWYNUAPKD7zpobj30QZC2bBm1HBq9Ve3nUxuRISUenam5tVE46ORO6UJG9n2awf8uLqknAcGD0%2BvvjonWg8PLBppVaMSHbfjj2Gm5Ej%2FNHLsqTQTBZkixNEMZ9hQwjhgvo%2B4ZNtECKDKfqThQBBiKMNyXquAF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20181208T011442Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXJ237AQRM77GEBYS%2F20181208%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bd61f5bcc0b0c6b389a9dc3c04d6c9c9a9df93ee1b486c0ac2b5e4d126e630db">
</p>

projeto para estudo/desafio da API de um Petshop.

## iniciando desenvolvimento
`$ git clone git@github.com:PauloMarceloNogueira/charliedogapi.git`

#### rodando
`cd charliedogapi`\
`$ npm install `
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


