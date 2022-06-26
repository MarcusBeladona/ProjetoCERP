const mongoose = require("mongoose");

const avaliacaoSchema = new mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	aluno: {
		type: mongoose.Schema.ObjectId,
		ref: "Aluno",
	},
	torax: {
		type: Number,
		required: true,
	},
	cintura: {
		type: Number,
		required: true,
	},
	abdomen: {
		type: Number,
		required: true,
	},
	quadril: {
		type: Number,
		required: true,
	},
	cinturao_escapular: {
		type: Number,
		required: true,
	},
	pescoco: {
		type: Number,
		required: true,
	},
	punho: {
		type: Number,
		required: true,
	},
	antebraco: {
		type: Number,
		required: true,
	},
	braco_relaxado: {
		type: Number,
		required: true,
	},
	braco_contraido: {
		type: Number,
		required: true,
	},
	envergadura: {
		type: Number,
		required: true,
	},
	quadriceps_proximal: {
		type: Number,
		required: true,
	},
	quadriceps_medial: {
		type: Number,
		required: true,
	},
	quadriceps_distal: {
		//boto quadriceps_distal ou quadricepsDistal? vale pros outros que são duas palavras tbm
		type: Number,
		required: true,
	},
	panturrilha: {
		type: Number,
		required: true,
	},
	tornozelo: {
		type: Number,
		required: true,
	},
	peso: {
		type: Number,
		required: true,
	},
	altura: {
		type: Number,
		required: true,
	},
	imc: {
		// talvez o imc não precise de entrada, a gente mostra ele na tela como um cálculo simples
		type: Number,
		required: false,
	},
});

module.exports = mongoose.model("avaliacao", avaliacaoSchema);
