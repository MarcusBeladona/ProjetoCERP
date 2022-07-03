import "./Tabela.css";
import { useNavigate } from "react-router-dom";

export function Tabela() {
	const navigate = useNavigate();

	const lista = [
		{ nome: "Henrique", data: "10/07/2022", objetivo: "Musculação", horario: "18:00" },
		{ nome: "Lady Gaga", data: "28/02/2022", objetivo: "Musculação", horario: "16:30" },
	];

	const itens = [];

	for (const [index, pessoa] of lista.entries()) {
		itens.push(
			<tr key={index + 1}>
				<th scope="Tabela-Row">{index + 1}</th>
				<td>{pessoa.nome}</td>
				<td>{pessoa.data}</td>
				<td className="Tabela-Objetivo">{pessoa.objetivo}</td>
				<td className="Tabela-Horario">{pessoa.horario}</td>
				<td className="Tabela-Botoes">
					<button  className="c-success" onClick={() => navigate("/visualizar")}>Visualizar</button>
					<button className="c-primary"onClick={() => navigate("/editarAluno")}>Editar</button>
					<button className="c-warning" onClick={() => console.log("não")}>Excluir</button>
				</td>
			</tr>
		);
	}

	return (
		<table className="Tabela">
			<thead>
				<tr>
					<th></th>
					<th>Nome</th>
					<th>Data de Matrícula</th>
					<th>Objetivo</th>
					<th>Horário</th>
					<th className="Tabela-Botoes">Ações</th>
				</tr>
			</thead>
			<tbody>{itens}</tbody>
		</table>
	);
}
