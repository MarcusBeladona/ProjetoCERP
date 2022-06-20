const avaliacaoModel = require("../model/avaliacaoModel");
const avaliacaoView = require("../view/avaliacaoView");

postAvaliacao = (req, res) => {
  avaliacaoModel
    .create({
      aluno: req.body.aluno,
      torax: req.body.torax,
      cintura: req.body.cintura,
      abdomen: req.body.abdomen,
      quadril: req.body.quadril,
      cinturao_escapular: req.body.cinturao_escapular,
      pescoco: req.body.pescoco,
      punho: req.body.punho,
      antebraco: req.body.antebraco,
      braco_relaxado: req.body.braco_relaxado,
      braco_contraido: req.body.braco_contraido,
      envergadura: req.body.envergadura,
      quadriceps_proximal: req.body.quadriceps_proximal,
      quadriceps_medial: req.body.quadriceps_medial,
      quadriceps_distal: req.body.quadriceps_distal,
      panturrilha: req.body.panturrilha,
      tornozelo: req.body.tornozelo,
      peso: req.body.peso,
      altura: req.body.altura,
      imc: req.body.imc,
    })
    .then((a) => res.json(avaliacaoView.render(a)))
    .catch((e) => res.status(500).send(e));
};

listarAvaliacoes = (req, res) => {
  avaliacaoModel
    .find({aluno:req.params.id})
    .exec()
    .then((a) => res.status(200).json(avaliacaoView.renderAll(a)))
    .catch((e) => res.status(404).send(e));
}

module.exports = {
  postAvaliacao, 
  listarAvaliacoes,
}