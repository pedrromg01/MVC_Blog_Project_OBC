const express = require('express');
const path = require('path');
const router = require('./routes.js');

const app = express();

// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configuração para servir arquivos estáticos
app.use(express.static('public'))

// Configuração para ler dados do formulário
app.use(express.urlencoded({ extended: true }))

// Rotas da aplicação.
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`)});