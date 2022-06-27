import "./PaginaEditarAluno.css";
import { Navbar } from "../components/Navbar";
import { Box07 } from "../components/Box_07/Box_07";
import { Box08 } from "../components/Box_08/Box_08";
import { NavbarLateral } from "../components/NavbarLateral/NavbarLateral";

export function PaginaEditarAluno() {
  return (
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
  );
}