import "./Box_03.css"
import React from "react"

import { Button } from 'reactstrap';
import { FormularioBloc } from "../FormularioBloc/FormularioBloc";


export function Box03(){
    // let nome = "Hermes";
    return(
        
        <div className="conteudobox_03">
            <div className="box_03">
                <h1 className="titulo_cadastrar">Visualizar Aluno </h1>
                <FormularioBloc></FormularioBloc>
                <div className="botoes_baixo">
                    <Button className="botao_c">
                        Editar
                    </Button>
                </div>
            
            </div>
        </div>

        
    )
}