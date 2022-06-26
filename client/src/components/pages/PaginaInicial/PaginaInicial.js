import "./PaginaInicial.css";
import { Navbar } from "../../commons/Navbar/Navbar";
import { Box } from "../../commons/Box/Box";
import { NavbarLateral } from "../../commons/NavbarLateral/NavbarLateral";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../App";
import { useNavigate } from "react-router-dom";

export function PaginaInicial() {
	const user = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (user.tokenBody.token === "null") {
			alert("É necessário entrar na sua conta.");
			navigate("/login");
		} else {
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
	}, []);
}
