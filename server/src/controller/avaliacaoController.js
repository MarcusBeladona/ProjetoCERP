const avaliacaoModel = require("../model/avaliacaoModel");
const avaliacaoView = require("../view/avaliacaoView");

postAvaliacao = (req, res) => {
	avaliacaoModel
		.create({
			alunoId: req.body.alunoId,
			dataAvaliacao: req.body.dataAvaliacao,
			// aluno: req.body.aluno,
			peso: req.body.peso,
			altura: req.body.altura,
			imc: req.body.imc,
			gorduraCorporal: req.body.gorduraCorporal,
			idadeCorporal: req.body.idadeCorporal,
			gorduraVisceral: req.body.gorduraVisceral,
			musculo: req.body.musculo,

			torax: req.body.torax,
			cintura: req.body.cintura,
			abdomen: req.body.abdomen,
			quadril: req.body.quadril,
			cinturaoEscapular: req.body.cinturaoEscapular,
			pescoco: req.body.pescoco,

			punho: req.body.punho,
			antebraco: req.body.antebraco,
			bracoRelaxado: req.body.bracoRelaxado,
			bracoContraido: req.body.bracoContraido,
			envergadura: req.body.envergadura,

			quadricepsProximal: req.body.quadricepsProximal,
			quadricepsMedial: req.body.quadricepsMedial,
			quadricepsDistal: req.body.quadricepsDistal,
			panturrilha: req.body.panturrilha,
			tornozelo: req.body.tornozelo,
		})
		.then(a => res.json(a))
		.catch(e => res.status(500).send(e));
};

listarAvaliacoes = (req, res) => {
	avaliacaoModel
		.find({ alunoId: req.params.id })
		.populate("alunoId")
		.populate("avaliadorId", "-senha")
		.exec()
		.then(a => res.status(200).json(a))
		.catch(e => res.status(404).send(e));
};

putEditAvaliacao = (req, res) => {
	avaliacaoModel
		.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.exec()
		.then(a => res.status(200).json(a))
		.catch(e => res.status(404).send(e));
};

deleteAvaliacao = (req, res) => {
	avaliacaoModel
		.findByIdAndDelete(req.params.id)
		.exec()
		.then(a => res.status(200).json("Avaliação deletada com sucesso!"))
		.catch(e => res.status(400).send(e));
};

module.exports = {
	postAvaliacao,
	listarAvaliacoes,
	putEditAvaliacao,
	deleteAvaliacao,
};
