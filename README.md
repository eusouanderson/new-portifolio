# Meu Portfólio

Bem-vindo ao meu portfólio! Este site foi desenvolvido para mostrar meus projetos, habilidades e experiência como desenvolvedor. Ele foi construído com Next.js e tailwind e inclui animações 3D com Three.js e um sistema de envio de e-mails na seção de contato utilizando Nodemailer.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Three.js](https://threejs.org/)
- [Nodemailer](https://nodemailer.com/)
- [React](https://reactjs.org/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Funcionalidades

- **Projetos:** Uma seção dedicada aos meus projetos, com detalhes e links para repositórios ou demonstrações.
- **Tecnologias:** Uma lista das minhas principais tecnologias.
- **Expiência profissional:** Uma breve descrição sobre minha jornada como desenvolvedor.
- **Contato:** Um formulário de contato que utiliza Nodemailer para envio de e-mails diretamente do site.
- **Animações 3D:** Utilização de Three.js para criar animações e tornar a navegação mais envolvente.
- **Animações Motion:** Utilização de framer motion para criar animações e tornar a navegação mais agradável.

## Como Rodar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/AndersonRodrigues479/portifolio-Anderson
    ```
2. Entre na pasta do projeto:
    ```bash
    cd portifolio-Anderson
    ```
3. Instale as dependências:
    ```bash
    pnpm install
    ```
4. Configure as variáveis de ambiente para o Nodemailer:
    - Crie um arquivo `.env.local` na raiz do projeto com as seguintes informações:
        ```env
        RECEIVER_EMAIL=emaildestino@seuemail.com
        SENDER_EMAIL=emailenviador@seuemail.com
        SENDER_PASSWORD=senhadoemailenviador
        ```
5. Inicie o servidor de desenvolvimento:
    ```bash
    pnpm dev
    ```
6. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Deploy no GitHub Pages

O workflow em `.github/workflows/deploy-pages.yml` publica o site automaticamente ao enviar alterações para `main` ou `master`. Em **Settings > Pages**, selecione **GitHub Actions** como origem.

Para habilitar o chat, adicione o secret `GROQ_API_KEY` em **Settings > Secrets and variables > Actions**. Atenção: como o chat chama a Groq diretamente do navegador, essa chave será incluída nos arquivos JavaScript públicos do site. Use uma chave dedicada, limite o uso no painel da Groq e revogue-a se houver consumo inesperado. Não reutilize uma chave com acesso a outros serviços.

## Estrutura do Projeto

```bash
.
├───app
│   └───[language]
├───assets
│   ├───images
│   │   └───projects
│   └───lang
├───components
│   ├───canvas
│   ├───contact-form
│   ├───icons
│   ├───sections
│   ├───slider-3d
│   └───ui
├───config
│   └───constants
│       └───texts
│           ├───en
│           └───pt-br
├───lib
│   └───email
├───styles
├───types
└───utils
```

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões, encontrar bugs ou quiser adicionar novas funcionalidades, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
