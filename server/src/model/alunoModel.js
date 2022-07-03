const mongoose = require("mongoose");

const alunoSchema = new mongoose.Schema({
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
	idade: {
		type: Number,
		required: false,
	},
	rua: {
		type: String,
		required: true,
	},
  numero: {
    type: Number,
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
		required: false,
	},
	celular: {
		type: Number,
		required: false,
	},
	telefone: {
		type: Number,
		required: true,
	},
	sexo: {
		type: String,
		required: false,
	},
	cpf: {
		type: Number,
		required: true,
	},
  rg: {
    type: Number,
    required: true,
  },
	objetivo: {
		type: String,
		required: false,
	},
	horario: {
		type: String,
		required: false,
	},
});

module.exports = mongoose.model("aluno", alunoSchema);
