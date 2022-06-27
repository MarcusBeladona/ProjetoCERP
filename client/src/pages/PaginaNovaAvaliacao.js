import { Box05 } from "../components/Box_05/Box05";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import "./PaginaNovaAvaliacao.css";

export function PaginaNovaAvaliacao() {
  return (
    <div className="pagina-v">
      <Navbar></Navbar>

      <div className="conteudo">
        <Sidebar></Sidebar>
        <div className="boxavaliacao">
          <Box05></Box05>
        </div>
      </div>
    </div>
  );
}
