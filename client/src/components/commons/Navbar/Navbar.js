import "./Navbar.css"
import React from "react"
import { Button } from "reactstrap"
import { Box } from "../Box/Box";

export function Navbar(){
    let nome = "Hermes";
    return(
    <div>
        <nav class="nav-superior">
            <a href="">Olá, {nome}</a>
            <a href="">Sair</a>
        </nav>
    </div>


    )

}