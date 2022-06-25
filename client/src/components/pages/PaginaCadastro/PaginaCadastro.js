import "./PaginaCadastro.css"
import { Navbar } from "../../components/commons/Navbar/Navbar";
import { NavbarLateral } from "../../components/commons/NavbarLateral/NavbarLateral";
import { Box02 } from "../../commons/Box_02/Box02";

export function PaginaCadastro(){
    return(

        <div className="pagina">

            <Navbar></Navbar>
            
            <div className="conteudo">
                <NavbarLateral></NavbarLateral>
                <div className="boox">
                    <Box02></Box02>
                </div>
            </div>
        </div>
    )

}