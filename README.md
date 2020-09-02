<h1 align="center">Original.io</h1>

<p align="center">
Transformamos sonhos e desejos em experiências digitais apaixonantes.
</p>

<p align="center">
  <a href="#technologies">Tecnologias</a> |
  <a href="#how-to-use">Como usar</a>
</p>

<a id="technologies"></a>

## :rocket: Tecnologias

Este projeto é um desafio proposto pela [**original-io**][original-io] e foi desenvolvido com as tecnologias:

- [React.js][react]
- [Create React App][cra]
- [React Redux][redux]
- [Json-Server][json-server]
- [VS Code][vscode]
- [Yarn]
- [Git]

<a id="how-to-use"></a>

## :information_source: Como usar

É preciso ter o [Json Server][json-server] instalado em seu computador.

```bash
$ yarn global add json-server
```

```bash
# Baixando o repositório

$ git clone https://github.com/Dailton-Bastos/original-io.git
```

```bash
# Instale as dependências do projeto

$ cd original-io

$ yarn install
```

```bash
# Para iniciar o servidor

$ json-server --watch --port 3333 server.json

$ yarn start
```

Aplicação estará disponível em `http://localhost:3000` em seu navegador.  
Uma versão online está disponível [**aqui**][site-online]

![Image][home]
![Image][lightbox]
![Image][cart]

---

Feito com :heart: por **Dailton Bastos**

[react]: https://reactjs.org/
[cra]: https://github.com/facebook/create-react-app
[redux]: https://redux.js.org/basics/usage-with-react
[json-server]: https://github.com/typicode/json-server
[vscode]: https://code.visualstudio.com/
[yarn]: https://yarnpkg.com/
[git]: https://git-scm.com/
[original-io]: https://github.com/original-io/join-us
[home]: .github/assets/home.png
[lightbox]: .github/assets/lightbox.png
[cart]: .github/assets/cart.png
[site-online]: https://nostalgic-knuth-daaba7.netlify.app/
