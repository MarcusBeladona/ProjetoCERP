const avaliacaoModel = require("../model/avaliacaoModel");
const avaliacaoView = require("../view/avaliacaoView");

postAvaliacao = (req, res) => {
  avaliacaoModel
    .create({
      //   aluno: como fica aqui hein
      torax: req.body.torax,
      cintura: req.body.cintura,
      abdomen: req.body.abdomen,
      quadril: req.body.quadril,
      cinturaoescapular: req.body.cinturaoescapular,
      pescoco: req.body.pescoco,
      punho: req.body.punho,
      antebraco: req.body.antebraco,
      bracorelaxado: req.body.bracorelaxado,
      bracocontraido: req.body.bracocontraido,
      envergadura: req.body.envergadura,
      quadricepsproximal: req.body.quadricepsproximal,
      quadricepsmedial: req.body.quadricepsmedial,
      quadricepsdistal: req.body.quadricepsdistal,
      panturrilha: req.body.panturrilha,
      tornozelo: req.body.tornozelo,
      peso: req.body.peso,
      altura: req.body.altura,
      imc: req.body.imc,
    })
    .then((a) => res.json(avaliacaoView.render(a)))
    .catch((e) => res.status(500).send(e));
};
