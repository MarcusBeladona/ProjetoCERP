import "./Box05.css"
import React from "react"
import { Button } from 'reactstrap';
// import { TabelaAvaliacao } from "../TabelaAvaliacao/TabelaAvaliacao";
import { FichaAvaliacao } from "../Ficha/Ficha";



export function Box05(){
    // let nome = "Hermes";
    return(
        <div className="box_05">
                <div className="topo_box">
                    <h1 className="titulo_cadastrar">Nova Avaliação</h1>
                </div>

                <FichaAvaliacao></FichaAvaliacao>
                
                <div className="botoes_baixo">
                    <Button className="botao_cancelar">Cancelar</Button>
                    <Button className="botao_salvar">Salvar</Button>
                </div>

      </div>  
        
    )
}