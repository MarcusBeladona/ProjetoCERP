const alunoModel = require("../model/alunoModel");
const alunoView = require("../view/alunoView");

postAluno = (req, res) => {
	alunoModel
		.create({
			nome: req.body.nome,
			cep: req.body.cep,
			bairro: req.body.bairro,
			cidade: req.body.cidade,
			telefone: req.body.telefone,
			cpf: req.body.cpf,
			nascimento: req.body.nascimento,
			numero: req.body.numero,
			rua: req.body.rua,
			rg: req.body.rg,
		})
		.then(a => res.json(alunoView.render(a)))
		.catch(e => res.status(500).send(e));
};

getAlunoById = (req, res) => {
	alunoModel
		.findById(req.params.id)
		.exec()
		.then(a => res.status(200).json(alunoView.render(a)))
		.catch(e => res.status(404).send(e));
};

getAlunos = (req, res) => {
	alunoModel
		.find()
		.exec()
		.then(a => res.status(200).json(alunoView.renderAll(a)))
		.catch(e => res.status(500).send(e));
};

putEditAluno = (req, res) => {
	alunoModel
		.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.exec()
		.then(a => res.status(200).json(alunoView.render(a)))
		.catch(e => res.status(404).send(e));
};

deleteAluno = (req, res) => {
	alunoModel
		.findByIdAndDelete(req.params.id)
		.exec()
		.then(a => res.status(200).json("Aluno deletado com sucesso!"))
		.catch(e => res.status(400).send(e));
};

module.exports = {
	postAluno,
	getAlunoById,
	getAlunos,
	putEditAluno,
	deleteAluno,
};
