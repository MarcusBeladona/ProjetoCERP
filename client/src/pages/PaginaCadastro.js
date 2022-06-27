import "./PaginaCadastro.css";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Box02 } from "../components/Box_02/Box02";

export function PaginaCadastro() {
  return (
    <div className="pagina">
      <Navbar></Navbar>

      <div className="conteudo">
        <Sidebar></Sidebar>
        <div className="boox">
          <Box02></Box02>
        </div>
      </div>
    </div>
  );
}
