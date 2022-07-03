import "./Box_04.css"
import React from "react"
import { Button } from 'reactstrap';
import { TabelaAvaliacao } from "../TabelaAvaliacao/TabelaAvaliacao";
import { useNavigate } from "react-router-dom";
import { Resultados } from "../Resultados/Resultados";




export function Box04(){
    // let nome = "Hermes";
    const navigate = useNavigate();
    return(
        
        <div className="box_04">
            <div className="componetes_v">
            <h1 className="titulo_cadastrar">Visualizar Avaliações </h1>
            <TabelaAvaliacao></TabelaAvaliacao>
            <h1 className="titulo_cadastrar">Resultados </h1>
            <Resultados></Resultados>
            </div>

            <div className="botoes_baixo">
                <Button className="botao_c"
                onClick={() => {
                    navigate("/novaAvaliacao");
                  }}>
                    Nova avaliação
                </Button>
            </div>
            
        </div>
    )
}