<h1 align="center">
    <img alt="Dev Radar" src="../.github/logo.svg" />
</h1>

<h4 align="center">
  🚀 Semana OmniStack 10.0 by RocketSeat
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/guuhx97/bethehero">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

## 📰 Back-end

No back-end ou API, é onde de fato as funções de cadastro, busca, entre outras são executadas. É responsabilidade dele também realizar a integração com bando de dados inserindo e buscando informações. Por default, a API está utilizando a porta `3333`, mas que pode ser alterada no arquivo **server.js**.


## 🌱 Rotas
| Rota | Método | Função | Descrição |
| :--- | :--- | :--- | :---|
| `/devs` | `POST` | `DevController.store` | `Cadastra um novo DEV no Banco de Dados.` |
| `/devs` | `GET` | `DevController.index` | `Busca as DEVs que estão cadastradas no Banco de dados.` |
| `/search` | `GET` | `SearchController.index` | `Realiza a busca dos DEVs com base na distancia máxima e no filtro nas tecnologias informadas pelo usuário.` |

-------------------------



## 🔄 Executar
- Entrar na pasta `backend`;
 - Executar `yarn install` para instalar dependências do projeto;
 - Executar `yarn dev` para que o projeto seja executado;

 ## 📝 Licença
Este projeto está sobre a licença MIT. Veja o arquivo [LICENSE](../LICENSE.md) para mais detalhes.


---
<h4 align="center">
  Feito com ❤️ by Gustavo Souza
</h4>
