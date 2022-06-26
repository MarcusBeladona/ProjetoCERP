/* import "./Navbar.css";
import React from "react";
//import { Button } from "reactstrap"
//import { Box } from "../Box/Box";

export function Navbar() {
	let nome = "Hermes";
	return (
		<div>
			<nav className="nav-superior">
				<a href=".">Olá, {nome}</a>
				<a href=".">Sair</a>
			</nav>
		</div>
	);
} */

import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

import { useContext } from "react";
import { AuthContext } from "../../../App";

export function Navbar() {
	const user = useContext(AuthContext);
	const navigate = useNavigate();

	if (user.tokenBody.token !== "null") {
		return (
			// Logado
			<nav className="nav-superior">
				<section className="Navegador-Menu">
					<NavLink to="/">Home</NavLink>
					<button onClick={logout}>Logout</button>
				</section>
			</nav>
		);
	} else {
		return (
			<section className="nav-superior">
				<section className="Navegador-Menu">
					<NavLink to="/cadastro">Cadastro</NavLink>
					<NavLink to="/login">Login</NavLink>
				</section>
			</section>
		);
	}

	function logout() {
		user.setToken({ token: "null", nome: "null" });
		navigate("/login");
	}
}
