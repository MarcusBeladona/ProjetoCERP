import "./PaginaVisualizar.css";

import { Box03 } from "../components/Box_03/Box03";
// import { Box04 } from "../components/Box_04/Box04";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { CheckLogin } from "../App";

export function PaginaVisualizar() {
	if (CheckLogin()) {
		return (
			<div className="pagina-v">
				<Navbar></Navbar>

				<div className="Conteudo">
					<Sidebar></Sidebar>
					<div className="Area">
						<Box03></Box03>
						{/* <Box04></Box04> */}
					</div>

					<div className="boox-v2"></div>
				</div>
			</div>
		);
	}
}
