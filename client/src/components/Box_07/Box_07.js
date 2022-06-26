import "./Box_07.css";
import React from "react";
import { Button } from "reactstrap";
// import { JSX } from "react";
import { FormularioEditarAluno } from "../FormularioEditarAluno/FormularioEditarAluno";

export function Box07() {
  // let nome = "Hermes";
  return (
    <div className="box_02">
      <h1 className="titulo_cadastrar">Editar Alunos </h1>
      <FormularioEditarAluno></FormularioEditarAluno>
      <div className="botoes_baixo">
        <Button className="botao_cancelar">Voltar</Button>
        <Button className="botao_salvar">Salvar</Button>
      </div>
    </div>
  );
}
