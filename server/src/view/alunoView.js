function render(aluno) {
  return {
    id: aluno._id,
    nome: aluno.nome,
    idade: aluno.idade,
    endereco: aluno.endereco,
    cep: aluno.cep,
    bairro: aluno.bairro,
    cidade: aluno.cidade,
    estado: aluno.estado,
    celular: aluno.celular,
    telefone: aluno.telefone,
    sexo: aluno.sexo,
    cpf: aluno.cpf,
    objetivo: aluno.objetivo,
    horario: aluno.horario,
  };
}

function renderAll(aluno) {
  return aluno.map(render);
}

module.exports = { render, renderAll };
