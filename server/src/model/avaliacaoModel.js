const mongoose = require("mongoose");

const avaliacaoSchema = new mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	alunoId: {
		type: mongoose.Schema.ObjectId,
		ref: "aluno",
		required: true,
	},
	avaliadorId: {
		type: mongoose.Schema.ObjectId,
		ref: "admin",
		required: true,
	},
	dataAvaliacao: {
		type: String,
		required: true,
	},
	// Bioimpedância
	peso: {
		type: Number,
		required: true,
	},
	altura: {
		type: Number,
		required: true,
	},
	imc: {
		type: Number,
		required: true,
	},
	gorduraCorporal: {
		type: Number,
		required: true,
	},
	idadeCorporal: {
		type: Number,
		required: true,
	},
	gorduraVisceral: {
		type: Number,
		required: true,
	},
	musculo: {
		type: Number,
		required: true,
	},
	// Tronco
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
	cinturaoEscapular: {
		type: Number,
		required: true,
	},
	pescoco: {
		type: Number,
		required: true,
	},

	// Membros superiores
	punho: {
		type: Number,
		required: true,
	},
	antebraco: {
		type: Number,
		required: true,
	},
	bracoRelaxado: {
		type: Number,
		required: true,
	},
	bracoContraido: {
		type: Number,
		required: true,
	},
	envergadura: {
		type: Number,
		required: true,
	},

	// Membros inferiores
	quadricepsProximal: {
		type: Number,
		required: true,
	},
	quadricepsMedial: {
		type: Number,
		required: true,
	},
	quadricepsDistal: {
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
});

module.exports = mongoose.model("avaliacao", avaliacaoSchema);
