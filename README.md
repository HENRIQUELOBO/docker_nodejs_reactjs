# Tela de Login com Docker, ReactJs e NodeJS


Esse projeto é a parte estrutural de um sistema com login, nesse projeto já está pronto o servidor, cliente, base de dados,
e ambiente nodeJS.

- Tecnologias
  * ReactJs - Frontend. 
  * Nodejs - Backend.
  * MYSQL - Base de dados.
  * Docker - Criação dos ambientes(Server, Client, MYSQL, Node).

## Requisitos
- É necessário ter instalado os seguintes modulos:

  * Docker
  * Docker-compose
  * npm
  * npx
  * git(opcional)

## Instalação e execução
Baixe o pacote 

1. Faça um clone desse repositório 
  `git clone https://github.com/HENRIQUELOBO/login-react-docker.git` 
  ou baixe diretamente por aqui.
2. Entre na pasta rodando `cd login-react-docker/`.
3. Entre na pasta rodando `cd server/` para rodar o comando `npm install`.
3. Rode `docker-compose up` para instalar as dependências e criar/iniciar os ambientes, 
aguarde até que apareça os serviços em execução.
5. Rode `npx sequelize db:migrate` para executar a migrations da base de dados, se deu tudo certo
vai aparecer a mensagem `20200413202514-create-users: migrated (3.031s)`.
6. Pronto só é acessar o link `http://localhost:3000/` para visualizar a aplicação rodando.
7. Tem opção de criar novo usuário para o teste.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
