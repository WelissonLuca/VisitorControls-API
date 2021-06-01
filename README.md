 <h1 align="center">Visitors Control - API</h1>
<div align="center">
 <img alt="GitHub contagem de linguagens" src="https://img.shields.io/github/languages/count/WelissonLuca/VisitorControls-API?color=%2304D361&style=plastic">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/languages/code-size/WelissonLuca/VisitorControls-API?style=plastic">

  <img alt="licensa" src="https://img.shields.io/github/license/WelissonLuca/VisitorControls-API?style=plastic">

  <img src="https://img.shields.io/github/forks/WelissonLuca/VisitorControls-API?style=plastic">

<a href="https://github.com/WelissonLuca/VisitorControls-API/tree/master/commits/master">
    <img alt="GitHub último commit" src="https://img.shields.io/github/last-commit/WelissonLuca/VisitorControls-API?style=plastic">
  </a>

</div>

## 📕 Indice

- [📋 Sobre](#Sobre)
- [🕹 Tecnologias](#Tecnologias)
- [🧑🏽‍💻 Iniciando o projeto](#Como_rodar_o_projeto)
- [👨🏽‍🔧 Contribuições](#Contribuições)
- [📝 Licença](#Licença)
<hr>

<!-- About -->

<div align="center">

Sobre
============

</div>

<p align="center">Sistema de controle de visitas para condomínios</p>

<!-- TECHNOLOGIES -->
Tecnologias
============

- [Node JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Mysql](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Eslint](https://eslint.org/)

<!-- PROJECT START -->
Como rodar o projeto
============

<p align="left">

Faça o clone do repositório com o comando

```js
git clone https://github.com/AfroDev2020/VisitorControlAPI.git 
```

Instale as dependências usando o comando

```js
npm install
```

#### Faça a instalação do mysql na sua maquina caso não tenha

Crie na raiz do projeto um arquivo com o nome  .env, nele você passara as credências do seu banco de dados, a estrutura dele e esta, altere os campos, DB_USER, DB_PASS, DB_HOST, DB_PORT, de acordo com suas credências e configurações do mysql

```env

  DB_DATABASE='Visitors'
  DB_USER=root
  DB_PASS='240306'
  DB_HOST='127.0.0.1'
  DB_PORT = 3306
  APP_PORT = 3000

```

Rode estes comandos para criação do schema e tabelas no mysql

```js

npx sequelize db:create
npx sequelize db:migrate

```

Inicie o projeto usando o comando

```js
npm run dev
```

API-DOCS

```url

http://localhost:3000/api-docs/

```
</p>

<hr>

<!-- CONTRIBUTING -->

Contribuições
=====================

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra uma Pull Request

<!-- LICENSE -->

Licença
===============

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.


