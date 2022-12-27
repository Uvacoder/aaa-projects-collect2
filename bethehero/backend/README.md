<h1 align="center">
    <img alt="Be The Hero" src="../.github/logo.svg" />
</h1>

<h4 align="center">
  🚀 Semana OmniStack 11.0 by RocketSeat
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/guuhx97/bethehero">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

## 📰 Back-end

No back-end ou API, é onde de fato as funções de cadastro, busca, login, entre outras são executadas. É responsabilidade dele também realizar a integração com bando de dados insirindo e buscando informações. Por default, a API está utilizando a porta `3333`, mas que pode ser alterada no arquivo **server.js**.


## 🌱 Rotas
| Rota | Método | Função | Descrição |
| :--- | :--- | :--- | :---|
| `/ongs` | `GET` | `OngController.index` | `Busca as ONGs que estão cadastradas no Banco de dados.` |
| `/ongs` | `POST` | `OngController.create` | `Cria uma nova ONG no Banco de Dados.` |
| `/session` | `POST` | `SessionController.create` | `Cria uma nova sessão quando ONG se conecta no sistema.` |
| `/incidents` | `GET` | `IncidentController.index` | `Busca todos os incidents no Banco de Dados.` |
| `/incidents` | `POST` | `IncidentController.create` | `Cria um novo incidente no Banco de Dados.` |
| `/incidents/:id` | `DELETE` | `IncidentController.delete` | `Deleta uma ONG que já está cadastrada no Banco de Dados.` |
| `/profile` | `GET` | `ProfileController.index` | `Busca no Banco de Dados todos os incidentes de uma ONG especifica.` |
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
