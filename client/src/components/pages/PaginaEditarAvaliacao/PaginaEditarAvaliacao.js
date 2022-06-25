import { Box08 } from "../../components/commons/Box_08/Box_08";
import { Navbar } from "../../components/commons/Navbar/Navbar";
import { NavbarLateral } from "../../components/commons/NavbarLateral/NavbarLateral";
import "./PaginaEditarAvaliacao.css"

export function PaginaEditarAvaliacao(){
    return(

    <div className="pagina-v">

        <Navbar></Navbar>
        
        <div className="conteudo">
            <NavbarLateral></NavbarLateral>
            <div className="boxavaliacao">
                <Box08></Box08>
            </div>
        </div>
    </div>

    );

};