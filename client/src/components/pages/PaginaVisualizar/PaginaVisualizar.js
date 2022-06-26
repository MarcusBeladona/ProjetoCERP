import "./PaginaVisualizar.css"
import { Navbar } from "../../commons/Navbar/Navbar";
import { NavbarLateral } from "../../commons/NavbarLateral/NavbarLateral";
import { Box03 } from "../../commons/Box_03/Box03";
import { Box04 } from "../../commons/Box_04/Box04";


export function PaginaVisualizar(){
    return(

        <div className="pagina-v">

            <Navbar></Navbar>
            
            <div className="conteudo">
                <NavbarLateral></NavbarLateral>
                <div className="boox-v">
                    <Box03></Box03>
                    <Box04></Box04>
                </div>

                <div className="boox-v2">

                </div>

            </div>
        </div>
    )

}

