import { Box08 } from "../components/Box_08/Box_08"
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import "./PaginaEditarAvaliacao.css";

export function PaginaEditarAvaliacao() {
	return (
		<div className="pagina-v">
			<Navbar></Navbar>

			<div className="conteudo">
				<Sidebar></Sidebar>
				<div className="boxavaliacao">
					<Box08></Box08>
				</div>
			</div>
		</div>
	);
}