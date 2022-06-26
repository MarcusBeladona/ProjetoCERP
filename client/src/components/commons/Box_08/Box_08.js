import "./Box_08.css"
import React from "react"
import { Button } from 'reactstrap';
// import { JSX } from "react";
import { FichaEditar } from "../FichaEditar/FichaEditar";


export function Box08(){
    // let nome = "Hermes";
    return(
        
        <div className="box_02">
            <h1 className="titulo_cadastrar">Editar Avaliação </h1>
            <FichaEditar></FichaEditar>
            <div className="botoes_baixo">
                    <Button className="botao_cancelar">Voltar</Button>
                    <Button className="botao_salvar">Salvar</Button>
            </div>
          
            
        </div>
    )
}