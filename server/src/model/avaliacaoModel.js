const mongoose = require("mongoose");

const avaliacaoSchema = new mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	alunoId: {
		type: mongoose.Schema.ObjectId,
		ref: "aluno"
	},
	avaliadorId: {
		type: mongoose.Schema.ObjectId,
		ref: "admin"
	},
	dataAvaliacao: {
		type: String
	},
	// Bioimpedância
	peso: {
		type: String
	},
	altura: {
		type: String
	},
	imc: {
		type: String
	},
	gorduraCorporal: {
		type: String
	},
	idadeCorporal: {
		type: String
	},
	gorduraVisceral: {
		type: String
	},
	musculo: {
		type: String
	},
	// Tronco
	torax: {
		type: String
	},
	cintura: {
		type: String
	},
	abdomen: {
		type: String
	},
	quadril: {
		type: String
	},
	cinturaoEscapular: {
		type: String
	},
	pescoco: {
		type: String
	},

	// Membros superiores
	punho: {
		type: String
	},
	antebraco: {
		type: String
	},
	bracoRelaxado: {
		type: String
	},
	bracoContraido: {
		type: String
	},
	envergadura: {
		type: String
	},

	// Membros inferiores
	quadricepsProximal: {
		type: String
	},
	quadricepsMedial: {
		type: String
	},
	quadricepsDistal: {
		type: String
	},
	panturrilha: {
		type: String
	},
	tornozelo: {
		type: String
	},
});

module.exports = mongoose.model("avaliacao", avaliacaoSchema);
