const alunoModel = require("../model/alunoModel");
const alunoView = require("../view/alunoView");

postAluno = (req, res) => {
  alunoModel
    .create({
      nome: req.body.nome,
      idade: req.body.idade,
      endereco: req.body.endereco,
      cep: req.body.cep,
      bairro: req.body.bairro,
      cidade: req.body.cidade,
      estado: req.body.estado,
      celular: req.body.celular,
      telefone: req.body.telefone,
      sexo: req.body.sexo,
      cpf: req.body.cpf,
      objetivo: req.body.objetivo,
      horario: req.body.horario,
    })
    .then((a) => res.json(alunoView.render(a)))
    .catch((e) => res.status(500).send(e));
};

getAlunoById = (req, res) => {
  alunoModel
    .findById(req.params.id)
    .exec()
    .then((a) => res.status(200).json(alunoView.render(a)))
    .catch((e) => res.status(404).send(e));
};

getAluno = (req, res) => {
  alunoModel
    .find()
    .exec()
    .then((a) => res.status(200).json(alunoView.renderAll(a)))
    .catch((e) => res.status(500).send(e));
};

module.exports = {
  postAluno,
  getAlunoById,
  getAluno,
};
