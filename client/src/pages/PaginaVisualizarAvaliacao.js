import { Box06 } from "../components/Box_06/Box06";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import "./PaginaVisualizarAvaliacao.css";

export function PaginaVisualizarAvaliacao() {
  return (
    <div className="pagina-v">
      <Navbar></Navbar>

      <div className="conteudo">
        <Sidebar></Sidebar>
        <div className="boxavaliacao">
          <Box06></Box06>
        </div>
      </div>
    </div>
  );
}
