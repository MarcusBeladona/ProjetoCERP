import "./Box_02.css"
import React from "react"
import { Formulario } from "../Formulario/Formulario";
import { Button } from 'reactstrap';
// import { JSX } from "react";


export function Box02(){
    // let nome = "Hermes";
    return(
        
        <div className="box_02">
            <h1 className="titulo_cadastrar">Cadrastrar Alunos </h1>
            <Formulario></Formulario>

            <Button className="botao_c">
                Cadrastrar
            </Button>
        </div>
    )
}