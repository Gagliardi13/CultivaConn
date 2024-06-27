const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

// Definir uma rota de exemplo
app.get('/', (req, res) => {
  res.send('Servidor está rodando!');
});

// Definir rotas
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  // Lógica para registrar o usuário no banco de dados
  res.send('Usuário registrado com sucesso!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
