import "./PaginaVisualizar.css";
import { Navbar } from "../components/Navbar";
import { NavbarLateral } from "../components/NavbarLateral/NavbarLateral";
import { Box03 } from "../components/Box_03/Box03";
import { Box04 } from "../components/Box_04/Box04";

export function PaginaVisualizar() {
  return (
    <div className="pagina-v">
      <Navbar></Navbar>

      <div className="conteudo">
        <NavbarLateral></NavbarLateral>
        <div className="boox-v">
          <Box03></Box03>
          <Box04></Box04>
        </div>

        <div className="boox-v2"></div>
      </div>
    </div>
  );
}
