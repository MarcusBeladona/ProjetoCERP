// Sistema
/* import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App"; */
import "./PaginaInicial.css";

// Componentes
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

import { Box } from "../components/Box/Box";
import { Tabela } from "../components/Tabela/Tabela";

export function PaginaInicial() {
	/* const user = useContext(AuthContext).tokenBody;
	const navigate = useNavigate(); */

	/* useEffect(() => {
		if (user.tokenBody.token === "null") {
			alert("É necessário entrar na sua conta.");
			navigate("/login");
		}
	}, [user.tokenBody.token, navigate]); */

	return (
		<section className="PaginaInicial">
			<Navbar></Navbar>
			<section className="conteudo">
				<Sidebar></Sidebar>
				<section className="area">
					<Tabela></Tabela>
				</section>
			</section>
		</section>
	);
}
