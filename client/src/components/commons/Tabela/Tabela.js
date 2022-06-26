import "./Tabela.css";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export function Tabela() {
	const navigate = useNavigate();

	return (
		<div>
			<table className="tabela">
				<thead>
					<tr>
						<th></th>
						<th>Nome</th>
						<th>Data de Matrícula</th>
						<th>Objetivo</th>
						<th>Horário</th>
						<th>Ações</th>
					</tr>
				</thead>

				<tbody className="body-tabela">
					<tr className="inicio-tabela">
						<th scope="row">1</th>
						<td>Antônio Henrique</td>
						<td>03/07/2020</td>
						<td className="objetivo">
							<div className="card-objetivo">Musculação</div>
						</td>
						<td className="horario">
							<div className="card-horario">18:00</div>
						</td>
						<td className="botoes">
							<Button
								outline
								color="primary"
								className="botao"
								onClick={() => {
									navigate("/visualizar");
								}}
							>
								Visualizar
							</Button>
							<Button outline color="warning" className="botao">
								Editar
							</Button>
							<Button color="danger" className="botao">
								Excluir
							</Button>
						</td>
					</tr>

					<tr className="inicio-tabela">
						<th scope="row">1</th>
						<td>Antônio Henrique</td>
						<td>03/07/2020</td>
						<td className="objetivo">
							<div className="card-objetivo">zz Musculação</div>
						</td>
						<td className="horario">
							<div className="card-horario">18:00</div>
						</td>
						<td className="botoes">
							<Button outline color="primary" className="botao">
								Visualizar
							</Button>
							<Button outline color="warning" className="botao">
								Editar
							</Button>
							<Button color="danger" className="botao">
								Excluir
							</Button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
