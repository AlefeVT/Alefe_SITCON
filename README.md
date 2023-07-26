# README - Projeto Clínica Médica

Este é o README do projeto Clínica Médica, que está dividido em duas pastas principais: "api" e "frontend". A "api" é responsável por conectar-se ao banco de dados MySQL e fornecer os dados necessários para o frontend. O "frontend" contém três páginas: listagem de pacientes, formulário de solicitações e listagem de solicitações.

## Instalação

### Frontend
Para rodar o frontend do projeto, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Navegue para a pasta "frontend".
3. Execute o seguinte comando para instalar as dependências necessárias:
npm install
4. Após a instalação, execute o comando para iniciar o servidor de desenvolvimento:
npm start

O servidor será iniciado e o frontend estará acessível no navegador através do endereço http://localhost:3000.

### API
Para rodar a API do projeto, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Navegue para a pasta "api".
3. Execute o seguinte comando para instalar as dependências necessárias:
npm install
4. Certifique-se de ter o banco de dados MySQL instalado e configurado corretamente.
5. Edite o arquivo `api/db.js` e verifique se a conexão com o banco de dados está correta, ajustando as credenciais de acesso, se necessário.
6. Após a configuração, execute o comando para iniciar a API:
npm start

A API estará acessível para o frontend no endereço http://localhost:8800/pacientes. onde vai listar os pacientes do banco de dados. http://localhost:8800/procedimentos. onde vai listar os procedimentos do banco de dados. http://localhost:8800/profissional. onde vai listar os profissionais do banco de dados. http://localhost:8800/listagem. onde vai listar todas as solicitações do banco de dados. http://localhost:8800/tiposolicitacao. onde vai listar os tipos de solicitações do banco de dados.

## Dependências

### Frontend
As dependências utilizadas no frontend são:

"dependencies": {
"@testing-library/jest-dom": "^5.17.0",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"axios": "^1.4.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-icons": "^4.10.1",
"react-router-dom": "^6.14.2",
"react-scripts": "5.0.1",
"react-select": "^5.7.4",
"react-toastify": "^9.1.3",
"styled-components": "^6.0.4",
"web-vitals": "^2.1.4"
}


### API
As dependências utilizadas na API são:

"dependencies": {
"add": "^2.0.6",
"cors": "^2.8.5",
"express": "^4.18.2",
"mysql": "^2.18.1",
"nodemon": "^3.0.1"
}

## Estrutura do Banco de Dados

O banco de dados utilizado neste projeto possui a seguinte estrutura:

### Tabela "pacientes"

| Coluna         | Tipo           | Descrição                          |
|----------------|----------------|------------------------------------|
| id             | INT            | Identificador único do paciente    |
| nome           | VARCHAR(100)   | Nome do paciente                   |
| dataNascimento | DATE           | Data de nascimento do paciente      |
| CPF            | VARCHAR(14)    | Número de CPF do paciente          |
| status         | VARCHAR(20)    | Status do paciente                 |

Comando SQL para criar a tabela "pacientes":

```sql
CREATE TABLE pacientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    dataNascimento DATE,
    CPF VARCHAR(14) UNIQUE NOT NULL,
    status VARCHAR(20)
);
```

### Tabela "procedimentos"

| Coluna         | Tipo           | Descrição                          |
|----------------|----------------|------------------------------------|
| id             | INT            | Identificador único do procedimento|
| descricao      | TEXT           | Descrição do procedimento          |
| tipo_id        | INT            | ID do tipo de procedimento associado|
| status         | VARCHAR(20)    | Status do procedimento             |



Comando SQL para criar a tabela "procedimentos":

```sql
CREATE TABLE procedimentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao TEXT NOT NULL,
    tipo_id INT,
    status VARCHAR(20)
);
```
### Tabela "profissional"

| Coluna         | Tipo           | Descrição                          |
|----------------|----------------|------------------------------------|
| id             | INT            | Identificador único |
| nome      | VARCHAR(100)           | Nome do profissional          |
| status         | VARCHAR(20)    | Status do profissional             |

Comando SQL para criar a tabela "profissional":

```sql
CREATE TABLE profissional (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    status VARCHAR(20)
);

```

### Tabela "solicitacoes"

| Coluna         | Tipo           | Descrição                          |
|----------------|----------------|------------------------------------|
| id             | INT            | Identificador único da solicitação|
| nome             | VARCHAR(100)            | Nome do paciente|
| data_nascimento      | DATE           | Data de nascimento do paciente          |
| cpf        | VARCHAR(14)            | Número de CPF do solicitante |
| profissional         | VARCHAR(20)    | Profissional responsável             |
| tipo_solicitacao         | VARCHAR(20)    | tipo de solicitação             |
| procedimentos         | VARCHAR(100)    | procedimentos solicitados             |
| data         | DATE    | data da solicitação             |
| hora         | TIME    | hora da solicitação             |

```sql
CREATE TABLE solicitacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    profissional VARCHAR(20),
    tipo_solicitacao VARCHAR(20),
    procedimentos VARCHAR(100),
    data DATE,
    hora TIME
);

```



### Tabela "tipo_solicitacao"

| Coluna         | Tipo           | Descrição                          |
|----------------|----------------|------------------------------------|
| id             | INT            | Identificador único do procedimento|
| descricao      | VARCHAR(100)           | Descrição do tipo de solicitação          |
| status         | VARCHAR(20)    | Status do tipo de solicitação             |

```sql
CREATE TABLE tipo_solicitacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    status VARCHAR(20)
);

```


## Conexão com Banco de Dados

A conexão com o banco de dados MySQL é realizada através do módulo "mysql" na API. As credenciais de acesso ao banco estão configuradas como:

import mysql from "mysql";

export const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "senha",
database: "nome database"
});


Verifique se as credenciais estão corretas e se o banco de dados "clinica" existe. Caso não exista, crie-o antes de executar a API.

## Contribuição

Projeto criado para teste pratico para empresa SITCON

Se desejar contribuir para o projeto, sinta-se à vontade para criar pull requests. Todas as contribuições são bem-vindas!


## Contato

Caso tenha alguma dúvida ou sugestão sobre o projeto, entre em contato:

Nome: Alefe Viana Teixeira
E-mail: alefevt@gmail.com


