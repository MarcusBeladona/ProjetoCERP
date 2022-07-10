import "./PaginaVisualizar.css";

import { Navbar } from "../components/Navbar";
import { AuthContext, CheckLogin } from "../App";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { axiosGetAlunoById, axiosGetAvaliacaoByIdAndDelete, axiosGetAvaliacoes } from "../api/Request";
import { useContext, useEffect, useState } from "react";

export function PaginaVisualizar() {
	if (CheckLogin()) {
		return (
			<div className="PaginaVisualizar">
				<Navbar></Navbar>
				<div className="Conteudo">
					<div className="Area">
						<VisualizarAluno></VisualizarAluno>
						<TabelaAvaliacao></TabelaAvaliacao>
					</div>
				</div>
			</div>
		);
	}
}

function VisualizarAluno() {
	const { register, handleSubmit } = useForm();
	const token = useContext(AuthContext).tokenBody.token;
	const { alunoId } = useParams();
	const [aluno, setAluno] = useState("");

	useEffect(() => {
		axiosGetAlunoById(token, alunoId)
			.then(res => {
				setAluno(res.data);
			})
			.catch(err => {
				alert("Não foi possível mostrar alunos, tente novamente.");
				console.log(err);
			});
	}, [token, alunoId]);

	return (
		<form onSubmit={handleSubmit()} className="Visualizar">
			<header>
				<h1>Visualizar Aluno</h1>
			</header>
			<div className="Formulario">
				<h3>Dados Pessoais</h3>
				<div className="grid-2c">
					<article>
						<label>Nome</label>
						<input {...register("nome")} type="text" defaultValue={aluno.nome} disabled />
					</article>
					<article>
						<label>Data de Nascimento</label>
						<input {...register("nascimento")} type="date" defaultValue={aluno.nascimento} disabled></input>
					</article>
					<article>
						<label>Telefone</label>
						<input {...register("telefone")} type="tel" defaultValue={aluno.telefone} disabled></input>
					</article>
					<article>
						<label>CPF</label>
						<input {...register("cpf")} type="text" defaultValue={aluno.cpf} disabled></input>
					</article>
				</div>

				<h3>Endereço</h3>
				<div className="grid-3c">
					<article>
						<label>Rua</label>
						<input {...register("rua")} type="text" defaultValue={aluno.rua} disabled />
					</article>
					<article>
						<label>Número</label>
						<input {...register("numero")} type="text" defaultValue={aluno.numero} disabled></input>
					</article>
					<article>
						<label>Bairro</label>
						<input {...register("bairro")} type="text" defaultValue={aluno.bairro} disabled></input>
					</article>
					<article>
						<label>Cidade</label>
						<input {...register("cidade")} type="text" defaultValue={aluno.cidade} disabled></input>
					</article>
					<article>
						<label>Estado</label>
						<input {...register("estado")} type="text" defaultValue={aluno.estado} disabled></input>
					</article>
					<article>
						<label>CEP</label>
						<input {...register("cep")} type="text" defaultValue={aluno.cep} disabled></input>
					</article>
				</div>
				<h3>Matrícula</h3>
				<div className="grid-3c">
					<article>
						<label>Data de Matrícula</label>
						<input {...register("dataMatricula")} type="date" defaultValue={aluno.dataMatricula} disabled></input>
					</article>
					<article>
						<label>Objetivo</label>
						<input {...register("objetivo")} type="text" defaultValue={aluno.objetivo} disabled></input>
					</article>
					<article>
						<label>Horário</label>
						<input {...register("horario")} type="time" defaultValue={aluno.horario} disabled></input>
					</article>
				</div>
			</div>
		</form>
	);
}

export function TabelaAvaliacao() {
	const navigate = useNavigate();

	const token = useContext(AuthContext).tokenBody.token;

	const { alunoId } = useParams();
	const [lista, setLista] = useState([]);

	function deleteAvaliacao(id) {
		axiosGetAvaliacaoByIdAndDelete(token, id)
			.then(res => {
				alert("Avaliação excluída com sucesso.");
				window.location.reload();
			})
			.catch(e => {
				alert("Algo deu errado ao excluir, tente novamente.");
				console.log(e);
			});
	}

	useEffect(() => {
		axiosGetAvaliacoes(token, alunoId)
			.then(res => {
				setLista(res.data);
				console.log(res.data);
			})
			.catch(err => {
				alert("Não foi possível mostrar avaliações, tente novamente.");
				console.log(err);
			});
	}, [alunoId, token]);

	const itens = [];

	for (const [index, avaliacao] of lista.entries()) {
		// Corrigindo data de avaliação
		const dataSplit = avaliacao.dataAvaliacao.split("-");
		const data = `${dataSplit[2]}/${dataSplit[1]}/${dataSplit[0]}`;

		// Correndo pessoa
		itens.push(
			<tr key={index + 1}>
				<th scope="Tabela-Row">{index + 1}</th>
				<td>{avaliacao.avaliadorId.nome}</td>
				<td>{data}</td>
				<td className="Tabela-Tipo">{avaliacao.tipo}</td>
				<td className="Tabela-Botoes">
					<button className="c-success" onClick={() => navigate("/visualizarAvaliacao/" + avaliacao._id)}>
						Visualizar
					</button>
					<button className="c-primary" onClick={() => navigate("/editarAvaliacao/" + avaliacao._id)}>
						Editar
					</button>
					<button onClick={() => navigate("/imprimirAvaliacao/" + avaliacao._id)}>Imprimir</button>
					<button className="c-warning" onClick={() => deleteAvaliacao(avaliacao._id)}>
						Excluir
					</button>
				</td>
			</tr>
		);
	}

	return (
		<div className="container">
			<header className="header">
				<h1>Avaliações</h1>
				<button className="button-primary" onClick={() => navigate("/novaAvaliacao/" + alunoId)}>
					Nova Avaliação
				</button>
			</header>
			<table className="TabelaAvaliacao">
				<thead>
					<tr>
						<th></th>
						<th>Avaliador</th>
						<th>Data de avaliação</th>
						<th className="Tabela-Botoes">Ações</th>
					</tr>
				</thead>
				<tbody>{itens}</tbody>
			</table>
		</div>
	);
}
