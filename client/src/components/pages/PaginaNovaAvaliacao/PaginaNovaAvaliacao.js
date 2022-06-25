import { Box05 } from "../../components/commons/Box_05/Box05";
import { Navbar } from "../../components/commons/Navbar/Navbar";
import { NavbarLateral } from "../../components/commons/NavbarLateral/NavbarLateral";
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