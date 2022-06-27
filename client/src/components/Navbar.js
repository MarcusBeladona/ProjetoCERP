import { Link, useNavigate } from "react-router-dom";
import logoCerp from "../util/logo-cerp.png";
import "./Navbar.css";

import { useContext } from "react";
import { AuthContext } from "../App";

export function Navbar() {
	const user = useContext(AuthContext).tokenBody;
	const navigate = useNavigate();

	// Reseta Token e direciona pra /login
	function logout() {
		user.setToken({ token: "null", nome: "null" });
		navigate("/login");
	}

	return (
		// Logado
		<nav className="navbar">
			<Link to="/">
				<img src={logoCerp} height="24" alt="logo" />
			</Link>
			<section className="navbar-buttons">
				<p className="t-title">{user.nome}</p>
				<button onClick={logout}>Logout</button>
			</section>
		</nav>
	);
}
