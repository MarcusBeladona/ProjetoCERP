import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export function Sidebar() {
	return (
		<nav className="sidebar">
			<NavLink to="/">Dashboard</NavLink>
			<NavLink to="/visualizar">Visualizar</NavLink>
			<NavLink to="/editarAluno">Editar Aluno</NavLink>
			<NavLink to="/novaAvaliacao">Nova Avaliação</NavLink>
		</nav>
	);
}
