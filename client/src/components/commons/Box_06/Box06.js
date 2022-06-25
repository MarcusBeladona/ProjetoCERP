import "./Box06.css"
import React from "react"
import { Button } from 'reactstrap';
import { FichaAvaliacaoDisable } from "../FichaDisable/FichaDisable";

export function Box06(){
    let nome = "Hermes";
    return(
        <div className="box_05">
                <div className="topo_box">
                    <h1 className="titulo_cadastrar">Visualizar Avaliação</h1>
                </div>

                <FichaAvaliacaoDisable></FichaAvaliacaoDisable>
                
                <div className="botoes_baixo">
                    <Button className="botao_cancelar">Voltar</Button>
                    <Button className="botao_editar">Editar</Button>
                </div>
      </div>  
        
    )
}