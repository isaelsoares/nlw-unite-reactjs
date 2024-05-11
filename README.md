# NLW Unite: pass.in frontend

A plataforma Pass.in é uma ferramenta de gerenciamento de participantes de eventos, equipada com um painel de controle para os organizadores.

Um dos aspectos mais destacados deste projeto é a utilização de persistência de estados de URL, garantindo a continuidade das interações dos usuários mesmo após a atualização da página. Além disso, destaca-se a implementação de uma interface completamente padronizada, seguindo os princípios de design com o auxílio do Tailwind CSS.

O desenvolvimento desta aplicação ocorreu durante o NLW Unite da [Rocketseat](https://www.rocketseat.com.br/), empregando predominantemente tecnologias como React, TypeScript e Tailwind.

# Preview

![preview.png](https://github.com/vivianemartini/nlw-unite/blob/main/src/assets/preview.png)

# 🛠️ Tecnologias 

- Vite
- TypeScript
- Tailwind
- Lucide icons

# 📚 Bibliotecas

- Tailwind-merge
- FakerJS
- DayJS

# 🚀 Características

- Integração com API em Node.js
- Pesquisa por participante
- Paginação
- Definir instruções de URL com parâmetros de consulta


# 👷 Inicie o front-end

Clonar repositório

```
git clone git@github.com:vivianemartini/nlw-unite.git
```
Instalar dependências

```
npm i
```
Iniciar aplicação

```
npm run dev
```

# Configure o back-end

Backend utilizado disponível em [RocketNodeJs](https://github.com/rocketseat-education/nlw-unite-nodejs)


**Você precisa instalar o [Node.js](https://nodejs.org/en/download/) e depois, clonar o projeto via HTTPS, usando o comando abaixo:**

```
git clone https://github.com/rocketseat-education/nlw-unite-nodejs.git
```

**Instalar dependências**

```
npm i
```

**Criar o arquivo .env e colar o seguinte código**
```env
DATABASE_URL="file:./dev.db"
```

**Preencha o banco de dados com o comando**
```bash
npx prisma db seed
```

**Iniciar o servidor**
```bash
npm run dev
```


📕 License

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações

<br> 

<p align="center">
  Feito por Isael Soares👋🏽 <a href="https://www.linkedin.com/in/isaelsoares/" target="_blank">Entre em contato!</a>  
</p>

