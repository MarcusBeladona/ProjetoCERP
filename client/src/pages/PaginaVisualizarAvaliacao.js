import { Box06 } from "../components/Box_06/Box06";
import { Navbar } from "../components/Navbar";
import { NavbarLateral } from "../components/NavbarLateral/NavbarLateral";
import "./PaginaVisualizarAvaliacao.css";

export function PaginaVisualizarAvaliacao() {
  return (
    <div className="pagina-v">
      <Navbar></Navbar>

      <div className="conteudo">
        <NavbarLateral></NavbarLateral>
        <div className="boxavaliacao">
          <Box06></Box06>
        </div>
      </div>
    </div>
  );
}
