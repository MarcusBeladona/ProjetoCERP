const mongoose = require("mongoose");

const alunoSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  cep: {
    type: Number,
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
  celular: {
    type: Number,
    required: true,
  },
  telefone: {
    type: Number,
    required: true,
  },
  sexo: {
    type: String,
    required: true,
  },
  cpf: {
    type: Number,
    required: true,
  },
  objetivo: {
    type: String,
    required: true,
  },
  horaio: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("aluno", alunoSchema);
