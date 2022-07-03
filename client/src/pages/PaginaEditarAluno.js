import "./PaginaEditarAluno.css";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";

import { Box07 } from "../components/Box_07/Box_07";
import { Box08 } from "../components/Box_08/Box_08";
import { CheckLogin } from "../App";

export function PaginaEditarAluno() {
	if (CheckLogin()) {
		return (
			<div className="PaginaEditarAluno">
				<Navbar></Navbar>
				<div className="Conteudo">
					<Sidebar></Sidebar>
					<div className="Area">
						<Box07></Box07>
						<Box08></Box08>
					</div>
				</div>
			</div>
		);
	}
}
