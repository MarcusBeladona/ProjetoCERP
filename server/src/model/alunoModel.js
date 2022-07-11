const mongoose = require("mongoose");

const alunoSchema = new mongoose.Schema({
  // Dados do Aluno
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  nome: {
    type: String,
  },
  nascimento: {
    type: String,
  },
  telefone: {
    type: String,
  },

  cpf: {
    type: String,
  },

  // Endereço
  rua: {
    type: String,
  },
  numero: {
    type: String,
  },
  bairro: {
    type: String,
  },
  cidade: {
    type: String,
  },
  estado: {
    type: String,
  },
  cep: {
    type: String,
  },

  // Matrícula
  dataMatricula: {
    type: String,
  },
  objetivo: {
    type: String,
  },
  horario: {
    type: String,
  },
});

module.exports = mongoose.model("aluno", alunoSchema);
