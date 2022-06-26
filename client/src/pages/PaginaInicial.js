// Sistema
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Componentes
import { Navbar } from "../../commons/Navbar/Navbar";

import { NavbarLateral } from "../../commons/NavbarLateral/NavbarLateral";
import { Box } from "../components/Box/Box";
import { AuthContext } from "../App";

export function PaginaInicial() {
	const user = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (user.tokenBody.token === "null") {
			alert("É necessário entrar na sua conta.");
			navigate("/login");
		}
	}, [user.tokenBody.token, navigate]);

	return (
		<div className="PaginaIncial">
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
