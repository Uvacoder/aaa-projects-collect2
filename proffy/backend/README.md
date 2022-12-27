<h1 align="center">
    <img alt="Tindev" width="400px" src="../.github/logo.png" />
</h1>

<h4 align="center">
  🚀 Next Level Week 02 by Rocketseat
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/guuhx97/proffy">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

## 📰 Back-end

No back-end ou API, é onde de fato as funções de cadastro, busca, entre outras são executadas. É responsabilidade dele também realizar a integração com bando de dados insirindo e buscando informações. Por default, a API está utilizando a porta `3333`, mas que pode ser alterada no arquivo **server.js**.

## 🌱 Rotas

| Rota           | Método | Função                        | Descrição                                                  |
| :------------- | :----- | :---------------------------- | :--------------------------------------------------------- |
| `/classes`     | `GET`  | `ClassesController.index`     | `Busca informações referentes a classes.`                  |
| `/classes`     | `POST` | `ClassesController.store`     | `Responsável por cadastrar Classes, professor e matérias.` |
| `/connections` | `GET`  | `ConnectionsController.index` | `Busca o total de conexões que existem no banco de dados.` |
| `/connections` | `POST` | `ConnectionsController.store` | `Cadastrar uma nova conexão no banco de dados.`            |

---

## 🔄 Executar

- Entrar na pasta `backend`;
- Executar `yarn knex:migrate` para inicializar o banco de dados;
- Executar `yarn install` para instalar dependências do projeto;
- Executar `yarn dev` para que o projeto seja executado;

## 📝 Licença

Este projeto está sobre a licença MIT. Veja o arquivo [LICENSE](../LICENSE.md) para mais detalhes.

---

<h4 align="center">
  Feito com ❤️ by Gustavo Souza
</h4>
