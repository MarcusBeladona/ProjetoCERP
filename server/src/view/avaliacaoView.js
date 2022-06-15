function render(avaliacao) {
  return {
    id: avaliacao._id,
    // aluno: bota a view aluno aquir
    torax: avaliacao.torax,
    cintura: avaliacao.cintura,
    abdomen: avaliacao.abdomen,
    quadril: avaliacao.quadril,
    cinturaoescapular: avaliacao.cinturaoescapular,
    pescoco: avaliacao.pescoco,
    punho: avaliacao.punho,
    antebraco: avaliacao.antebraco,
    bracorelaxado: avaliacao.bracorelaxado,
    bracocontraido: avaliacao.bracocontraido,
    envergadura: avaliacao.envergadura,
    quadricepsproximal: avaliacao.quadricepsproximal,
    quadricepsmedial: avaliacao.quadricepsmedial,
    quadricepsdistal: avaliacao.quadricepsdistal,
    panturrilha: avaliacao.panturrilha,
    tornozelo: avaliacao.tornozelo,
    peso: avaliacao.peso,
    altura: avaliacao.altura,
    imc: avaliacao.imc
  };
}

function renderAll(avaliacao) {
  return avaliacao.map(render);
}

module.exports = { render, renderAll };
