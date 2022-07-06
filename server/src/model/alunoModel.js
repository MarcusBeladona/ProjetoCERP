const mongoose = require("mongoose");

const alunoSchema = new mongoose.Schema({
  // Dados do Aluno
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  nome: {
    type: String,
    required: true,
  },
  nascimento: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },

  cpf: {
    type: String,
    required: true,
  },

  // Endereço
  rua: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
  bairro: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  cep: {
    type: String,
    required: true,
  },

  // Matrícula
  dataMatricula: {
    type: String,
    required: true,
  },
  objetivo: {
    type: String,
    required: true,
  },
  horario: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("aluno", alunoSchema);
