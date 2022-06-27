import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export function Sidebar() {
	return (
		<nav className="sidebar">
			<NavLink to="/">Dashboard</NavLink>
			<NavLink to="/alunos">Alunos</NavLink>
			<NavLink to="/avaliacoes">Avaliações</NavLink>
		</nav>
	);
}
