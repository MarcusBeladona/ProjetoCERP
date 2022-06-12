import "./PaginaInicial.css"
import { Navbar } from "../../Navbar/Navbar";
import { Box } from "../../Box/Box";
import { NavbarLateral } from "../../NavbarLateral/NavbarLateral";

export function PaginaInicial(){
    return(

        <div className="pagina">

            <Navbar></Navbar>
            
            <div className="conteudo">
                <NavbarLateral></NavbarLateral>
                <div className="boox">
                    <Box></Box>
                </div>
            </div>
        </div>
    )

}