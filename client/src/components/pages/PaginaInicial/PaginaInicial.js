import "./PaginaInicial.css";
import { Navbar } from "../../commons/Navbar/Navbar";
import { Box } from "../../commons/Box/Box";
import { NavbarLateral } from "../../commons/NavbarLateral/NavbarLateral";

export function PaginaInicial() {
	return (
		<div className="pagina">
			<Navbar></Navbar>
			<div className="conteudo">
				<NavbarLateral></NavbarLateral>
				<div className="boox">
					<Box></Box>
				</div>
			</div>
		</div>
	);
}
