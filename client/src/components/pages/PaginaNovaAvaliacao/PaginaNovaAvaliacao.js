import { Box05 } from "../../commons/Box_05/Box05";
import { Navbar } from "../../commons/Navbar/Navbar";
import { NavbarLateral } from "../../commons/NavbarLateral/NavbarLateral";
import "./PaginaNovaAvaliacao.css"

export function PaginaNovaAvaliacao(){
    return(

    <div className="pagina-v">

        <Navbar></Navbar>
        
        <div className="conteudo">
            <NavbarLateral></NavbarLateral>
            <div className="boxavaliacao">
                <Box05></Box05>
            </div>
        </div>
    </div>

    );

};