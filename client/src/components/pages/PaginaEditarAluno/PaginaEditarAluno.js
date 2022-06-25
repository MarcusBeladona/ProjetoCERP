import "./PaginaEditarAluno.css"
import { Navbar } from "../../components/commons/Navbar/Navbar";
import { NavbarLateral } from "../../components/commons/NavbarLateral/NavbarLateral";
import { Box07 } from "../../components/commons/Box_07/Box_07";
import { Box08 } from "../../components/commons/Box_08/Box_08";

export function PaginaEditarAluno(){
    return(

        <div className="pagina">

            <Navbar></Navbar>
            
            <div className="conteudo-ea">
                <NavbarLateral></NavbarLateral>
                <div className="boox">
                    <Box07></Box07>
                    <Box08></Box08>
                </div>
            </div>
        </div>
    )

}