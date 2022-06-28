// Sistema
import { CheckLogin } from "../App";
import "./PaginaInicial.css";

// Componentes
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Tabela } from "../components/Tabela";

export function PaginaInicial() {
	if (CheckLogin()) {
		return (
			<div className="PaginaInicial">
				<Navbar></Navbar>
				<div className="Conteudo">
					<Sidebar></Sidebar>
					<div className="Area">
						<Tabela></Tabela>
					</div>
				</div>
			</div>
		);
	}
}
